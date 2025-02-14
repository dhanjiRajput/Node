const jobRepository = require("../Repository/job_repo");
const companyRepository = require("../Repository/company_repo");

exports.create = async (data) => {
    try {
        let company = await companyRepository(data.companyId);
        if (company.isVerified) {
            let job = await jobRepository.createJob(data);
            return job;
        } else {
            throw new Error("unverified company");
        }
    } catch (error) {
        throw new Error(error);
    }
};

exports.getAll = async (data) => {
    try {
        let jobs = await jobRepository.getAllJob(data);
        return jobs;
    } catch (error) {
        throw new Error(error);
    }
};

exports.getJobsById = async (id) => {
    try {
        let job = await jobRepository.getJobById(id);
        return job;
    } catch (error) {
        throw new Error(error);
    }
};

exports.update = async (id, data) => {
    try {
        let job = await jobRepository.updateJob(id, data);
        return job;
    } catch (error) {
        throw new Error(error);
    }
};

exports.delete = async (id) => {
    try {
        let job = await jobRepository.deleteJob(id);
        return job;
    } catch (error) {
        throw new Error(error);
    }
};

exports.getAllByCompanyIds=async(companyId)=>{
    try {
        let jobs=await jobRepository.getAllByCompanyId(companyId);
        return jobs;
    } catch (error) {
        throw new Error(error);
    }
};