// OOPs in Java Script

// 1. Object, class, Constructor, Encapsulation, Inheritance, Polymophism, Abstraction, Static Method, Getter and Setter, Prototypes

// 1. Object: A Objects stores data and behaviour together

const Person = {

    name: "Pranitha",
    age: "25",
    greet(){
        console.log("Hello")
    }
}

console.log(Person.name)
Person.greet();
Person.greet();

// 2. Class - A class is a blueprint to create a objects

class car{

    constructor(brand, model){

        this.brand = brand;
        this.model = model;

    }

    dsdfdsfds(){

        console.log(this.brand + " "+ this.model)
    }

    spesdfdsfdsfed(){
        console.log(this.model)
    }

}

const car1 = new car("BMW", "XYZ");

car1.dsdfdsfds();
// car1.speed();

// Constructor

class student {
    constructor(name, mark){
        this.name = name
        this.mark = mark
    
    }
}

const s1 = new student("Raj", 90);
console.log(s1.name)

// Encapsulation - Wrapping the data and code in single Unit - Wrappig data and methods together and restrcting direct access

class Bankaccount{

    #balance =0;

    deposit(amount){
        this.#balance += amount

    }
    getBalance(){
        return this.#balance
    }
}

const acc = new Bankaccount();

acc.deposit(500);

console.log(acc.getBalance())

// Inheritance - One class can inherit proprties and methods from other class

class Animal{
    sound(){
        console.log("Animal Makes sound")
    }

}

class Dog extends Animal{

    bark(){
        console.log("Dogs Barks")
    }

}

const d = new Dog();
d.bark();
d.sound();














