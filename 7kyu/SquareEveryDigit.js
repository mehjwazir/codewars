// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example,
// if we run 9119 through the
// function, 811181 will come out, because 92 is 81 and 12 is 1.(81 - 1 - 1 - 81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Clear readable solution 

function squareDigits(num) {
	// Convert the number to a string to iterate over each digit
	const numStr = num.toString();

	// Map over each digit, square it, and join the results
	const squaredDigitsStr = numStr
		.split('')
		.map(digit => Math.pow(parseInt(digit), 2))
		.join('');

	// Convert the concatenated string back to an integer
	const result = parseInt(squaredDigitsStr);

	return result;
}


console.log(squareDigits(9119)); // Outputs: 811181
console.log(squareDigits(765)); // Outputs: 493625

// another way 

// function squareDigits(num) {
// 	return parseInt(String(num).split('').map(digit => Math.pow(+digit, 2)).join(''));
// }


// console.log(squareDigits(9119));
// console.log(squareDigits(765));