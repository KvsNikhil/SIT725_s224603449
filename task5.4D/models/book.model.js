const mongoose = require('mongoose');

const currentYear = new Date().getFullYear();

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
    max: currentYear,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} must be an integer year'
    }
  },
  genre: {
    type: String,
    required: true,
    enum: ['Fiction', 'Non-Fiction', 'Mystery', 'Science', 'History', 'Other']
  },
  summary: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 500
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    validate: {
      validator: v => {
        const value = parseFloat(v.toString());
        return Number.isFinite(value) && value >= 0.99 && value <= 999.99;
      },
      message: 'Price must be a number between 0.99 and 999.99 AUD'
    }
  }
}, { strict: 'throw' }); // rejects unknown fields

module.exports = mongoose.model('Book', BookSchema);