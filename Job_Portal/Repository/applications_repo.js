const Application = require("../Models/applications_model");

exports.getAll = async (query) => {
    let app = await Application.find(query);
    return app;
};

exports.create = async (payload) => {
    let app = await Application.create(payload);
    return app;
};

exports.update = async (id, payload) => {
    let app = await Application.findByIdAndUpdate(id, payload,{new: true});
    return app;
};

exports.getByUserId = async (userId) => {
    let app = await Application.find({ userId: userId });
    return app;
};

exports.getByJobId = async (jobId) => {
    let app = await Application.find({ jobId: jobId });
    return app;
};