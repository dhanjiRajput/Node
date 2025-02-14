const {Router}=require("express");
const companyRoute=Router();
const companyComtroller=require("../Controllers/company_controller");
const Ability = require("../Middleware/ability");

companyRoute.post("/create",Ability(["ADMIN","HR"]),companyComtroller.createCompany);
companyRoute.get("/",Ability(["ADMIN"]),companyComtroller.getAllCompany);
companyRoute.get("/:id",companyComtroller.getCompanyById);
companyRoute.get("/admin/unverified",Ability(["ADMIN"]),companyComtroller.getUnverified);
companyRoute.delete("/:id",Ability(["ADMIN","HR"]),companyComtroller.deleteCompany);
companyRoute.put("/:id",Ability(["ADMIN","HR"]),companyComtroller.updateCompany);

module.exports=companyRoute;