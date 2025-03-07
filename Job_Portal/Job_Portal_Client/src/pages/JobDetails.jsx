import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../config/API';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobDetails = () => {
    const [job, setJob] = useState({});
    const [applied, setApplied] = useState([]);
    const { id } = useParams();
    let [show, setShow] = useState(false);

    const applicationDetails = (app) => {
        let temp = app.map((app) => ({
            createdAt: app.createdAt,
            status: app.status,
            userId: app.userId._id,
            id: app._id,
            name: app.userId.name,
            profile_picture: app.userId.profile_picture
        }));
        setApplied(temp);
    };

    const getApplication = async () => {
        let res = await API.get(`/applications/job/${id}`);
        const { data } = res;
        setJob(data.job);
        applicationDetails(data.app);
    };

    useEffect(() => {
        getApplication();
    }, [id]);

    const nav = useNavigate()
    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-sm mb-4">
                <h1 className="mb-3">Job Details</h1>
                <h2 className="text-primary">{job?.title}</h2>
                <h4 className="text-muted">Ends on: {new Date(job.endDate).toLocaleDateString()}</h4>
                <button
                    className={`btn ${show ? 'btn-danger' : 'btn-success'} mt-3`}
                    onClick={() => setShow(!show)}>
                    {show ? 'Hide Applications' : 'Show Applications'}
                </button>
            </div>

            {show && (
                <div className="card p-4 shadow-sm">
                    <h3 className="mb-4">Applicants</h3>
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Applied On</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applied.map((user) => (
                                <tr key={user.id}>
                                    <td>
                                        <img
                                            src={user?.profile_picture}
                                            alt={user.name}
                                            width="50"
                                            className="rounded-circle border"
                                        />
                                    </td>
                                    <td>{user.name}</td>
                                    <td>
                                        <span className={`badge ${user.status === 'Accepted' ? 'bg-success' : 'bg-warning'} text-dark`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => nav(`/job/${user.id}/user/${user.userId}`)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default JobDetails;
