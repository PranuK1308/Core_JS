// types of functions in JavaScript
// 1. Function Declaration - A function that is defined using the function keyword. It can be called before it is defined because of hoisting.

function add(a, b){
    return a + b;
}
console.log(add(2, 3)); // Output: 5
// 2. Function Expression - A function that is defined using the function keyword and assigned to a variable. It cannot be called before it is defined because of hoisting.


const add1 = function(a, b){
    return a + b;
}   

console.log(add1(2, 3)); // Output: 5
// 3. Arrow Function - A function that is defined using the arrow syntax. It is a shorter syntax for writing functions. It does not have its own this keyword and it cannot be used as a constructor.

const add2 = (a, b) => {
    return a + b;
}

console.log(add2(2, 3)); // Output: 5

// 4. async Function - A function that is defined using the async keyword. It is used to handle asynchronous operations. It returns a promise.
async function fetchData(){

    await new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);

    });

    return "Data fetched";
}

// Example usage:
fetchData().then(result => console.log(result));
