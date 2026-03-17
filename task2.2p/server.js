const express = require('express');
const app = express();
const PORT = 3000;

// Serve files from the 'public' folder
app.use(express.static('public'));

// Root route - serves homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// GET endpoint to calculate sum
// Example: http://localhost:3000/addNumbers?numA=5&numB=7
app.get('/addNumbers', (req, res) => {
    const numA = parseFloat(req.query.numA);
    const numB = parseFloat(req.query.numB);

    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).send('Error: Both query parameters must be numbers!');
    }

    const result = numA + numB;
    res.send(`The sum of ${numA} and ${numB} is ${result}`);
});

// Middleware to parse JSON request bodies
app.use(express.json());

// POST endpoint for calculator
// Example JSON: { "a":5, "b":3, "operation":"multiply" }
app.post('/calculator', (req, res) => {
    const { a, b, operation } = req.body;

    // Validate numeric inputs
    if ([a, b].some(n => typeof n !== 'number')) {
        return res.status(400).send('Error: Please provide numbers in JSON body');
    }

    let output;
    switch (operation) {
        case 'add': output = a + b; break;
        case 'subtract': output = a - b; break;
        case 'multiply': output = a * b; break;
        case 'divide': output = b !== 0 ? a / b : 'Cannot divide by zero'; break;
        default: return res.status(400).send('Error: Invalid operation. Use add, subtract, multiply, divide');
    }

    res.send(`Result of ${operation}: ${output}`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});