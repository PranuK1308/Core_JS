//  Use of dynamic data types in JavaScript
 
// const tournmentname = "NBA Finals"; // String data type
// const year = 2021; // Number data type
// const isOngoing = false; // Boolean data type

// const teamname = "Warriors"; // String data type
// const teammembers = 5; // Number data type
// const isChampion = true; // Boolean data type


// var playername = "Stephen Curry"; // String data type
// var playerage = 33; // Number data type
// var runrate = 30.1; // Number data type
// var runrate = 40.1; // Reassigning runrate to a new value

// console.log("Tournment Name: " + tournmentname);
// console.log("Year: " + year);
// console.log("Is Ongoing: " + isOngoing);
// console.log("Team Name: " + teamname);
// console.log("Team Members: " + teammembers);
// console.log("Is Champion: " + isChampion);
// console.log("Player Name: " + playername);
// / console.log("Player Age: " + playerage);
// console.log("Run Rate: " + runrate);

// // type casting in JavaScript

// const strNumber = "100"; // String data type
// const numNumber = Number(strNumber); // Converting string to number
// const strBoolean = "true"; // String data type
// const boolBoolean = Boolean(strBoolean); // Converting string to boolean

// console.log("String to Number: " + numNumber);
// console.log("String to Boolean: " + boolBoolean);

// "100" == 100;
// if("100" == 100) {
//     console.log("The values are equal (loose equality)");
// }
// if("100" === 100) {
//     console.log("The values are equal (strict equality)");
// }

// use of var and let in a conditional operator 

// var in conditional Operator

// var mark = 45"

// var results;

// if(mark < 35){
//     console.log("Student fail")
// }else if(mark > 35){
//     console.log("Student Pass")

// }else if(mark == "35"){
//     console.log("Mark relatively equal")

// }else if (mark === 35){

//     console.log("Mark Abolutely Equal")
// }


// function Results(){

//     if(mark<35){

//         console.log("Studen fail")

//     }
// }

// Results()
// class Result{
 // pass(mark){

// if(mark>=40){
 // return "pass";
 // }
 // else{
 // return "fail";
 // }

// }

// }

// var Result1 = new Result(); // Instant creation of class
 // console.log(Result1.pass(50));
 // console.log(Result1.pass(30));

// Use of big int data type in real time example
 // var bigInt1 = 476278367843657867867867867868768767887567576578584645645646464564646456456456; // Using 'n' to denote a BigInt

// console.log(typeof bigInt1)

// // var bigInt2 = 9876543210987654321098765432109876543210n;

// // var sum = bigInt1 + bigInt2;
 // // console.log("Sum of big integers: " + sum);

// // var product = bigInt1 * bigInt2;
 // // console.log("Product of big integers: " + product);

// // var difference = bigInt1 - bigInt2;
 // // console.log("Difference of big integers: " + difference);

// // var quotient = bigInt1 / bigInt2;
 // // console.log("Quotient of big integers: " + quotient);

// // How to use Operators in Arrary

// // Assignment Operator (=)

// let fruit = ["Apple", "Mango", "Orange"];

// // Index Operator
 // console.log(fruit[0])

// // Additional Operator

// var a = [1,2,3]
 // var b = [1,2,3]

// console.log(a+" "+b)

// // Spread Operator
 // var c =[...a, ...b]

// console.log(c)

// // Rest Operator

// let [first, ...remaining] = [10, 20, 30, 40, 50]

// console.log(first)
 // console.log(remaining)

// // Comparison Operator

// var a = [1,2]
 // var b = [1,2]
 // console.log(a==b)
 // console.log(a===b)

// // tyoe of Operator
 // //instance Operator

// //in Operator - Checks index Existance
 // let arr =["A", "b", "c"]
 // console.log(5 in arr)

// Ternary Operators

let arr1 = []

let result = arr1.length>0 ? "Not empty" : "Empty"
 console.log(result)
