const Job = require("../Models/job_model");

exports.createJob=async(data)=>{
    let job=await Job.create(data);
    return job;
};

exports.getJobById=async(id)=>{
    let job=await Job.findById(id);
    return job;
};

exports.getAllByCompanyId=async(companyId)=>{
    let jobs=await Job.find({companyId:companyId});
    return jobs;
};

exports.updateJob=async(id,data)=>{
    let job=await Job.findByIdAndUpdate(id,data,{new:true});
    return job;
};

exports.deleteJob=async(id)=>{
    let job=await Job.findByIdAndDelete(id);
    return job;
};

exports.getAllJob=async(query)=>{
    let job=await Job.findById(query);
    return job;
};