// Arrary - Java Script Basics
// Array is a data structure that can hold more than one value at a time. It is a collection of values that are stored in a single variable. The values can be of any data type, including numbers, strings, objects, and even other arrays.
// Creating an array

// let fruits = ["Apple", "Banana", "Cherry"];

// console.log(fruits);

// // Output: ["Apple", "Banana", "Cherry"]

// let arrary = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];

// console.log(arrary);

// let emptyArray = [];
// console.log(emptyArray);




// let pranita = [1, 2, 3, 4, 5];
// console.log(pranita);

// let interger = [1, 2, 3, 4, 5];
// console.log(interger);

// let stringArray = ["Hello", "World", "JavaScript"];
// console.log(stringArray);

// let booleanArray = [true, false, true, false];
// console.log(booleanArray);


// let mixedArray = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
// console.log(mixedArray);

// var - example arrary

// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);

// var numbers = [30, 40, 50, 60, 70];
// console.log(numbers);


// // const - example arrary

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);

// const numbers1 = [30, 40, 50, 60, 70];
// console.log(numbers1);


// /// let arrary - oVERRITE VALUES

// let numbers = [1, 2, 3, 4, 5];

// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 'pranita';
// numbers[0] = true;

// console.log(numbers);




/// const arrary - Overwrite

// var numbers = [1, 2, 3, 4, 5];

// numbers[0] = 10;
// numbers[1] = 20;
// numbers[2] = 'pranita';
// numbers[0] = true;

// console.log(numbers);

// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// push in the arrary
// let fruits = ["Apple", "Banana", "Cherry"];


// fruits.push("Orange", "Mango");
// fruits.push("Grapes");

// console.log(fruits);

// // unshipt in the arrary
// fruits.unshift("Pineapple", "Strawberry");
// console.log(fruits);

// Removing Elements from an Array
let fruits = ["Apple", "Banana", "Cherry", "Orange", "Mango"];
console.log(fruits.length);

fruits.pop(); // Removes the last element
console.log(fruits);

fruits.shift(); // Removes the first element
console.log(fruits); 

for (let i = 0; i < fruits.length; i++) {
    
    console.log(fruits[i]);
}
