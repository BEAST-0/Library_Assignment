const express = require("express");
const cors = require("cors");
const user = require("./routes/userroute");
const book = require("./routes/bookroute");
const app = new express();

const path = require("path");

const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;


app.listen("port", () => {
  console.log("Server started"= port);

app.use('/api', user);
app.use('/api', book);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/frontend/index.html"));


app.use("/users", user);
app.use("/books", book);
