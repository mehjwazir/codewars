// Complete the method / function so that it converts dash / underscore delimited words into camel casing.The first word within the output should be capitalized only
// if the original word was capitalized(known as Upper Camel Case, also often referred to as Pascal
// 	case).The next words should be always capitalized.

// Examples
// 	"the-stealth-warrior"
// gets converted to "theStealthWarrior"

// "The_Stealth_Warrior"
// gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior"
// gets converted to "TheStealthWarrior"

// Solutions
function toCamelCase(str) {

	const words = str.split(/[-_]/);


	const firstWord = words[0];

	const camelCaseWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1));


	const camelCaseStr = firstWord + camelCaseWords.join('');

	return camelCaseStr;
}


console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));


// cleaner solution 

function toCamelCase(str) {
	return str.replace(/[-_](.)/g, (match, char) => char.toUpperCase());
}


console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));