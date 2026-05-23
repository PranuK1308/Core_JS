// JavaScript - Objects
const person = {
    name: "Pranita",
    age: 30,
    city: "Pune"
};

person.name = "Pranita Patil";
person.age = 31;
person.city = "Mumbai"; 
console.log(person);

const person1 = {
    name: "Pranita",
    age: 30,
    city: "Pune"
};

delete person1.age; // Deleting the age property
console.log(person1); // Output: { name: 'Pranita', city: 'Pune' }

let number = 9898;
console.log(number);