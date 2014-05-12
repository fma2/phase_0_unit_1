// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Farheen Malik
//  2.


// 1. "YOU SIGNED... WHO?!"

var clientOne = {
    name: "Spike Lee",
    age: 55,
    quote: "All directors are storytellers, so the motivation was to tell the story I wanted to tell. That's what I love."
}

var clientTwo = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!"
}

// 2. "Here they Come!"

var clients = [clientOne, clientTwo]



// 3. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client(name, age, quote, showQuote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function () {
    	alert (this.quote)
    }
}
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
var bellKristen = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")

console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.age === 48);
console.log(shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.");





// 4. "SHOW 'EM OFF!"

function show() {
for (i=0; i<clients.length; i++) {
    console.log(clients[i])
    console.log(clients[i].name + " is " + clients[i].age)
}
}
show()



// ** BONUS **


//  Your Reflection:

// I did not have a pair for this GPS; I instead completed the steps on my own, explicating what I was doing aloud so the DBC Guide was able to hear. 

//  This week’s GPS aligned well with the challenges.  I felt successful going into it, as it was done at the conclusion of the week after I had completed most of the challenges.  This meant I was comfortable with declaring and manipulating variables in JavaScript, at the very least.  This basic knowledge was applied to the steps in the GPS with the DBC Guide’s helpful prompts.  As I explained my process, he would occasionally provide input in the form of a question--the questions were framed in a way that connected my basic knowledge to what the step in the challenge asked.  Overall, it made me look forward to Phase 1 when I am able to engage in similar processes in person.  

// I was able to successfully use functions through this challenge.  And, now that I have seen objects in different forms through all of this week’s challenges, I need to revisit “object literals” as a concept.    