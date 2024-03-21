// Complete the solution so that it returns true
// if the first argument(string) passed in ends with the 2n d argument(also a string).

// Examples:

// 	solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending) {
	return str.endsWith(ending);
}

// This question asks you to write a JavaScript
// function called solution that takes in two arguments: str, which is a string, and ending, which is also a string.The
// function should
// return true
// if the str ends with the characters specified in the ending string, and false otherwise.

// For example:

// 	solution('abc', 'bc') should
// return true because the string 'abc'
// ends with 'bc'.
// solution('abc', 'd') should
// return false because the string 'abc'
// does not end with 'd'.
// The provided solution utilizes the endsWith() method available
// for strings in JavaScript, which checks
// if a string ends with the specified characters and returns a boolean value accordingly.
