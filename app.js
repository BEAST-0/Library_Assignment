const express = require("express");
const cors = require("cors");
const user = require("./routes/userroute");
const book = require("./routes/bookroute");
const app = new express();

const path = require("path");

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/user", user);
app.use("/book", book);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});

app.listen("port", () => {
  console.log("Server started" + port);
});
