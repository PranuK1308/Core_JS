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
// let fruits = ["Apple", "Banana", "Cherry", "Orange", "Mango"];
// console.log(fruits.length);

// fruits.pop(); // Removes the last element
// console.log(fruits);

// fruits.shift(); // Removes the first element
// console.log(fruits); 

// for (let i = 0; i < fruits.length; i++) {
    
//     console.log(fruits[i]);
// }

// Methods in Arrays

// include() method - it is used to check if an array includes a certain value among its entries, returning true or false as appropriate.

let numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(3)); // true
// console.log(numbers.includes(6)); // false

// // indexOf() method - it is used to return the first index at which a given element can be found in the array, or -1 if it is not present.

// console.log('What is the index of 3? ' + numbers.indexOf(3));

// // map() method - it is used to create a new array populated with the results of calling a provided function on every element in the calling array.



// let squaredNumbers = numbers.map(function(num) {

//     return num * num;
// });

// console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// const names = ["Alice", "Bob", "Charlie"];

// const nameLengths = names.map(function(name) {

//     return name.length;
// });

// console.log(nameLengths); // [5, 3, 7]

// filter() method - it is used to create a new array with all elements that pass the test implemented by the provided function.

// const price = [10, 20, 30, 40, 50];

// let expensiveItems = price.filter(function(item) {

//     return item > 1;
// });

// console.log(expensiveItems); // [30, 40, 50]

// find() method - it is used to return the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

// const numbers1 = [1, 2, 3, 4, 5];

// let foundNumber = numbers1.find(function(num) {

//     return num > 2;
// });

// console.log(foundNumber); // 4

// sort() method - it is used to sort the elements of an array in place and returns the sorted array.

// const fruits = ["Banana", "Apple", "Cherry", "Mango"];
// fruits.sort();
// console.log(fruits); 
// fruits.reverse();
// console.log(fruits);


// const numbers2 = [40, 10, 30, 20, 50];
// numbers2.sort();
// console.log(numbers2);
// numbers2.reverse();
// console.log(numbers2);

// const object = ["Banana", "Apple", "Cherry", "Mango", 48, 34, 90, 89, 1.2, true, false, 876876876876876, null, undefined, { name: "John" }, [1, 2, 3], undefined];
// object.sort();
// console.log(object);


// Spread Operator in Arrays

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];


// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray); // [1, 2, 3, 4, 5, 6]


