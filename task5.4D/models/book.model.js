const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    match: /^b\d+$/ // format b1, b2
  },
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  year: {
    type: Number,
    required: true,
    min: 1800,
    max: new Date().getFullYear()
  },
  genre: {
    type: String,
    required: true,
    minlength: 3
  },
  summary: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 500
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    validate: {
      validator: v => parseFloat(v.toString()) > 0,
      message: "Price must be positive"
    }
  }
}, { strict: "throw" }); //rejects unknown fields

module.exports = mongoose.model('Book', BookSchema);