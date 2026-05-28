// Exception Handling in Javascript

// Basic Key Words of Exception Handling - try (Code that may produce error), catch(Catch the error handle the error), finally(Executes always), throw(Used to create the custom errors)

// try{
//     let result = 10/0;
//     console.log(result)
// }catch(error){
//     console.log("The error Occured")
// }finally{
//     console.log("Execution Complete")
// }

// console.log("Hey this is a first line of code");
// console.log("Hey this is a 2 line of code");


// try{
    
//     let user =null;
//     console.log(user.name);

// }catch(error){

//     console.log("Canot read the property from null")

// }finally{
//     console.log("Program executed")
// }


// console.log("Hey this is a 4 line of code");
// console.log("Hey this is a 5 line of code");


// try{
    
//     let user =null;
//     console.log(user.name);

// }catch(error){

//     console.log("Canot read the property from null")

// }finally{
//     console.log("Program executed")
// }


function checkage(age){
    if(age<18){
        // throw "Age Must be above 18";
        console.log("This guys dont excedds the 18")
    }

}

try{
    checkage(15)
}catch(error){
    console.log(error)
}finally{
    console.log("finally program can be executed")
}

