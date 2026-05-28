// // Class

// class arith{

//     constructor (a){

//         this.a = a
//     }


//     add(a) {
        
//         try{
//                 return console.log(a)
//         }catch{

//         }


//     }

// }

// let Arithmatic = new arith();// Instance creation
// Arithmatic.add(10)

// How class can be created ?
// What is Constructor?
// How access the function from outside class?
// Inside the function you can create any logis loops, statements, any prograam



class calculator{
    constructor(a,b){
        this.a = a;
        this.b = b;

    }
    add(a,b) {
        return a+b
    }

    async div(a,b){
        return a/b;
    }


    sun(a,b) {
        return a-b;
    }
    mult(a,b) {
        return a*b;
    }
}

let Calc = new calculator()
console.log(Calc.add(10,50))
console.log(Calc.sun(50,40))
console.log(Calc.div(50,40))
