# SIT725_s224603449
SIT725 Introduction to Programming - Practical Tasks

Task2.2P
### GET /addNumbers
Add two numbers via query parameters:
http://localhost:3000/addNumbers?numA=5&numB=7
Response: The sum of 5 and 7 is 12

### POST /calculator
Perform calculation via JSON body:
POST http://localhost:3000/calculator
Body:
{
  "a": 5,
  "b": 3,
  "operation": "multiply"
}
Response: Result of multiply: 15
