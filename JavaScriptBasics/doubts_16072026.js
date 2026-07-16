// find - To find even Numbers from array provided

// const numbers = [2,89, 20, 56, 34, 90, 70, 40,2];
// let Results = numbers.find(num => num %2 ===0)
// console.log("This is first method: "+Results)

// for(let num of numbers){
//     // console.log(num)
//     if(num%2===0){
//         console.log("This is one of  the event number which is availale in this array: "+num)
//     }else{
//         console.log("This array element not an even: "+num)
//     }
// }

// Some(); - Checks whether at east one element satisfies the conditions

// const numbers1 = [3, 7, 9, 17, 13, 2];

// let resultsome = numbers1.some(num => num % 2!==0)
// console.log(resultsome)

// every() - Checks whether all elemets full fill this condition

// const numbers1 = [3, 7, 9, 17, 13, 2];

// let resultsome = numbers1.every(num => num % 2!==0)
// console.log(resultsome)

// Splice()-  Add, Remove, Replaces element in an array

let numbers2 = [3, 7, 9, 17, 13, 2];

let result = numbers2.splice(1,4, "apple");
console.log(result)
console.log(numbers2)

