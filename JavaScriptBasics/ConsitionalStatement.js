// // Conditional Statements - if, else if, else, switch   
// var age = 20;

// // if statement
// if(age === 20) {

//     console.log("You are 20 years old.");

// }

// var age = 12;// if statement

// if(age > 18) {

//     console.log("You are an adult."); 
    
//     // else if statement
// }else if(age === 18) {

//     console.log("You are 18 years old.");

//     // else statement

// }else {

//     console.log("You are a minor.");
// }



// Nested if statement - I need to buy a alcohal in a US 

// age 18+ - I am an adult
// age 21+ - I can drink alcohol
// age 25+ - I can rent a car

// var age = 22;

// if(age >= 18) {

//     console.log("You are an adult.");

//     if(age >= 21) {

//         console.log("You can drink alcohol.");  

//         if(age >= 25) {
//             console.log("You can rent a car.");
//         } else {
//             console.log("You cannot rent a car yet.");
        
//         }

//     } else{
//         console.log("You cannot drink alcohol yet.");
//     }


// }else{
//     console.log("You are a minor.");
// }

// var time = 12; if time less than 12 , if reater than 12, - Excerisse

// Switch statement - switch, case, break, default
var day = "today";

switch(day) {

    case "Monday":
        console.log("It's Monday.");
        break;
    case "Tuesday":
        console.log("It's Tuesday.");
        break;
    case "Wednesday":
        console.log("It's Wednesday.");
        break;
    case "Thursday":
        console.log("It's Thursday.");
        break;
    case "Friday":
        console.log("It's Friday.");
        break;
    case "Saturday":
        console.log("It's Saturday.");
        break;
    case "Sunday":
        console.log("It's Sunday.");
        break;
    default:
        console.log("Invalid day.");
}