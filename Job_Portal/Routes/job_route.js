const {Router}=require("express");
const jobRoutes=Router();
const jobControllers=require("../Controllers/job_controller");

jobRoutes.post("/",jobControllers.createJob);
jobRoutes.get("/",jobControllers.getAllJobs);
jobRoutes.get("/:id",jobControllers.getJobById);
jobRoutes.get("/company/:companyId",jobControllers.getJobsByCompanyId);
jobRoutes.patch("/:id",jobControllers.updateJob);
jobRoutes.delete("/:id",jobControllers.deleteJob);

module.exports=jobRoutes;