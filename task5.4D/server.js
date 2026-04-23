const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// MongoDB connection (HARDCODED)
mongoose.connect('mongodb://127.0.0.1:27017/booksDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const booksRoutes = require('./routes/books.routes');
app.use('/api/books', booksRoutes);

// Integrity check route
app.get('/api/integrity-check42', (req, res) => {
  res.set('X-Developed-By', 's224603449');
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});