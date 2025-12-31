// var, let , const 

 

//  problems when we create variable with var 
 // window mein add karta hai
// function scoped hota hai
// we can redeclare with the same name





// scode (global, block, functional)

// var p = 12 ; // golbal 

// {
//     var p = 34;
// }


// function abcd (){
// if(true){
//     var p =12;
// }
// }


// reassinment and redeclartion 

// var a = 123;
// a = 3434;

// let b =  23
// b = 45;



// temporal dead zone 

// console.log(a);
// let a = 12; 

// console.log(p);
// var p = 23;



// Hoisting impact per type 

// hoisting - ek variable kko jab js mai banatain tab woh variable 2 hisseo mai tuta hai aur uska declare part uper chala jata hai aur uska intilize part niche reh jata hai.

// var m = 12;



// var a = undifined
// a = 12;


// console.log(p);
// let p = 23;

// let p = undefined
// p = 34;


console.log(nm);
var nm = "munin";

// console.log(age);
// let age = 18;

var x = 1;  // gobal
{
    var x =  2;  // not respect brases
}
console.log(x);


let a = 10;
{
    let a = 20;
    console.log("Inside : ", a);
}
console.log("outside:", a);

