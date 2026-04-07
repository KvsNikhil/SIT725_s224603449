const mongoose = require('mongoose');
const Book = require('../models/book.model');

mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

const books = [
  {
    id: "b1",
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    year: 2008,
    genre: "Science Fiction",
    summary: "Earth encounters alien civilization.",
    price: mongoose.Types.Decimal128.fromString("29.99")
  },
  {
    id: "b2",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    year: 1847,
    genre: "Classic",
    summary: "An orphaned governess story.",
    price: mongoose.Types.Decimal128.fromString("22.00")
  },
  {
    id: "b3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Classic",
    summary: "Love and social expectations.",
    price: mongoose.Types.Decimal128.fromString("22.00")
  },
  {
    id: "b4",
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical Fiction",
    summary: "WWII memories and identity.",
    price: mongoose.Types.Decimal128.fromString("25.39")
  },
  {
    id: "b5",
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    summary: "Belief and power.",
    price: mongoose.Types.Decimal128.fromString("31.99")
  }
];

async function seed() {
  await Book.deleteMany({});
  await Book.insertMany(books);
  console.log("Database seeded");
  process.exit();
}

seed();