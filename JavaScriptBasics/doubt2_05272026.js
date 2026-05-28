// // Foreach loops
// // How to use arrow function - Convert arrary object to Individual Object Using foreach loop

// var vegitables = ["Potato", "Tomotw", "Brinjal", "beans"];

// // vegitables.forEach((vegitable) => {
// //     console.log(vegitable)
// // }

// // );


// // var vegitables = ["pumpkin", "Onion", "Chilli", "carrot"];

// var numbers = [50, 60, 80, 90];

// // numbers.forEach((Number=>{

// //     if(Number>60){
// //         console.log("Hey___"+""+"Pranita__"+"   "+"InJavaScriptOnlineclass________:  "+ Number)

// //     }else{
// //         console.log("This all are less than 60: "+Number)
// //     }

// // }));

// // for In Loop

// // for(let index in vegitables){

// //     //console.log("Position: " + index)
// //     console.log(vegitables[index]+  "  Position :  " + index)

// // }

// numbers.forEach(Number => {

//     console.log(Number+1)

// });


// for(let i=0;i<vegitables.length;i++){

//     console.log(i)

//     vegitables.forEach((Vegitable)=>{


//         console.log(Vegitable+1)

//         if(Vegitable!=="potato"){
//             console.log("Veggiess")

//         }

//     })

// }


// Join Array 


const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join("|"))




var sent =  "I sent the message";
var sentarray = sent.split(" ")
console.log(sentarray.join("------>"))




var sent1 = "I sent the message2";
var sentarray1 = sent1.split(" ")
console.log(sentarray1)




console.log(sent.concat(sent1))



