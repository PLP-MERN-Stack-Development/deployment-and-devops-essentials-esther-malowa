
require("./instrument.js");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Sentry = require("@sentry/node");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("API is running...");
});


app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

Sentry.setupExpressErrorHandler(app);


app.use((err, req, res, next) => {
  res.status(500).send({
    error: "Something went wrong!",
    sentryId: res.sentry,
  });
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
