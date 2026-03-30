const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = 3000;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection (⚠️ SAME DB NAME AS seed.js)
mongoose.connect("mongodb://127.0.0.1:27017/task4DB");

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected Successfully");
});

// Schema
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  university: { type: String, required: true },
  description: { type: String }
});

const Student = mongoose.model("Student", StudentSchema);

// GET API
app.get("/api/students", async (req, res) => {
  const students = await Student.find({});
  res.json({
    statusCode: 200,
    data: students,
    message: "Data fetched successfully"
  });
});

// POST API
app.post("/api/students", async (req, res) => {
  try {
    const { name, course, university, description } = req.body;

    const newStudent = new Student({
      name,
      course,
      university,
      description
    });

    await newStudent.save();

    res.status(201).json({
      statusCode: 201,
      message: "Student added successfully",
      data: newStudent
    });

  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});