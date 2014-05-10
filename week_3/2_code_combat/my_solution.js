// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// RESCUE MISSION

// move down
// move down
// move right
// move up
// move up
// move right
// move right
// move right
// move down
// move down
// ATTACK!

this.moveDown();
this.moveDown();
this.moveRight(); 
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();
 
// GRAB THE MUSHROOM

// move up
// move right
// move left
// move up
// ATTACK!

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// DRINK ME

// move right
// ATTACK 
// move right
// move down
// move up
// move right
// ATTACK!

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// TAUNT THE GUARDS

// move right
// bust down door

// move right
// say "Hey there!"
// move left
// move left
// say "Attack!"

// move right
// say "Follow me."

// move right
// move right
// move up
// move right
// say "Attack!"
// say "Attack!"
// ATTACK!
// ATTACK!
// say "Follow me."
// move right
// move right

this.moveRight();
this.bustDownDoor();

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

this.moveRight();
this.say("Follow me.");

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Attack!");
this.say("Attack!");
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.say("Follow me.");
this.moveRight();
this.moveRight();

// IT'S A TRAP

// move down
// move down
// say "Hey there!"
// move up
// say "Attack!"
// move up

this.moveDown();
this.moveDown();
this.say("Hey There!");
this.moveUp();
this.say("Attack!");
this.moveUp();

// BREAK THE PRISON

// if {insert name of friend}, return true
// if {insert name of enemy}, return false

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if (name == "Phoebe")
    return true;
if(name == "Lucas")
    return true;
this.say("Follow me.");
if(name == "Gort")
    return false;
if(name == "Brack")
    return false;
if(name == "Marcus")
    return true;
if(name == "Robert")
    return true;
if(name == "Grul'thock")
    return false;
if(name == "Gordon")
    return true;
    
// TAUNT

// say "Hey!"
// say "Come over here!"
// say "You're dumb!"
// say "Come this way!"

this.say("Hey!");
this.say("Comer over here!");
this.say("You're dumb!");
this.say("Come this way!");

// COWARDLY TAUNT

// move to 50,36 coordinates
// say "Hey there"
// move to 70,10 coordinates

this.moveXY(50,36);
this.say("Hey there!");
this.moveXY(70,10);

  
// COMMANDING FOLLOWERS

// say "Follow me"
// say "Attack!"
// say "Follow me!"
// move 60, 37 coordinates
// say "Attack!"
// move to 85,64 coordinates
// say "Attack"!

this.say("Follow me!");

this.say("Attack!");
this.say("Follow me!");

this.moveXY(60, 37);
this.say("Attack!");
this.moveXY(85,64);
this.say("Attack!");

// MOBILE ARTILLARY 

// move artillerary
// attack ogres on top
// attack ogre on top again
// attack ogres on top-right
// attack ogre on top-right again

this.moveXY(46, 41);
this.attackXY(48, 65);
this.attackXY(46, 56);
this.attackXY(69, 58);
this.attackXY(58, 47);
 
/* 
What is [this] referring to? Think programming-wise rather than in the terms of the game.

[this] seems to be short-hand and refers to an already defined variable.  In this case, its referring to Tharin.


What does the () do in JavaScript?

The () sets parameters to pass through the function.


What is the point of the semicolons?
 
The semi-colon separates statements, which are pieces of code that tell the computer to do something.
They are not necessary if statements are on different lines, but they are necessary when statements are on the same line.


*/ 
 
// Reflection:
// Write your reflection here.
/*
I found Code Combat’s missions to be  simple yet useful as an early challenge in this week’s work and for the beginner stage  in which I find myself with web programming.  I have been exposed to Python and Ruby but not JavaScript.  Using Code Combat was my first look at  JavaScript, and I liked that it allowed me to get my feet wet.   I was able to begin to draw comparisons between what I know about Python and Ruby with the repeated code I was seeing in JavaScript.  

It was challenging to maintain a pseudocode-then-code routine, because of  the website’s lag and  the constant switching, copying, and pasting between browser and Sublime.  On multiple occasions, I wanted to write the code and test it on Code Combat and then write pseudocode on Sublime after finding code that worked.  I know the pseudocode-then-code routine is beneficial; I will need to continue to practice this process, to ensure its more natural for me.

Understanding the meaning of “this” was not immediate.  I could see that it was referring to Tharin, but I did not initially understand how since Code Combat does not provide all of the code for what one is seeing.

*/