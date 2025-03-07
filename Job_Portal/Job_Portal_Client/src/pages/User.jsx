import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../config/API';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserDetails = () => {
    const [userData, setUserData] = useState(null);
    const { id, jobId } = useParams();
    const [status, setStatus] = useState('Applied');
    const statusOptions = ['Applied', 'Shortlisted', 'Rejected', 'Hired'];

    const getUserDetails = async () => {
        try {
            const res = await API.get(`/users/info/${id}`);
            setUserData(res.data);
        } catch (error) {
            console.error('Error fetching user data:', error.message);
        }
    };

    const updateAppliedStatus = async (value) => {
        console.log(value);
        
        try {
            let res = await API.patch(`/applications/${jobId}`, { status: value })
            console.log(res);

        } catch (error) {
            console.log(error.message);

        }
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        updateAppliedStatus(e.target.value)
    };

    useEffect(() => {
        getUserDetails();
    }, [id]);

    if (!userData) return <div>Loading...</div>;

    const { user, details } = userData;
    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-sm mb-4">
                <div className="d-flex align-items-center mb-4">
                    <img src={user.profile_picture} alt={user.name} width="100" className="rounded-circle me-3 border" />
                    <div>
                        <h2>{user.name}</h2>
                        <p className="text-muted mb-1">{user.email}</p>
                        <span className={`badge ${user.isActive ? 'bg-success' : 'bg-danger'}`}>{user.isActive ? 'Active' : 'Inactive'}</span>
                    </div>
                </div>
                <h4>Experience Level: {details.experienceLevel}</h4>
                <h5 className="mt-3">Skills:</h5>
                <ul className="list-inline">
                    {details.skills.map((skill, index) => (
                        <li key={index} className="list-inline-item badge bg-primary me-1">{skill}</li>
                    ))}
                </ul>
                <h5 className="mt-3">Work Experiences:</h5>
                <ul className="list-group">
                    {details.workExperiences.map((exp, index) => (
                        <li key={index} className="list-group-item">
                            <h6>{exp.jobTitle} at {exp.companyName}</h6>
                            <p className="mb-1">{new Date(exp.startDate).toLocaleDateString()} - {exp.jobStatus === 'running' ? 'Present' : new Date(exp.endDate).toLocaleDateString()}</p>
                            <p>{exp.jobDescription}</p>
                        </li>
                    ))}
                </ul>
                <h5 className="mt-3">Education:</h5>
                <ul className="list-group">
                    {details.education.map((edu, index) => (
                        <li key={index} className="list-group-item">
                            <h6>{edu.degree} in {edu.fieldOfStudy}</h6>
                            <p>{edu.institutionName}</p>
                            <p className="mb-0">{new Date(edu.startDate).toLocaleDateString()} - {new Date(edu.endDate).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-4">
                    <a href={details.resumeUrl} className="btn btn-outline-primary me-3" target="_blank" rel="noopener noreferrer">View Resume</a>
                    <select className="form-select d-inline w-auto" value={status} onChange={handleStatusChange}>
                        {statusOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
