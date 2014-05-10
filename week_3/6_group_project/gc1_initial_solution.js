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
