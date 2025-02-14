const applicationService = require("../Service/applications_service");


exports.getAllApplication = async (req, res) => {
    try {
        const query = req.query || {};
        const applications = await applicationService.getAllApplications(query);
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createApplication = async (req, res) => {
    try {
        req.body.userId = req.user.id;
        const newApplication = await applicationService.apply(req.body);
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedApplication = await applicationService.updateApplication(id, req.body);
        res.status(200).json(updatedApplication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getApplicationsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const applications = await applicationService.getApplicationsByUserId(userId);
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getApplicationsByJobId = async (req, res) => {
    try {
        const { jobId } = req.params;
        const applications = await applicationService.getApplicationsByJobId(jobId);
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};