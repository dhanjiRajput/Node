const Job = require("../model/jobs");
const { getCompanyById } = require("../repository/company");

exports.create = async (data) => {
  try {
    let company = await getCompanyById(data.companyId);
    if (company.isVerified) {
      let job = await Job.create(data);
      return job;
    } else {
      throw new Error("unverified company");
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAll = async (query) => {
  try {
    let jobs = await Job.find(query);
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};
exports.getJobById = async (id) => {
  try {
    let job = await Job.findById(id);
    return job;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllByCompanyId = async (companyId) => {
  try {
    let jobs = await Job.find({ companyId: companyId });
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};

exports.update = async (id, data) => {
  try {
    let jobs = await Job.findByIdAndUpdate(id, data, { new: true });
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};

exports.delete = async (id) => {
  try {
    let jobs = await Job.findByIdAndDelete(id);
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};
