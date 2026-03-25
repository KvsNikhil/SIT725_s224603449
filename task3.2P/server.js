const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Sample Recipe Data (Custom Domain)
const recipes = [
  {
    title: "Pasta",
    image: "images/pasta.jpg",
    description: "Delicious Italian pasta with tomato sauce"
  },
  {
    title: "Burger",
    image: "images/burger.jpg",
    description: "Juicy beef burger with cheese"
  },
  {
    title: "Salad",
    image: "images/salad.jpg",
    description: "Healthy green salad"
  }
];

// GET API
app.get("/api/recipes", (req, res) => {
  res.json({ status: 200, data: recipes });
});

// Start Server
app.listen(port, () => {
  console.log("Server running on port " + port);
});