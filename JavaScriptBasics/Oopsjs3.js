// POJO - Plain Old JavaScript Object
// A simple JavaScript object that is not an instance of a class or constructor function.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    function1() {
        console.log(this.name);
    }

}    

const person1 = new Person("Alice", 30);
console.log(person1.name);
person1.function1();

// Getters and Setters - Used to access and modify the properties of an private object - Outside the class

class person{

    #name; // Private field

    constructor(name){
        this.#name = name;
    }
    // getter method
    get name(){
        return this.#name;
    }

    // setter method
    set name(value){
        this.#name = value;
    }

}

const person2 = new person("Bob");
console.log(person2.name) // Accessing the name using getter method
person2.name = "Alice"; // Setting the name using setter method
console.log(person2.name) // Accessing the name using getter method

//console.log(person2.#name) // Error - Cannot access private field #name outside of class person