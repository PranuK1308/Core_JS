// Primitive data types - iTS iMUTABLE
// Non-primitive data types - iTS mUTABLE

// Primitive data types in JavaScript include:
// // 1. Number: Represents both integer and floating-point numbers. Example: 42, 3.14
// var x = 10;
// console.log(x); // Output: 10
// console.log(typeof x); // Output: number

// // 2. String: Represents a sequence of characters enclosed in single or double quotes. Example: 'Hello', "World"
var str = "Hello, World!";
// console.log(str); // Output: Hello, World!
// console.log(typeof str); // Output: string

// // 3. Boolean: Represents a logical value, either true or false.
var isJavaScriptFun = true;
// console.log(isJavaScriptFun); // Output: true
// console.log(typeof isJavaScriptFun); // Output: boolean

// // 4. Undefined: Represents a variable that has been declared but not assigned a value.
// var undefinedVar;
// console.log(undefinedVar); // Output: undefined
// console.log(typeof undefinedVar); // Output: undefined

// // 5. Null: Represents the intentional absence of any object value.
var nullVar = null;
// console.log(nullVar); // Output: null
// console.log(typeof nullVar); // Output: object

// // 6. Symbol: Represents a unique identifier.
// var sym1 = Symbol('sym');
// var sym2 = Symbol('sym');
// console.log(sym1 === sym2); // Output: false

// 7. BigInt: Represents integers with arbitrary precision.
// var bigIntVar = BigInt(126);

// console.log(bigIntVar);
// console.log(typeof bigIntVar); // Output: bigint

// // Non-primitive data types in JavaScript include:

// // 1. Object: Represents a collection of properties and methods. Example: { name: 'Alice', age: 30 }
// var person = {
//     name: 'Alice',
//     age: 30,
//     email: 'alice@gmail.com'
// };
// console.log(person);

// 2. Array: Represents an ordered list of values. Example: [1, 2, 3, 'Hello']
// var nu = [1, 2, 3, 'Hello'];
// var numbersarrary = [1, 2, 3, 4, 5];
// var stringarrary = ['Hello', 'World', 'JavaScript'];
// var hybridarrary = [1, 'Hello', true, null, undefined, { name: 'Alice' }, [1, 2, 3]];
// var charectorarray = ['a', 'b', 'c', 'd', 'e'];

// console.log(typeof charectorarray);
// console.log(typeof numbers);   
// console.log(typeof stringarrary);
// console.log(typeof hybridarrary);
// console.log(numbersarrary);
// console.log(stringarrary);
// console.log(hybridarrary);

// 3. Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log('Hello!'); }
function greet() {

    console.log('Hello!');
}

greet();


//4. Date: Represents a specific point in time. Example: new Date()
var currentDate = new Date();
console.log(currentDate);
var specificDate = new Date('2024-01-01');
console.log(specificDate);

var speci = '2024-01-01';
console.log(speci); 

// Key Charecoteristics of Data Types in JavaScript:
// 1. Dynamic Typing: JavaScript is a dynamically typed language, which means that you can change the type of a variable at runtime. For example, you can assign a number to a variable and later assign a string to the same variable without any issues.
var dynamicVar = 42;
console.log(dynamicVar); // Output: 42
console.log(typeof dynamicVar); // Output: number  


// Reassigning a string to the same variable
dynamicVar = "Now I'm a string!";
console.log(dynamicVar);    // Output: Now I'm a string!
console.log(typeof dynamicVar); // Output: string 

// 2. Type Coercion: JavaScript performs automatic type conversion when you perform operations on different data types. For example, if you add a number and a string, JavaScript will convert the number to a string and concatenate them.
var num = 10;
var strNum = "20";
var result = num + strNum;
console.log(result);    // Output: 1020
console.log(typeof result); // Output: string  

// 
