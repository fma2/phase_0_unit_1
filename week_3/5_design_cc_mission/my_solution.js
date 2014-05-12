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
// // 
// // This challenge took me quite a bit of time to complete.  I began with considering a mission which involved JavaScript code that utilized what I had learned but also challenged me to learn something new; this was a surprisingly challenging balance.  I searched the web for ideas and lost myself for at least an hour.  Ultimately, I decided upon a practical mission--an online tool that allows me, as an educator, to collect quick feedback from students on their understanding of a lesson.  

// Unlike challenge 4, I committed to writing the full pseudocode for the mission before writing any code.  Unfortunately, when writing and testing the code, I found errors and changed the pseudocode after getting working code.  Notably, the errors were related to some incompatibilities: (1) based on samples I had found online, I had written prompt commands for script embedded in HTML, run on a browser; (2) I discovered node  runs prompt commands written in a specific way.

// To this end, I rewrote my initial code a few times to accommodate where it would work (whether through a browser or with node).  After much time, I settled on the code found in this file; I ran it through a browser--specifically, the console tab in DevTools and it worked as I had hoped.  

// When it came to refactoring, I decided that I had made my initial code as simple as I could and  that I should try writing the prompt command according to node, in order to understand any differences.  I found a great resource after which to model this code: https://github.com/flatiron/prompt.  

// Overall, I think I met this challenge’s learning competencies but should have managed my time more effectively.  It’s interesting that, with only basic understanding of JavaScript, I was already able to see its possibilities and struggled with coming up with a mission appropriate for my present skill-level--I wanted to make what I know is possible with JavaScript but I have not learned how to code yet.  

// As an aside, I would like to find a tutorial on node and its various commands.
// 
// 
// 
// 
// 
// 