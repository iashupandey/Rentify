require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const LandRoutes = require("./routes/landDetailsRoutes.js");
const userRoutes = require("./routes/userDetailsRoutes.js");
const likeRoutes = require("./routes/likeRoutes.js");
const interestRoutes = require("./routes/interestRoutes.js");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors({}));

app.use("/public", express.static("public"));
app.use(express.static("files"));
app.use(express.json());

app.use(authRoutes);
app.use(LandRoutes);
app.use(userRoutes);
app.use(likeRoutes);
app.use(interestRoutes);

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, (req, res) => {
  console.log("The server is started at port : " + PORT);
});

mongoose
  .connect(process.env.MONGOOSE_CONNECTION_URI)
  .then(console.log("Connection to database Succesfull.."));
