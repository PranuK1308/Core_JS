// Without static keyword, we can create multiple objects of the class and each object will have its own copy of the properties and methods. But with static keyword, we can create only one copy of the properties and methods and it will be shared among all the objects of the class.

class Person {
    greet(){
        console.log("Hello, I am a person")
    }
}

const p = new Person();
p.greet(); // Output: Hello, I am a person

// With static keyword
class Person1 {
    static greet(){
        console.log("Hello, I am a person")
    }   

}

Person1.greet(); // Output: Hello, I am a person
// We cannot create an object of the class and call the static method using the object. We have to call the static method using the class name.

// Static properties and methods are used to create utility functions that can be called without creating an object of the class. They are also used to create constants that can be accessed without creating an object of the class.

// Prototype - It is a mechanism by which objects can inherit properties and methods from other objects. It is a way to create a new object that is based on an existing object. The new object is called the prototype of the existing object. The existing object is called the constructor of the new object. The new object can access the properties and methods of the existing object through the prototype 

// Without using class keyword, we can create a prototype using function constructor

function person(name){
    this.name = name;

this.greet = function(){
    console.log("Hello, I am a person")
}

}

const p1 = new person("Pranitha");
p1.greet(); // Output: Hello, I am a person 

// with using prototype keyword, we can create a prototype using function constructor

function person1(name){

    this.name = name;

}

person1.prototype.greet = function(){

    console.log("Hello, I am a person")
}

const p2 = new person1("Pranitha");
p2.greet(); // Output: Hello, I am a person

// Generics - It is a mechanism by which we can create a function or a class that can work with any data type. It is a way to create a function or a class that can work with any data type without having to specify the data type. In JavaScript, we can achieve generics using the concept of polymorphism. Polymorphism is the ability of an object to take on many forms. It is the ability of a function or a class to work with any data type. We can achieve polymorphism in JavaScript using the concept of duck typing. Duck typing is a way to determine the type of an object based on its properties and methods rather than its actual type. If an object has the properties and methods that we expect, then we can treat it as if it were of the expected type.

function add(a, b){
    return a + b;
}   
console.log(add(2, 3)); // Output: 5
console.log(add("Hello, ", "World!")); // Output: Hello, World!

// Promises - It is a mechanism by which we can handle asynchronous operations in JavaScript. It is a way to handle asynchronous operations in a more elegant and efficient way. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states: pending, fulfilled, or rejected. A promise is created using the Promise constructor, which takes a function as an argument. The function takes two arguments: resolve and reject. The resolve function is called when the asynchronous operation is successful, and the reject function is called when the asynchronous operation fails.



