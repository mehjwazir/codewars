// Question:
// 	Write afunction named isPalindrome that takes a string as a parameter and returns true
// if the string is a palindrome, and false otherwise.A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.

// My answer needed help looked a lil on geeksforgeeks


function isPalindrome(str) {
	let rev = str.split("").reverse().join("");

	if (rev == str) {
		return true
	}
	return false

}

console.log(isPalindrome("radar")); // Output should be true
console.log(isPalindrome("Hello, World!")); // Output should be false

// simple answer 

function isPalindrome(str) {
	return str === str.split("").reverse().join("");
}


// sanititzed answer 

function isPalindrome(str) {
	const sanitizedStr = str.toLowerCase().replace(/[\s-_]/g, "");
	return sanitizedStr === sanitizedStr.split("").reverse().join("");
}

// the python version 

// def is_palindrome(s):
// 	return s == s[::-1]

// # Test cases
// print(is_palindrome("radar"))# Output: True
// print(is_palindrome("Hello, World!"))# Output: False
// print(is_palindrome("A man, a plan, a canal!"))# Output: False(due to non - alphanumeric characters)

// def is_palindrome(s):
// 	sanitized_str = ''.join(char.lower() for char in s
// 		if char.isalnum())
// return sanitized_str == sanitized_str[::-1]

// # Test cases
// print(is_palindrome("radar"))# Output: True
// print(is_palindrome("Hello, World!"))# Output: False
// print(is_palindrome("A man, a plan, a canal!"))# Output: True


