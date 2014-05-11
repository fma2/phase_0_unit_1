// I worked [by myself, with:] on this challenge

// Your mission description:
// To collect students reflection after a lesson.  This application record students' comprehension and summarize their learnings with a 3-2-1 chart.
// 
// 

// Pseudocode
/*

Confirm user is ready to reflect on their learning.
	CONFIRM "Are you ready to reflect on today's learning?"

Prompt user to provide 3 facts they found out.
	DECLARE function facts

		DECLARE variable factOne within function
		SET variable equal to prompt "What is one fact you learned from today's lesson?"

		DECLARE variable factTwo within function
		SET variable equal to prompt "What is another fact you learned from today's lesson?"

		DECLARE variable factThree
		SET variable equal to prompt "What is one last fact you learned from today's lesson?"
	
	RUN function facts
	LOG user's response to console.

Prompt user to provide 2 questions about their learning.
	DECLARE function questions

		DECLARE variable questionOne within function
		SET variable equal to prompt "What is one question you still have about the material?"

		DECLARE variable questionTwo within function
		SET variable equal to prompt "What is another question you still have about the material?"

	RUN function questions
	LOG user's response to console.
	
Prompt user to provide 1 point on using learning in the future.
	DECLARE function future

		DECLARE variable futureOne within function
		SET variable equal to prompt "What is one way you can use today's material in the future?"
	
	RUN function future
	LOG user's response to console.

*/
// Initial Code

// Confirm user is ready to reflect on learnings

function confirmReady(){
	confirm("Are you ready to reflect on today's learning?")
}
confirmReady()
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
};
console.log(questions());
// Prompt user to provide 1 point on using material in the future
function future() {
	var futureOne = prompt("What is one way you can use today's material in the future?");
};
console.log(future());


// Refactored Code

var prompt = require('prompt');

var factOne = "What is one fact you learned from today's lesson?"
var factTwo = "What is another fact you learned from today's lesson?"
var factThree = "What is one last fact you learned from today's lesson?"


prompt.start();

prompt.get([factOne, factTwo, factThree], function (err, result) {
console.log('Command-line input received:');
console.log(' facts: ' + result.factOne);
console.log(' facts: ' + result.factTwo);
console.log(' facts: ' + result.factThree);
});




// Reflection
// 
// 
// 
// 
// 
// 
// 
// 