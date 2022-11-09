const express = require("express");
const Route = express.Router();
const cors = require("cors");
const Book = require("../model/bookmodel");
const app = new express();
const objectId = require("mongoose").Types.ObjectId;

app.use(cors);

// post

Route.post("/api/addbook", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");

  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    date: req.body.date,
    category: req.body.category,
  });

  book.save((err, doc) => {
    if (err) {
      console.log("Error in posting data", +err);
    } else {
      res.send(doc);
    }
  });
});

// Get

Route.get("/api/getbook", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");

  Book.find((err, doc) => {
    if (err) {
      console.log("Error in getting data", +err);
    } else {
      res.send(doc);
    }
  });
});

// get by id

Route.get("/api/getbook/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");

  if (objectId.isValid(req.params.id)) {
    Book.findById(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in getting data by id", +err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send(`No Book found with id ${req.params.id}`);
  }
});

// put

Route.put("/api/updatebook/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");

  if (objectId.isValid(req.params.id)) {
    let book = {
      name: req.body.name,
      author: req.body.author,
      date: req.body.date,
      category: req.body.category,
    };
    Book.findByIdAndUpdate(
      req.params.id,
      { $set: book },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Error in updating  book Details", +err);
        } else {
          res.send(doc);
        }
      }
    );
  } else {
    return res.status(400).send(`No Book found with id ${req.params.id}`);
  }
});

// Delete

Route.delete("/api/delete/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");

  if (objectId.isValid(req.params.id)) {
    Book.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) {
        console.log("Error in getting data by id", +err);
      } else {
        res.send(doc);
      }
    });
  } else {
    return res.status(400).send(`No Book found with given id ${req.params.id}`);
  }
});

module.exports = Route;
