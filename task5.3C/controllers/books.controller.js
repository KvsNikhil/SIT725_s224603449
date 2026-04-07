const booksService = require('../services/books.service');

exports.getAllBooks = async (req, res) => {
  const books = await booksService.getAllBooks();
  res.json({ data: books });
};

exports.getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await booksService.getBookById(id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json({ data: book });
};