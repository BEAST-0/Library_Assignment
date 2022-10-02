const express = require("express");
const cors = require("cors");
const user = require("./routes/userroute");
const book = require("./routes/bookroute");
const app = new express();

app.use(cors());
app.use(express.json());

app.listen("3000", () => {
  console.log("Server started @ port 3000");
});

app.use("/users", user);
app.use("/books", book);
