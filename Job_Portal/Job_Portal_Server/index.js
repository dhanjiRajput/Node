const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const appRoutes = require("./routes/index");
const decodeToken = require("./middleware/decode");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1", decodeToken, appRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the job portal !");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("listening on port PORT", PORT);
  connectDb();
});
