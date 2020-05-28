const mongoose = require("mongoose");

const BookTable = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNum: {
    type: Number,
    required: true
  },
  people: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }


});

module.exports = mongoose.model("bookTable", BookTable);
