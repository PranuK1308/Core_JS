//ES6+ Version Feature
// 1. let and const
let name = "John";
const age = 30;
// 2. Arrow Functions
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("Alice");
// 3. Template Literals
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// 4. Destructuring Assignment
const person = { name: "Bob", age: 25 };
const { name: personName, age: personAge } = person;
console.log(personName);    
console.log(personAge);
// 5. Spread Operator   
const arr1 = [1, 2, 3]; 
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);
// 6. Classes
class Animal {
    constructor(name) {
        this.name = name;
    }   

    sound() {
        console.log(`${this.name} makes a sound.`);
    }
}

//7. Default parameter
const greet = (name, greeting = "Hello") => {
    console.log(`${greeting}, ${name}!`);
};
greet("Alice");
greet("Bob", "Hi");

// Asyn/Await


async function greet(){

    await page.goto("https://www.google.com/");

}


async function fetchData() {

    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

// 8. Modules
// In file math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// In file main.js
import { add, subtract } from './math.js';
console.log(add(5, 3));


// 9. Promises

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {


            const data = { name: "Alice", age: 30 };
            resolve(data);
        }
        , 2000);
    });
};
fetchData()

// 10. import and export
// In file math.js


