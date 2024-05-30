// Write a function named getMax that takes two parameters(num1 and num2) and returns the greater of the two numbers.

// Option 1 

// Pros: Explicitly shows the logic of comparing and returning the larger number.
// Cons: Slightly longer and may be considered less concise.

function getMax(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
}
}


console.log(getMax(7, 3)); // Output should be 7
console.log(getMax(12, 9)); // Output should be 12

// Option 2
// Pros: Concise and directly conveys the intent of finding the maximum value.
// Cons: Some developers may find it less explicit in terms of the comparison.

function getMax(num1, num2) {
	return Math.max(num1, num2);
}


function findMax(arr) {
	return Math.max(...arr);
}

// the spread operator is necessary for this to work because I originally thought it was just arr but it gave an error. 
// Math.max(...arr); // This spreads the elements of arr as arguments to Math.max()