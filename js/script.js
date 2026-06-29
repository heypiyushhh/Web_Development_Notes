// var name = "Piyush Kumar";
// var age = 21;
// var condition = true;

// let name = "Piyush Kumar";
// let age = 21;
// let condition = true;


// const  age  = 21;



// console.log(name);
// console.log(age);
// console.log(condition);


// age  =22;

// console.log(age);

// const person = {
//     name: "Piyush Kumar",
//     age: 21,
//     condition: true
// };  




// JavaScript Hoisting
// 1
// 2
// 3
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This allows variables and functions to be used before they are declared in the code.

// Variable Hoisting

// In JavaScript, variable declarations using var are hoisted to the top of their scope and initialized with undefined. This means you can use a variable before it is declared, but its value will be undefined until the assignment is executed.

// console.log(foo); // undefined
// var foo = 'bar';
// console.log(foo); // "bar"
// Copy
// Variables declared with let and const are also hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError due to the temporal dead zone.

// console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
// let bar = 'baz';// console.log(person.age);   

// person.age = 22;

// console.log(person.age ,person.name , person.condition);

// console.log(name); // befor use of variable

// var name = "Piyush Kumar"; 


// after declaration of variable



// primitive data type 


// let name = "Piyush Kumar"; // string
// let age = 21; // number
// let isStudent = true;   // boolean


// // non-primitive data type

// const person = {   
//     name: "Piyush Kumar", // string
//     age: 21, // number
//     isStudent: true // boolean
// };

// const numbers = [1, 2, 3, 4, 5]; // array


// let name = "Piyush Kumar"; // string    
// let notDefined;               // Undefined
// let empty = null;    
// console.log(notDefined);    // Output: undefined
// console.log(empty);   


// typeof name;    // Output: string
// typeof notDefined;

// console.log( typeof empty); 
// console.log( typeof notDefined);
// console.log( typeof name);
// Output: object


// let number1 = 42; // number
// let number2 = 32; // number


// console.log(number1 + number2);   // Output: 74

// console.log(number1 - number2);   // Output: 10
// console.log(number1 * number2);   // Output: 1344
// console.log(number1 / number2);   // Output: 1.3125
// console.log(number1 % number2);   // Output: 10


// let x = 10; // number

// x  += 5;  // addition
// console.log(x); // Output: 15

// x -= 5;  // subtraction
// console.log(x); // Output: 5

// x *= 2;  // multiplication
// console.log(x); // Output: 20

// x /= 2;  // division
// console.log(x); // Output: 5


// ;


// let x = 10 // number
// console.log(x == 10); // Output: true 
// console.log(x === 10); // Output: false
// console.log(x === "10"); // Output: true


// console.log(x == 10); // Output: true
// console.log(x != 5); // Output: true
// console.log(x != 10); // Output: false

// console.log(x > 5); // Output: true
// console.log(x < 5); // Output: false
// console.log(x !== "10" ); // Output: true

// ==  value comparison
// === value and type comparison

// console.log(true && false); // false - AND
// console.log(true || false); // true  - OR
// console.log(!true);          // false - NOT


// let age = 21;

// if(age >= 18){
//     console.log("You are eligible to vote.");
// }else{
//     console.log("You are not eligible to vote.");
// }


// let canVote =  age >=18 ? "You are eligible to vote." : "You are not eligible to vote.";

// if true then "You are eligible to vote." will be assigned to canVote otherwise "You are not eligible to vote." will be assigned to canVote

// console.log(canVote);


// name  = "Piyush Kumar";



// let age  =  21 ;

// let snum =  "1233";


//  console.log(typeof age)
//   console.log(  typeof Number(snum))



//  console.log(  Boolean (age));


//    num = 0

// console.log(Boolean(0));    



// console.log(Boolean(1))
// console.log(Boolean(2))
// console.log(Boolean(4))


// console.log(Boolean(-1))

let s = ""

let s2  =  "hello"

// console.log(Boolean(s));

// console.log(Boolean (s2));

// console.log(Boolean(null));    // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN));    // false 


 


// console.log(Boolean ({}))
// console.log(Boolean ([]))

// console.log(true + 1) //  2 
// //    true as  1 true =1 

// console.log("3" + 4) // 7


//  let name  =  "piyush";

//    const myfun =  function(name) {

//     return `hello ${name}`
    
// }

// console.log(myfun(name));


// console.log( 0.1 + 0.2 == 0.3); 


// setTimeout(function() {
//   console.log("Executed after delay");
// }, 1000); 

// setTimeout( function(){
//     console.log( "hello");
    
// },5000

// 
//   function   myfun(){

//   }
 
// const  myfun  = ( a, b)=> {

//     return a+b;

// }

// console.log(myfun(12,8));

function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
 function mul( f){
   
return  function(){
    
}
 }
