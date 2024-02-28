// Question:
// Write a function named sayHello that takes a name as a parameter and returns a greeting message.If the name is provided, the message should be "Hello, [name]!".If no name is provided, the message should be "Hello, Guest!".

function sayHello(name) {
	if (name) {
		return "Hello," + name + "!";
	} else {
		return "Hello, Guest!"
	}
}

console.log(sayHello("Alice")); // Output should be "Hello, Alice!"
console.log(sayHello()); // Output should be "Hello, Guest!"
