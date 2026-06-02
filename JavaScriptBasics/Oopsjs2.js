// // PolyMorphism - Ploymorphism means - THE Same Method Behaves differently in different classes 
// // As Part of polymorphism We have Method Overloading and Method Overriddig

// class Animal{
//     sound(){
//         console.log("All Animal Makes Sound")
//     }
// }

// class dog extends Animal{

//     sound(){
//         super.sound();
//         console.log("Dog's Bark")

//     }

// }

// class cat extends Animal {
//     sound(){
//         super.sound();
//         console.log("Cats Meovs")
//        }

// }

// // const Dog = new dog();
// // Dog.sound();
// const Cat = new cat();
// Cat.sound();

// const ani = new Animal();
// ani.sound();

// How method Overloading and method Overridding can be achieved using javascript?

// Javascript Not support, Actual method Overloading - like JAVA supports

// class calc {

//      add(a,b){

//         console.log("Hey i am method from calc1")

//         return a+b;

//     }

//      add(a,b,c){
//          console.log("Hey i am method from calc2")
//          return a+b+c;

//     }
// }

// const Cal = new calc();
// console.log(Cal.add(2,3)); // Output NaN - Beacus I am passing only the value for two variables
// console.log(Cal.add(2,3,4)); // Output 9 - Beacus I am passing Value for 3 variables
// // For the above method add(a,b), Overriddes the Method add(a,b,c)
// // How can you achieve the Method Overloading in the Javascript? - Use default parameters or the arguments as object

// // Using Rest Parameters

// class calculator{

//     add(...num){

//         return num.reduce((sum, num)=> sum+num)

//     }


// }

// const Calc = new calculator();
// console.log(Calc.add(10, 20))
// console.log(Calc.add(10, 30, 50, 30, 6,7,8,9,9,9,9,9,0,0,0,9,8,8,8))



// aB