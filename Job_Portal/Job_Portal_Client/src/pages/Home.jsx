import React, { useEffect, useState } from "react";
import { API } from "../config/API";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const nav = useNavigate();

  const getJobs = async () => {
    try {
      let res = await API.get("/jobs");
      setJobs(res.data.data); // Store data in state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const calculateDaysLeft = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days left` : "Application Closed";
  };

  const applyJob = async (jobId) => {
    try {
      let res = await API.post("/applications", { jobId: jobId });
      alert("Application submitted successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to apply for the job");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Job Listings</h2>
      {jobs.length > 0 ? (
        <div className="row">
          {jobs.map((job) => (
            <div key={job._id} className="col-md-6">
              <div
                className="card p-4 shadow"
                style={{ borderRadius: "12px", backgroundColor: "#f8f9fa" }}
              >
                <h5 className="text-primary">{job.title}</h5>
                <p className="mb-1"><strong>Location:</strong> {job.location}</p>
                <p className="mb-1"><strong>Salary:</strong> {job.salary}</p>
                <p className="mb-1"><strong>Job Type:</strong> {job.jobType}</p>
                <p className="mb-1"><strong>Experience:</strong> {job.requiredExp}</p>
                <p className="mb-1"><strong>Skills:</strong> {job.requiredSkills.join(", ")}</p>
                <p className="mb-2">{job.desc}</p>
                <p className="mb-1"><strong>End Date:</strong> {new Date(job.endDate).toLocaleDateString()}</p>
                <p className={`mb-3 ${calculateDaysLeft(job.endDate) === "Application Closed" ? "text-danger" : "text-success"}`}>
                  <strong>Time Left:</strong> {calculateDaysLeft(job.endDate)}
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-primary" onClick={() => applyJob(job._id)}>Apply</button>
                  <button className="btn btn-info" onClick={() => nav(`/job/${job._id}`)}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading jobs...</p>
      )}
    </div>
  );
};

export default Home;
