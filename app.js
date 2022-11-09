const express = require("express");
const cors = require("cors");
const user = require("./routes/userroute");
const book = require("./routes/bookroute");
const app = new express();

const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static("./dist/frontend"));

app.use("/user", user);
app.use("/book", book);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log("listening to port");
});
