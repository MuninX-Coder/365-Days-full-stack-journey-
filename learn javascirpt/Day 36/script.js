// what is function , why and how to create it

// agar code likh dya tho woh turant chal jata hai


// function dance(){
//     console.log("dance");
// }

// dance();


// how to make a function 

// function myfunction(){
// console.log("I am munin");
// }

// myfunction();

// more ways to make function 

// let fnc = function(){
//     console.log("i AM MUNIN");

// }
// fnc();


// FUNCTION DECLARATION


// arrow function - fat arrow

// let myfnc = ()=>{

// }


// parameter and argument

// function dance(V1){
//     console.log(`${V1} NACH RAHA HAI`);
// }


// dance("godha");


// default , rest, and spread parameter

// default 

// function add(v1 = 0,v2 = 0){
// console.log(v1 + v2);
// }
// add();


// rest

// function abc(...val){
// console.log(val);
// }
// abc(1,2,3,4,5,6,7);


// return value and early return 

// return - jaha sai aaiyai waha he daal denge 

// function abc(){
//     return 12;
// }
// let val = abc();
// console.log(val);


// first class function - functions ko values ki trarah treat karsakte hai

// higher order functions - 

// function abc(val){
// return function(){
//     console.log("HI");
// }
// }

// abc()();


// pure vs impure function 

// aisa function jo ki bahar ki value ko na badle woh hai pure function

// let a = 12;
// function abc(){
//     console.log("hi");
// }

// aisa functionjo bahar ki value ko badalde woh hai impure function


// function newfcn(){
//     a++;
// }


// closures and lexical functions

// closure - ek function jo return kare ek aur function and return hone wala function use karega parent function ka koi variable 

// function abc(){
//     let a = 12;
//     return function(){
// console.log(a);
//     }
// }

// abc()();


// lexical scoping - 

// function abc(){
//     let a = 12;
//     function defg(){
//         let b = 13;
//         function ghij(){
//             let c = 14;

//         }
//     }
// }




// ife 

//  (function(){
// console.log("hi");
//  }) ();

// abc();




// function abc(){
//     console.log("HI");
// }