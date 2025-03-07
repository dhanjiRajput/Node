import React, { useState } from "react";
import { API } from "../config/API";

const CompanyForm = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        location: "",
        number: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const createCompany = async () => {
        try {
            let res = await API.post("/companies/create", formData);
            console.log(res);
            alert("Company created successfully!");
        } catch (error) {
            console.log("Failed to create company", error);
            alert("Failed to create company");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        createCompany();
    };

    return (
        <div 
            className="container d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <div 
                className="card shadow p-4"
                style={{ maxWidth: "500px", width: "100%" }}
            >
                <h2 className="text-center mb-4">Company Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contact Number</label>
                        <input
                            type="number"
                            className="form-control"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CompanyForm;
