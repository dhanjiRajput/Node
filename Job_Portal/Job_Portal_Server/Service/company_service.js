const companyRepo=require("../Repository/company_repo");

exports.createCompany=async(data)=>{
    let company=await companyRepo.createCompany(data);
    return company;
};

exports.getCompanyById=async(id)=>{
    let company=await companyRepo.getCompanyById(id);
    return company;
};

exports.updateCompany=async(id,data)=>{
    let company=await companyRepo.updateCompany(id,data);
    return company;
};

exports.deleteCompany=async(id)=>{
    let company=await companyRepo.deleteCompany(id);
    return company;
};

exports.getAllCompany=async()=>{
    let companies=await companyRepo.getAllCompany();
    return companies;
};

exports.getAllUnVerifiedCompany=async()=>{
    let companies=await companyRepo.getAllCompany({isVerified:false});
    return companies;
};