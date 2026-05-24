// Strings - a string is a sequence of characters. In JavaScript, strings are used to represent text. They can be created using single quotes (' '), double quotes (" "), or backticks (` `) for template literals.

// Creating strings
// let singleQuoteString = 'Hello, World!';
// let doubleQuoteString = "Hello, World!";
// let templateLiteralString = `Hello, World!`;

// // length of a string
// console.log(singleQuoteString.length); // Output: 13

var name = "                            Hey I Am Learning Javascrit For The Reason Of Playwright Autopmation Testing";
console.log(name.length);
// console.log(name.toUpperCase()); // Convert to uppercase
// console.log(name.toLowerCase()); // Convert to lowercase
// console.log(name.trim("  Hey I Am Learning Javascrit For The Reason Of Playwright Autopmation Testing                        ")); // Remove whitespace from both ends
// console.log(name.includes("Learnig")); // Check if the string includes a substring
// console.log(name.indexOf("Playwright")); // Get the index of the first occurrence of a substring -- Doubt
//console.log(name.replace("Of", "TypeScript")); // Replace a substring with another substring

var sentencearrary = name.split(" ");
// console.log(sentencearrary); // Split the string into an array of substrings based on a delimiter
// console.log(sentencearrary[0]); // Accessing the first element of the array
// console.log(sentencearrary[7]); // Accessing the sixth element of the array
// console.log(sentencearrary.indexOf("Playwright")); // Accessing the index of a specific element in the array

console.log(sentencearrary.length); // Get the length of the array
// console.log(sentencearrary.join(" ")); // Join the elements of the array into a string with a specified separator

// Slice
let firstthreeWords = sentencearrary.slice(0,3); // Extract the first three words from the array
console.log(firstthreeWords); // Output: ["Hey", "I", "Am"]
let lastthreeWords = sentencearrary.slice(-3); // Extract the last three words from the array
console.log(lastthreeWords); // Output: ["Testing", "", ""]

let joinfirstandlast = firstthreeWords.concat(lastthreeWords); // Concatenate the first three words and the last three words into a new array
console.log(joinfirstandlast); // Output: ["Hey", "I", "Am", "Testing", "", ""]

// JOIN METHOD
let joinedString = joinfirstandlast.join(" ");
console.log(joinedString); // Output: "Hey I Am Testing   "