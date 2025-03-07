const express = require("express");
const router = express.Router();

const jobController=require("../controller/job")
// Create a new job
router.post("/", jobController.createJob);

// Get all jobs
router.get("/", jobController.getAllJobs);

// Get a job by ID
router.get("/:id", jobController.getJobById);

// Get all jobs by company ID
router.get("/company/:companyId", jobController.getJobsByCompanyId);

// Update a job by ID
router.put("/:id", jobController.updateJob);

// Delete a job by ID
router.delete("/:id", jobController.deleteJob);

module.exports = router;
