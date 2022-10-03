const express = require("express");
const cors = require("cors");
const user = require("./routes/userroute");
const book = require("./routes/bookroute");
const app = new express();
const path = require("path");

app.use(cors());
app.use(express.json());

app.use(express.static("./dist/frontend"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/frontend/index.html"));
});

app.listen("3000", () => {
  console.log("Server started @ port 3000");
});

app.use("/api/users", user);
app.use("/api/books", book);
