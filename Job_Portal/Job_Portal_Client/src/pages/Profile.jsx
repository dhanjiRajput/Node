import React, { useEffect, useState } from "react";
import { API } from "../config/API";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [applications, setApplications] = useState([]);

    const getProfileData = async () => {
        try {
            let res = await API.get(`/applications/user/`);
            setUser(res.data.user); // Assuming user data comes from API
            setApplications(res.data.applications);
        } catch (error) {
            console.log("Error fetching profile data:", error);
        }
    };

    useEffect(() => {
        getProfileData();
    }, []);

    return (
        <div className="container mt-4">
            {user ? (
                <div className="card p-4 shadow-sm" style={{ borderRadius: "12px" }}>
                    {/* User Profile Info */}
                    <div className="d-flex align-items-center mb-4">
                        <img
                            src={user.profile_picture || "https://via.placeholder.com/100"}
                            alt="Profile"
                            className="rounded-circle border me-3"
                            width="100"
                            height="100"
                            style={{ objectFit: "cover" }}
                        />
                        <div>
                            <h3 className="mb-0">{user.name}</h3>
                            <p className="text-muted">{user.email}</p>
                        </div>
                    </div>

                    {/* Job Applications Table */}
                    <h4 className="mt-3">Job Applications</h4>
                    {applications.length > 0 ? (
                        <table className="table table-hover mt-3">
                            <thead className="table-dark">
                                <tr>
                                    <th>Job Title</th>
                                    <th>Status</th>
                                    <th>Applied On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((app) => (
                                    <tr key={app._id}>
                                        <td className="align-middle">{app.jobId?.title || "N/A"}</td>
                                        <td className="align-middle">
                                            <span className={`badge ${app.status === "Accepted" ? "bg-success" : "bg-warning"} text-dark`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="align-middle">
                                            {new Date(app.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-muted">No job applications found.</p>
                    )}
                </div>
            ) : (
                <p className="text-center mt-4">Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
