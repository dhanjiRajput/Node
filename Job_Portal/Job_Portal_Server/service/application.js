const Application = require("../model/application");
const { getUserDetails } = require("./details");
const { getJobById } = require("./jobs");

const ApplicationService = {
  getAll: async (query) => {
    let app = await Application.find(query);
    return app;
  },
  create: async (payload) => {
    let user = await Application.findOne(payload);
    if (user) {
      throw new Error("application already exists");
    }
    let app = await Application.create(payload);
    return app;
  },
  update: async (id, payload) => {
    console.log(id, payload);

    try {
      let app = await Application.findByIdAndUpdate(id, payload, { new: true });
   

      return app;
    } catch (error) {
     
    }
  },
  getByUserId: async (userId) => {
    let app = await Application.find({ userId: userId });
    return app;
  },
  getByJobId: async (jobId) => {
    let job = await getJobById(jobId);
    let app = await Application.find({ jobId: jobId }).populate("userId");

    return {
      app,
      job,
    };
  },
};

module.exports = ApplicationService;
