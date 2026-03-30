const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task4DB");

const Student = mongoose.model("Student", {
  name: String,
  course: String,
  university: String,
  description: String
});

mongoose.connection.once("open", async () => {
  console.log("MongoDB connected");

  const students = [
    { name: "KVS Nikhil", course: "AI", university: "Deakin", description: "Top student" },
    { name: "Rohit", course: "AI", university: "Deakin", description: "Skillful coder" },
    { name: "Virat", course: "AI", university: "Deakin", description: "Strong analyst" },
    { name: "Chandu", course: "AI", university: "Deakin", description: "Problem solver" },
    { name: "Venkat", course: "AI", university: "Deakin", description: "Team player" },
    { name: "Pooja", course: "AI", university: "Deakin", description: "Data enthusiast" },
    { name: "Ruchi", course: "AI", university: "Deakin", description: "Excellent communicator" },
    { name: "Shyam", course: "AI", university: "Deakin", description: "Quick learner" },
    { name: "Tony", course: "AI", university: "Deakin", description: "Creative thinker" },
    { name: "Mark", course: "AI", university: "Deakin", description: "Agile developer" },
    { name: "Rovma", course: "AI", university: "Deakin", description: "Committed performer" }
  ];

  await Student.insertMany(students);

  console.log("Student data inserted successfully");

  mongoose.connection.close();
});