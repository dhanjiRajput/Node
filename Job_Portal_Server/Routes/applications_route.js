const {Router}=require("express");
const applicationRoutes=Router();
const applicationControllers=require("../Controllers/applications_controller");

applicationRoutes.post("/",applicationControllers.createApplication);
applicationRoutes.get("/",applicationControllers.getAllApplication);
applicationRoutes.patch("/:id",applicationControllers.updateApplication);
applicationRoutes.get("/job/:jobId",applicationControllers.getApplicationsByJobId);
applicationRoutes.get("/user/:userId",applicationControllers.getApplicationsByUserId);

module.exports=applicationRoutes;