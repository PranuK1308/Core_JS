// Whats is displayinfo keyword and how to use it 
console.log("Hello World")
// const alerts = alert("Hey I am alert display method!!!")
// document.write("I am writing")

/// Encapsulation - Wrapping the data and code in a single unit
//1. Public Data
// class student{

//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }

//     display(){
//         console.log(this.name,this.age)
//     }
// }

// const stu = new student("Anbu", 20)
// let displ = stu.age();
// console.log(displ);// if a function doesn't explicitly return a value, it automatically returns undefined.

//=================================================

// class student1{

//     constructor(name1, age1){
//         this.name=name1;
//         this.age=age1;
//     }

//     display1(){
//         console.log(this.name,this.age)
//     }
// }

// const stu1 = new student1("Anbu", 20)
// console.log(stu1.age);
// console.log(stu1.name);

// ==============================================================Private Fields =========

class Bankaccount{


     #balance;

     constructor(balance){
        this.#balance=balance;
     }

     deposi(amount){
        // this.#balance = this.#balance+amount;
        this.#balance += amount;
     }

     getbalance(){
        return this.#balance
     }
}
const account = new Bankaccount(1000);
account.deposi(500);
console.log(account.getbalance())

// Geter and Setter 

class employee{

    #salary;

    constructor(salary){
        this.#salary = salary;
    }

    get salary(){
        return this.#salary;
    }

    set salary(value){
        if(value>0){
            this.#salary=value

        }
    }
}

const emp = new employee(30000);
console.log(emp.salary);







