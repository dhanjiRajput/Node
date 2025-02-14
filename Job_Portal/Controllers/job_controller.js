const jobService = require("../Service/job_service");

exports.createJob = async (req, res) => {
    try {
        req.body.userId = req.user.id;
        const job = await jobService.create(req.body);
        res.status(201).json({ success: true, data: job });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await jobService.getAll(req.query);
        res.status(200).json({ success: true, data: jobs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getJobById = async (req, res) => {
    let { id } = req.params;
    try {
        const job = await jobService.getJobsById(id);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }
        res.status(200).json({ success: true, data: job });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getJobsByCompanyId = async (req, res) => {
    let { companyId } = req.params;
    try {
        const jobs = await jobService.getAllByCompanyIds(companyId);
        res.status(200).json({ success: true, data: jobs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.updateJob = async (req, res) => {
    let { id } = req.params;
    try {
        const job = await jobService.update(id, req.body);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }
        res.status(200).json({ success: true, data: job });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteJob = async (req, res) => {
    let { id } = req.params;
    try {
        const job = await jobService.delete(id);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }
        res.status(200).json({ success: true, message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};