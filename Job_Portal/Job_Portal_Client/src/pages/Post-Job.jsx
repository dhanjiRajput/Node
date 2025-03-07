import React, { useState } from "react";
import { API } from "../config/API";
// import "bootstrap/dist/css/bootstrap.min.css";

const JobForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        jobType: "",
        location: "",
        salary: "",
        requiredSkills: "",
        desc: "",
        requiredExp: "",
        endDate: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createJob = async (job) => {
        try {
            let res = await API.post("/jobs", job)
            console.log(res);
            alert("Job created");
        } catch (error) {
            console.log(error);
            alert("Error creating job");
            
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let { requiredSkills } = formData

        console.log("Form Submitted", formData);

        let data = formData
        data.requiredSkills = requiredSkills.split(",")
        console.log(data);
        createJob(data)
    };

    return (
        <div className="container mt-5">
            <h2>Create Job Posting</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Job Type</label>
                    <select className="form-select" name="jobType" value={formData.jobType} onChange={handleChange} required>
                        <option value="">Select Type</option>
                        <option value="parttime">Part-time</option>
                        <option value="fullTime">Full-time</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Required Skills (comma separated)</label>
                    <input type="text" className="form-control" name="requiredSkills" value={formData.requiredSkills} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="desc" value={formData.desc} onChange={handleChange} required></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Required Experience</label>
                    <input type="text" className="form-control" name="requiredExp" value={formData.requiredExp} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Application Deadline</label>
                    <input type="date" className="form-control" name="endDate" value={formData.endDate} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default JobForm;