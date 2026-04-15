const Book = require('../models/book.model');

const getAllBooks = async () => {
  return await Book.find({});
};

const getBookById = async (id) => {
  return await Book.findOne({ id });
};

//CREATE
const createBook = async (data) => {
  return await Book.create(data);
};

//UPDATE
const updateBook = async (id, data) => {
  if (data.id) {
    throw new Error("ID cannot be modified"); // IMMUTABLE
  }

  return await Book.findOneAndUpdate(
    { id },
    data,
    { new: true, runValidators: true }
  );
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook
};