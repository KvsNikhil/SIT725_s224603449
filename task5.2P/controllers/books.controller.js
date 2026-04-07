const booksService = require('../services/books.service');

// Fetch all books
exports.getAllBooks = (req, res) => {
  const allBooks = booksService.getAllBooks();
  res.json({ data: allBooks });
};

// Fetch single book using ID
exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  const selectedBook = booksService.getBookById(bookId);

  if (!selectedBook) {
    return res.status(404).json({ message: 'Requested book does not exist' });
  }

  res.json({ data: selectedBook });
};