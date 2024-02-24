// Complete the square sum
// function so that it squares each number passed into it and then sums the results together.

// For example,
// for [1, 2, 2] it shouldreturn 9 because 1² + 2² + 2² = 9

// so basically 1 squared is 1 and 2 squared is 4 if you add that up its 9 

// solution 

function squareSum(numbers) {
	return numbers.reduce((sum, num) => sum + num ** 2, 0);
}


const result = squareSum([1, 2, 2]);
console.log(result);

// BREAKDOWN 

// In more detail:

// 1. Function Declaration:

// function squareSum(numbers) {

// 	- squareSum is a function that takes an array of numbers as an argument.

// 	2. Reduce Method:
	
// 	return numbers.reduce((sum, num) => sum + num ** 2, 0);


// 	- The reduce method is used to iterate through each element of the numbers array.
// 	- (sum, num) => sum + num ** 2 is an arrow
// 	- function used as the callback for reduce.
// 	- sum is the accumulator, initialized with 0.
// 	- num is the current element of the array.
// 	- num ** 2 squares the current number.
// 	- sum + num ** 2 adds the squared number to the running sum.
// 	- The final result is the sum of the squares of all numbers in the array.

// 	3. Array Input:

// 	const result = squareSum([1, 2, 2]);

// 	Calls the squareSum function with the array[1, 2, 2].

// 	4. Console Output:

// 	console.log(result);

// 	Outputs the result of the squareSum function to the console.
// 	In summary, the squareSum
// 	function uses the reduce method to sum the squares of the numbers in the input array, and the arrow
// 	function provides a concise and readable way to express the logic.The final result, when called with the array[1, 2, 2], would be 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 1 + 4 + 4 = 9.


	// function squareSum(numbers) {
		// *The 'reduce' method is used to iterate through the array and accumulate a single value.
		//* 'sum' is the accumulator that keeps track of the running sum of squared numbers.
		//* 'num' is the current element being processed in the array.
		// return numbers.reduce((sum, num) => sum + num ** 2, 0);
		// *The '0' at the end is the initial value for the 'sum' accumulator.
		// *The arrow function (sum, num) => sum + num ** 2 is concise syntax for a function.
		//* It squares the current number and adds it to the running sum.
	// }

	// const result = squareSum([1, 2, 2]);
	// *Calls the squareSum function with the array [1, 2, 2].
	// console.log(result);
	//* Outputs the result of the squareSum function to the console.
