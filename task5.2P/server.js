const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const booksRoutes = require('./routes/books.routes');
app.use('/api/books', booksRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Books API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});