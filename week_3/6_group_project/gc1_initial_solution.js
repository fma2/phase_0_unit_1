/* Pseudocode Section: Do not alter code below this line.

Sum of Array Elements
Define a function "sum" that takes an argument "array"
  SET total to zero
  FOR each number in array
	  ADD the current element to total
  END
  RETURN total
END

Mean of Array Elements
Define a function "mean" that takes an argument "array"
  SET total to zero
  FOR each number in array
	  ADD the current element to total
  END
  RETURN total divided by length of array
END

Median of Array Elements
Define a function called "median" that takes an argument "array"
  IF the length of array is odd
		SET answer to the element in array that is the length of array minus one divided by two
	ELSE IF the length of array is even
		SET the answer to the average of the element in array that is the length of array divided by two minus the length of array divided by two minus one
	END
	RETURN answer
END

*/

// Sum of Array Elements
var sum = function(array) {
  var total = 0;
  for(i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Mean of Array Elements
var mean = function(array) {
    var total = 0;
    for(i=0; i< array.length; i++) {
        total += array[i];
    }
    return (total / array.length);
}

// Median of Array Elements
var median = function(array) {
    if (array.length % 2 !== 0) {
        var sortedArray = array.sort(function(a,b) {return b-a;});
        var answer = sortedArray[(sortedArray.length - 1) / 2];
    }
    else {
        var sortedArray = array.sort(function(a,b) {return b-a;});
        var answer = (sortedArray[sortedArray.length / 2] + sortedArray[sortedArray.length / 2 - 1]) / 2;
    }
    return answer;
}


// Reflection

// The experience was effective on multiple levels.  For one, it was good to experience one aspect of a developer’s career.  I also appreciated that the challenge required that we make the user story, pseudocode, and code decipherable for others.  I should practice being as meticulous with each aspect of code in my own projects.  Further, because each person’s work impacted the next person and eventually the group as a whole, there was an accountability aspect that further encouraged attention to detail, at least for me.   

// My group was successful in passing the tests.  While I think it helps that there were six of us (more eyes and input on each part of the process), I also think it helped that we maintained communication on the work throughout the week.  Also, it was interesting to see that Person 1 and Person 5 & 6 came up with similar user stories regarding a teacher--perhaps it helps to have a common background, at least for the purposes of this challenge’s process.

// Between user stories, pseudocoding, writing code, and refactoring, I often will spend more time on one aspect in my own coding assignments.  The other aspects will be attended to but not as meticulously as it seems each of us did with the group assignment.  This assignment was another reminder that each part is important.  However, it also reminded me that in order to do each well, one likely needs to spend more time and/or have multiple developers.
