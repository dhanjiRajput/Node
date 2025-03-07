import React, { useEffect, useState } from 'react';
import { API } from '../config/API';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [jobs, setJobs] = useState([]);

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
    return diffDays > 0 ? `${diffDays} days left` : "Application closed";
  };
  const applyJob = async (jobId) => {
    console.log(jobId);
    let res = await API.post("/applications", { jobId: jobId })
    console.log(res);

  }
  const nav = useNavigate()
  return (
    <div className="container mt-4">
      <h2>Job Listings</h2>
      {jobs.length > 0 ? (
        <div className="row">
          {jobs.map((job) => (
            <div key={job._id} className="col-md-6 mb-3">
              <div className="card p-3">
                <h5>{job.title}</h5>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Job Type:</strong> {job.jobType}</p>
                <p><strong>Required Experience:</strong> {job.requiredExp}</p>
                <p><strong>Skills:</strong> {job.requiredSkills.join(", ")}</p>
                <p>{job.desc}</p>
                <p><strong>End Date:</strong> {new Date(job.endDate).toLocaleDateString()}</p>
                <p><strong>Time Left:</strong> {calculateDaysLeft(job.endDate)}</p>
                <button className="btn btn-primary" onClick={() => applyJob(job._id)}>Apply</button>
                <button className="btn btn-info" onClick={() => nav(`/job/${job._id}`)}>view </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading jobs...</p>
      )}
    </div>
  );
};

export default Home;
