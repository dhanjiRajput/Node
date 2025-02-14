const Company = require("../Models/company_model");

exports.createCompany=async(data)=>{
    let company=await Company.create(data);
    return company;
};

exports.getCompanyById=async(id)=>{
    let company=await Company.findById(id);
    return company;
};

exports.getAllCompany=async(query)=>{
    let company=await Company.find(query);
    return company;
}

exports.updateCompany=async(id,data)=>{
    let company=await Company.findByIdAndUpdate(id,data,{new:true});
    return company;
};

exports.deleteCompany=async(id)=>{
    let company=await Company.findByIdAndDelete(id);
    return company;
};