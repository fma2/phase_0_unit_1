// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
// Declare var adam
// Set var adam = {}

2. Give adam a name property with the value "Adam".
// Add name property to var adam
// Assign value to name property, name:"Adam"

3. Add a spouse property to terah and assign it the value of adam.
// Declare terah.spouse
// Set terah.spouse equal to adam

4. Change the value of the terah weight property to 125.
// Declare terah.weight
// Set terah.weight equal to 125

5. Remove the eyeColor property from terah.
// Declare terah.weight
// Set terah.weight equal to undefined

6. Add a spouse property to adam and assign it the value of terah.
// Add spouse property to var adam
// Assign value to spouse property, spouse: terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
// Declare terah.children
// Set terah.children = {}

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
// For terah.children, add carson property
// Add name property to carson
// Assign value to name property, name: "Carson"

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
// For terah.children, add carter property
// For carter property, add name property
// Assign value to name property, name: "Carter"


10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
// For terah.children, add colton property
// For colton property, add name property
// Assign value to name property, name: "Colton"

11. Add a children property to adam and assign it the value of terah children.
// Declare adam.children as equal to terah.children

*/

// __________________________________________
// Write your code below.

var adam = {
  name: "Adam",
  spouse: terah,
  children: terah.children,
}

terah.spouse = adam
terah.weight = 125
terah.eyeColor = undefined
terah.children = {
  carson: {
    name: "Carson",
  },
  carter: {
    name: "Carter",
  },
  colton: {
    name: "Colton",
  }
}

adam.children = terah.children



// __________________________________________
// Reflection: Use the reflection guidelines
// Because the format of the javascript file in this challenge was similar to the one in Challenge 3, I was able to quickly get working on the error messages.  Unfortunately, this also made me less conscientious about writing satisfactory pseudocode.  

// Though I began with pseudocode, I found myself wanting to just test code and write pseudocode after getting the code working.  I understand the value of pseudocode and would like to follow the pseudocode-to-code process better; had I written clearer pseudocode when declaring the names of the children, I would have not had to test and re-test.  To improve my pseudocode-ing, I believe I should begin to: (1) consider systems which make the pseudocode to code process feel less inconvenient  in terms of switching between computer applications (sublime to terminal, etc.), and (2) research examples of well-written pseudocode so I am more confident in my syntax.

// I appreciated that this challenge was similar to Challenge 3, as it allowed me to practice and build on recently acquired knowledge.   The differences between the challenges are apparent in their learning competencies.  This challenge added manipulation of object literals.  I am still working on fully understanding “object literal” as a larger concept and this challenge made the concept a bit more tangible.  
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)