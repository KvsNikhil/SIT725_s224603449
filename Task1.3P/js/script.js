const messages = [
"Learning JavaScript Basics",
"Welcome to Deakin SIT725",
"Building Interactive Web Pages",
"Exploring Frontend Development",
"Practicing Programming Skills"
];

function updateHeading(){

let randomPosition = generateRandomIndex(messages.length);

let selectedMessage = messages[randomPosition];

document.querySelector("#titleText").textContent = selectedMessage;

console.log("Selected message:", selectedMessage);

}

function generateRandomIndex(limit){

return Math.floor(Math.random() * limit);

}