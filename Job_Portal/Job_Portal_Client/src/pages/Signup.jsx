import React, { useState } from "react";
import { API } from "../config/API";
import Cookies from "js-cookie";
import { put } from "@vercel/blob";
import { useNavigate, Link } from "react-router-dom"; // Import Link

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        number: "",
        gender: "",
        role: "CANDIDATE",
        profile_picture: null,
    });

    const nav = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const res = await put(file.name, file, {
                access: "public",
                token: "your_vercel_blob_token_here", // Store token in .env file
            });
            setFormData({ ...formData, profile_picture: res.url });
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await API.post("/users/signup", formData);
            Cookies.set("token", res.data.token);
            nav("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Number</label>
                        <input type="text" className="form-control" name="number" value={formData.number} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select className="form-select" name="role" value={formData.role} onChange={handleChange} required>
                            <option value="CANDIDATE">Candidate</option>
                            <option value="HR">HR</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Profile Picture</label>
                        <input type="file" className="form-control" name="profile_picture" onChange={handleFileChange} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Signup</button>
                </form>

                {/* Login Link */}
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignupForm;
