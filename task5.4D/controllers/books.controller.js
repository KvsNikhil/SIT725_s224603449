const booksService = require('../services/books.service');

exports.getAllBooks = async (req, res) => {
  const books = await booksService.getAllBooks();
  res.json({ data: books });
};

exports.getBookById = async (req, res) => {
  const book = await booksService.getBookById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json({ data: book });
};

//CREATE
exports.createBook = async (req, res) => {
  try {
    const book = await booksService.createBook(req.body);
    res.status(201).json(book);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: "Duplicate ID" });
    }
    res.status(400).json({ error: err.message });
  }
};

//UPDATE
exports.updateBook = async (req, res) => {
  try {
    const book = await booksService.updateBook(req.params.id, req.body);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};