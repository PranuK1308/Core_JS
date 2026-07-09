/////type casting
 // string to number
      let str = "123";
    let num = Number(str);
    console.log(num); // Output: 123
// Parse string to integer
    let str2 = "456";
    let num2 = parseInt(str2);
    console.log(num2); // Output: 456

    // Parse string to float
    let str3 = "789.123";
    let num3 = parseFloat(str3);
    console.log(num3); // Output: 789.123

// number to string
    let num4 = 321;
    let str4 = String(num4);
    console.log(str4); // Output: "321"

// boolean to string
    let bool = true;
    let str5 = String(bool);
    console.log(str5); // Output: "true"
// string to boolean
    let str6 = "false";
    let bool2 = (str6 === "true");
    console.log(bool2); // Output: false
// Implicit type coercion
    let result = "The number is: " + 123;
    console.log(result); // Output: "The number is: 123"
    let sum = "5" + 10; // Implicitly converts 10 to a string
    console.log(sum); // Output: "510"
// Explicit type coercion
    let explicitSum = Number("5") + 10; // Explicitly converts "5" to a number
    console.log(explicitSum); // Output: 15

