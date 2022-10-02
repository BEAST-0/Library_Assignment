const express = require("express");
const cors = require("cors");
const UserRoutes = express.Router();
const User = require("../model/usermodel");
const app = new express();

app.use(cors());

UserRoutes.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user.save((err, doc) => {
    if (err) {
      console.log("Error in Posting Data", +err);
    } else {
      res.send(doc);
    }
  });
});

UserRoutes.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");

  User.find((err, doc) => {
    if (err) {
      console.log("Error in Getting Data", +err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = UserRoutes;
