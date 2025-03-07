const jobService = require("../service/jobs");
// Create a new job
const companyService = require("../service/company");
exports.createJob = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    let company = await companyService.getCompanyByUserId(req.user.id);
    if (!company) {
      return res.status(404).send({ msg: "company not found" });
    }
    req.body.companyId = company.id;
    const job = await jobService.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await jobService.getAll(req.query);
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await jobService.getJobById(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all jobs by company ID
exports.getJobsByCompanyId = async (req, res) => {
  try {
    const jobs = await jobService.getAllByCompanyId(req.params.companyId);
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a job by ID
exports.updateJob = async (req, res) => {
  try {
    const job = await jobService.update(req.params.id, req.body);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a job by ID
exports.deleteJob = async (req, res) => {
  try {
    const job = await jobService.delete(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
