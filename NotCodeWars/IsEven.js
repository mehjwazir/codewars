

// Write a function named isEven that takes a number as a parameter and returns true
// if the number is even and false
// if it 's odd.


function isEven(num) {
	if (num % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

console.log(isEven(4)); // Output should be true
console.log(isEven(7)); // Output should be false