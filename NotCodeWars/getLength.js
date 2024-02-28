// Question:
// Write a function named getLength that takes a string as a parameter and returns the length of the string.

function getLength(str) {
	const length = str.length;
	  return length;
}

console.log(getLength("Hello")); // Output should be 5
console.log(getLength("JavaScript")); // Output should be 10

// or to be more conscise 

function getLength(str) {
	return str.length;
}
