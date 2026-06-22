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


let name = "Piyush Kumar"; // string    
let notDefined;               // Undefined
let empty = null;    
// console.log(notDefined);    // Output: undefined
// console.log(empty);   


// typeof name;    // Output: string
// typeof notDefined;

console.log( typeof empty); 
console.log( typeof notDefined);
console.log( typeof name);
// Output: object