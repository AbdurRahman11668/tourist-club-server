const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Tourist club is Running");
});

app.listen(port, () => {
  console.log(`Tourist Club is running on port ${port}`);
});
