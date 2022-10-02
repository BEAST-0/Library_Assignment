const mongoose = require("mongoose");
const Book = mongoose.model("book", {
  name: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = Book;
