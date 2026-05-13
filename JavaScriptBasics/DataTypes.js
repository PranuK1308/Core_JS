// Primitive data types
// Non-primitive data types

// Primitive data types in JavaScript include:
// 1. Number: Represents both integer and floating-point numbers. Example: 42, 3.14
var x = 10;
console.log(x); // Output: 10
console.log(typeof x); // Output: number

// 2. String: Represents a sequence of characters enclosed in single or double quotes. Example: 'Hello', "World"
var str = "Hello, World!";
console.log(str); // Output: Hello, World!
console.log(typeof str); // Output: string

// 3. Boolean: Represents a logical value, either true or false.
var isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true
console.log(typeof isJavaScriptFun); // Output: boolean

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
var undefinedVar;
console.log(undefinedVar); // Output: undefined
console.log(typeof undefinedVar); // Output: undefined

// 5. Null: Represents the intentional absence of any object value.
var nullVar = null;
console.log(nullVar); // Output: null
console.log(typeof nullVar); // Output: object

// 6. Symbol: Represents a unique identifier.
var sym1 = Symbol('sym');
var sym2 = Symbol('sym');
console.log(sym1 === sym2); // Output: false
// 7. BigInt: Represents integers with arbitrary precision.