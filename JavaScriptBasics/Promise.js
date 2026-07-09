// Promise in a JS is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// Define - Asynchronous - An asynchronous operation in a Promise is a task that takes some time to complete and does not block the execution of the remaining code. The Promise acts as a placeholder for the result of that operation.

// State of promise - Pending (Initial state: the operation not completed yet), fullfilled(The Operation completed successfully), Rejected (The Operation failed with an error)

// Promise Utility Methods:

// Promise.all() - Waits for all promises to resolve, rejects if any promises rejects
// Promise.allsetted() -  Wait all the promises to settle(Fullfilled or rejected)
// Promise.race() - Return the results of the first promises to settle 
// Promise.any() - Returns the first fullfilled promise; rejected only if the promises rejected

// promise.all()
const p1 = Promise.resolve("A")
const p2 = Promise.resolve("B")
const p3 = Promise.resolve("C")

const result = await Promise.all([p1, p2, p3])
console.log(result)

// Promise.allsetted() -  Wait all the promises to settle(Fullfilled or rejected)
const p11 = Promise.resolve("A")
const p22 = Promise.reject("Error")
const p33 = Promise.resolve("C")

const result1 = await Promise.allSettled([p11, p22, p33])
console.log(result1)

// Promise.race() - Return the results of the first promises to settle 

const p111 = new Promise(resolve => setTimeout(()=>resolve("A"), 3000));
const p222 = new Promise(resolve => setTimeout(()=>resolve("B"), 1000));

const result111 = await Promise.race([p111,p222])
console.log(result111)
// Promise.any() - Returns the first fullfilled promise; rejected only if the promises rejected
const p000 = Promise.reject("Error 1")
// const p999  = new Promise(resolve => setTimeout(() => resolve("Success"), 1000));
const p999 = Promise.reject("Error 3")
const p777 = Promise.reject("Error 2")

const result3333 = await Promise.any([p000,p999,p777]);
console.log(result3333)