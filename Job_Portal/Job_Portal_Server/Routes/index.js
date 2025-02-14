const {Router}=require("express");
const userRoutes = require("./user_route");
const userDetailsRoutes = require("./user_details_route");
const companyRoute = require("./company_route");
const jobRoutes = require("./job_route");
const applicationRoutes = require("./applications_route");
const index=Router();


index.use("/users",userRoutes);
index.use("/user_details",userDetailsRoutes);
index.use("/companies",companyRoute);
index.use("/jobs",jobRoutes);
index.use("/applications",applicationRoutes);


module.exports=index;