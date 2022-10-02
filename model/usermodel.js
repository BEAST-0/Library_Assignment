const mongoose = require("../db.js");
const User = mongoose.model("user", {
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = User;
