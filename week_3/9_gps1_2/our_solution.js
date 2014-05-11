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