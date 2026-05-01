const express = require('express');
const path = require('path');

const app = express();

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// Import calculator functions
const { add, subtract, multiply, divide } = require('./calculator');

// API routes
app.get('/api/add', (req, res) => {
    try {
        const result = add(parseFloat(req.query.a), parseFloat(req.query.b));
        res.json({ result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/api/subtract', (req, res) => {
    try {
        const result = subtract(parseFloat(req.query.a), parseFloat(req.query.b));
        res.json({ result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/api/multiply', (req, res) => {
    try {
        const result = multiply(parseFloat(req.query.a), parseFloat(req.query.b));
        res.json({ result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/api/divide', (req, res) => {
    try {
        const result = divide(parseFloat(req.query.a), parseFloat(req.query.b));
        res.json({ result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Export app for testing
module.exports = app;

// Start server
const PORT = 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}