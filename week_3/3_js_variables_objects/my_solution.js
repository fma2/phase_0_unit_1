// I paired by myself on this challenge.




// Pseudocode
// For 1, declare secretNumber as a number
// For 2, declare secretNumber is 7
// For 3, declare password as a string
// For 4, declare password as 'just open the door'
// For 5, declare allowedIn as a boolean
// For 6, declare allowedIn as a boolean  false
// For 7, add array items to members array
// For 8, declare 'John' as the first element in members array
// For 9, declare 'Mary' as the fourth element in members array


// __________________________________________
// Write your code below.
var secretNumber = 3
var secretNumber = 7
var password = 'Farheen'
var password = 'just open the door'
var allowedIn = true
var allowedIn = false
var members = ['Farheen', 'Faizah', 'Farnaz']
var members = ['John', 'Farheen', 'Faizah', 'Farnaz']
var members = ['John', 'Farheen', 'Faizah', 'Mary', 'Farnaz']







// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 





// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

