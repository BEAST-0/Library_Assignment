const express = require("express");
const cors = require("cors");
const user = require("./routes/userroute");
const book = require("./routes/bookroute");
const app = new express();
<<<<<<< HEAD
=======
>>>>>>> c25a21ff1100e5d0e033d67856690385cc8c1774

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

<<<<<<< HEAD
app.listen("port", () => {
  console.log("Server started"= port);
=======
>>>>>>> c25a21ff1100e5d0e033d67856690385cc8c1774
});

app.use("/users", user);
app.use("/books", book);
