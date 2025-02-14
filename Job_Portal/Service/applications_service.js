const applicationRepository=require("../Repository/applications_repo");

exports.apply=async(data)=>{
    try {
        let application=await applicationRepository.create(data);
        return application;
    } catch (error) {
        throw new Error("Couldn't apply for job " + data.jobId);
    }
};

exports.getApplicationsByUserId=async(userId)=>{
    try {
        let applications=await applicationRepository.getByUserId(userId);
        return applications;
    } catch (error) {
        throw new Error("Couldn't get applications for user " + userId);
    }
};

exports.getApplicationsByJobId=async(jobId)=>{
    try {
        let applications=await applicationRepository.getByJobId(jobId);
        return applications;
    } catch (error) {
        throw new Error("Couldn't get applications for job " + jobId);
    }
};

exports.updateApplication=async(id,data)=>{
    try {
        let application=await applicationRepository.update(id,data);
        return application;
    } catch (error) {
        throw new Error("Couldn't update applications" + data.jobId);
    }
};

exports.getAllApplications=async(query)=>{
    try {
        let applications=await applicationRepository.getAll(query);
        return applications;
    } catch (error) {
        throw new Error("Couldn't get all applications");
    }
};