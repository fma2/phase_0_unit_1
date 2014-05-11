// I worked [by myself, with:] on this challenge

// Your mission description:
// Practice reflecting with some protocol!  Record your comprehension and summarize your learnings with a 3-2-1 chart.
// 
// 

// Pseudocode
/*

Confirm user is ready to reflect on their learning.
	CONFIRM "Are you ready to reflect on today's learning?"

Prompt user to provide 3 facts they found out.
	DECLARE function factsvariable factOne
	SET variable equal to prompt "What is one fact you learned from today's lesson?"
	LOG user's response.

	DECLARE variable factTwo
	SET variable equal to prompt "What is another fact you learned from today's lesson?"
	LOG user's response.

	DECLARE variable factThree
	SET variable equal to prompt "What is one last fact you learned from today's lesson?"
	LOG user's response.

Prompt user to provide 2 questions about their learning.
	DECLARE variable questionOne
	SET variable equal to prompt "What is one question you still have about the material?"
	LOG user's response.

	DECLARE variable questionTwo
	SET variable equal to prompt "What is another question you still have about the material?"
	LOG user's response.
	
Prompt user to provide 1 point on using learning in the future.
	DECLARE variable futureOne
	SET variable equal to prompt "What is one way you can use today's material in the future?"
	LOG user's response.

Print responses to console

*/
// Initial Code

// Confirm user is ready to reflect on learnings

function confirmReady(){
	var x;
	if (confirm("Are you ready to reflect on today's learning?") === true) {
		x = "Great!  Let's start.";
	} else {
		x = "Hmm, I wonder why.  Raise your hand to speak to the teacher."
	}
}

//Prompt user to provide 3 facts they found out
function facts() {
	var factOne = prompt("What is one fact you learned from today's lesson?");
	var factTwo = prompt("What is another fact you learned from today's lesson?");
	var factThree = prompt("What is one last fact you learned from today's lesson.");
};
console.log(facts());
// Prompt user to provide 2 questions about their learning.
function questions() {
	var questionOne = prompt("What is one question you still have about the material?");
	var questionTwo = prompt("What is another question you still have about the material?");
}
questions()

// Prompt user to provide 1 point on using material in the future
function future() {
	var futureOne = prompt("What is one way you can use today's material in the future?");
}
future()

// Print response to console.


// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 
// 