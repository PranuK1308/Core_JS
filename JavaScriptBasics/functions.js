// Function Declaration

function add(a, b) {

    if(a === 0){
        console.log('a is zero');
    } else if(b=0){
        console.log('b is zero');
    }


    return a + b;
}


add(5, 10);
var sum = add(5, 10);
console.log(sum); // Output: 15


var  sum = add(20, 30);
console.log(sum); // Output: 50


function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet('Alice'); // Output: Hello, Alice!


function wish(){
    console.log('Best wishes!');
}

// Function Types in JavaScript:
// 1. Function Declaration: A function that is defined using the function keyword and can be called before its declaration due to hoisting. Example: function greet() { console.log('Hello!'); }
// 2. Function Expression: A function that is defined as an expression and can be assigned to a variable. Example: var greet = function() { console.log('Hello!'); };
// 3. Arrow Function: A function that is defined using the arrow syntax and has a shorter syntax. Example: var greet = () => { console.log('Hello!'); };    
// 4. Anonymous Function: A function that does not have a name and is often used as a callback function. Example: setTimeout(function() { console.log('Hello!'); }, 1000);  
// 5. Immediately Invoked Function Expression (IIFE): A function that is defined and immediately invoked. Example: (function() { console.log('Hello!'); })();  

// Arrow Function Example:
// var greet = (name) => {
//     console.log('Hello, ' + name + '!');
// }

// greet('Bob'); // Output: Hello, Bob!



// var divition = (a, b) => {

//     return a / b;
// }

// divition(10, 2);

// console.log("Arrow Functions Out put - Divition:  "+divition(10, 2)); // Output: 5
// () => {
// }


var time = (t) => {

    if(t>12){
        console.log('Good Afternoon');

    } if(t>18){
        console.log('Good Evening');
    } else{
        console.log('Good Morning');
    }
    
}

time(24);
//================================================================

var count =(c) => {  
    
    for(var i=1; i<=c; i++){

        console.log(i);

        if(i==5){
            console.log('Halfway there!');

            break;
           
        } 
        
    }

}
count(10);

// =================================================================


var fruit = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

console.log(fruit.length); // Output: 5

var printFruit = (fruit) => {


    console.log('Fruits List:');

    for(var i=0; i<fruit.length; i++){

        console.log(fruit[i]);
    }

};

printFruit(fruit);


