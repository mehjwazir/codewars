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