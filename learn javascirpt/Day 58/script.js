// vairable var, let ,const

// let
let var1  = "Munin";
console.log(var1);

// var 

var name = "Munin";
console.log(name);

// const 
const myname = "Munin";
// myname = "ravi";  - not allowed
console.log(myname);



// reassignment and redeclaration 

let a = 12;
a = 23;
console.log(a);

// redeclaration only on var
var aa = 12
var aa = 45;
console.log(aa);

// temporal dead zone 

// console.log(p);

// this blank areas if temporal deadzode, we can access the variable 

let p = 2;


// Hoisting impact per type 

console.log(hoist);

var hoist = undefined; // this part will go at the top
hoist = "hoisting";

// hoisting var let const teeno mai hotai


// Data types and type system 

// primitive data types 

let str = "Munin";  // string
let num = 18;     // number
let bool = true;      // boolean true and false
let noVAL = null;      // null - default value given by js
let undef;    // undefined - had no value
let u1 = Symbol("uid");  // symbol - used to create unchageable value
let u2 = Symbol("uid");
let bigval = 354563464n; // big int - for bigger integer value


console.log(str);
console.log(num);
console.log(bool);
console.log(noVAL);
console.log(undef);
console.log(u1,u2);
console.log(bigval);




// reference data types - value is inside any type of bracker

// array
let myarr = [1,2,3,4];
console.log(myarr);

// object 
let myobj  = {
    name : "Munin",
    class : 12,
    age : 18,
}
console.log(myobj);


// dynamic typing - we can change the variable data to any type of data types 

let naam = "munin"; // string
naam = 18; // number
naam = true;  // boolean
console.log(naam);



// type of - used to check the type of value 

let mytype = "MUNIN";
console.log(typeof(mytype));     //  string


// type corection - ek type automatically changes to different type 

let add = "5" + 1;   // 1 is converted to string "1" and then "5" + "1" = 51,  + sign do two things , 1 is to add and 1 is to cocact
console.log(add);


let sub = "5" - 1;   // 5 is converted to number and then operation is performed
console.log(sub);


// truthy vs falsy value 

// false, 0, null, "", undefined, nan, document.all --  this all are falsy value
// baki sab kuch truthy value hai



// OPERATOR

// operator - mathematical symbol which is used to perform some 

console.log(5 + 10);  // addition
console.log(5 - 10); // subtraction
console.log(5 / 10); // division
console.log(5 * 10); // multiplication
console.log(5 % 10); // modulus - used to get the remainder
console.log(5 ** 10); // exponenciation power ke lye


// comparision operation - used hotai compare karne ke lye

console.log(a = 5); // = - value dene ke lye use hotai
console.log(5 == 4);  // ==  -  check the value but not the type
console.log(5 === 4);  // ===   - check both value and type
console.log(5 != 4); // check karna dono barabar hai kya nai
console.log(5 !== 4);  // strict checking 
console.log(5 >= 4);  // greater than or equal to
console.log(5 <= 4);  // smaller than or equal to
console.log(5 < 4);  // smaller than
console.log(5 > 4);  // greater than


// assingment operator

let assingmentopt = 12;

  assingmentopt += 2; // value add karke uska ander dhal do,  add 2 in 5 
assingmentopt -= 2;  // subtract 2 from value
assingmentopt *= 3;  // mutiple 3 to value
assingmentopt /= 2;   // divide the value with 2
assingmentopt %= 3;  // do modulus - gives remainder

console.log(assingmentopt);



// logical operator

console.log(5 > 2 && 2 > 1);  // && - both condition should be true 
console.log(5 > 3 || 5<2);  // ||  - one condition must be true
console.log(!true);   // ! - ulta kardetai, sahi ko galat, galat ko sahi


// unary operator - operator jjo apply hotai sirip single value par

console.log(5 + 2);
console.log(5 - 6);
console.log(!5);
console.log(typeof(12));
let incre = 5;
++incre;  //  pre increment - add value direct and print karo
console.log(incre);

let postincre = 56;   
console.log(postincre++);  // post increment - first print value then add
console.log(postincre);


let dec = 5;
--dec;  // decrement pre - sub value direct print
console.log(dec);

let postdec = 5;
console.log(postdec--);  // post decrement - first print value then subtract
console.log(postdec);



// ternary operator  ?: - ternary operator

12 > 13 ? console.log("ture") : console.log("false");

// kya 12, 13 sai bara hai agar hai tho true print karo and nai hai tho false 


// type of - to get the type of any data

console.log(typeof(null));
console.log(typeof[]);
console.log(typeof(NaN));






// CONTROL FLOW - decision making ke lye use hotai

// agar yeh huai tho yeh kar oand agar yah huai tho yeh karo 

// if else  else if  - used for decision making

if(15 > 18){
    console.log("greater");
} else if (12 > 10){
    console.log("this is also greater");
} else {
    console.log("ok no one is greater");
}

// says agar 15 , 18 sai bara hai tho yeh print karo and agar 12 , 10 sai bara hai tho yeh print karo and agar kuch v bara nai hai tho yeh print karo


// switch  - jab ek value sai ham luk ko different differnent condintion check karna ho  (short tarika mai)

let myval = 2;

switch(myval){
    case 1: console.log("monday");   // first codintion
    break;  // used to stop the code and terminate it from running if the codition is true

    case 2 : console.log("tuesday");   //sec condition
    break;

    default :  // default condition
    console.log("Invalid");
    break;
}


// early return pattern 
// return "a"  -- a return karo and agge ka code run mat karo , function mai kaam atai 





// LOOPS - loops basically code hai jisko ham luk use kartia jab ham luk ko kuch repetitive kaam karnawana hotai
// eg =  1,2,3,4,5,6   ya fir eg = 1,1,1,1,1,1,1



// for loop - sabase basic looping 

// for(start, end, change){
//     // andar ka code
// }

// start - kaha sai start horai loop
// end - kha tak loop chalega
// change - incrementation of the value

for(let i = 1; i<100; i++){
    console.log(i);
}

// ek loop chalayai,  jo let i = 1,  mtlb ki 1 sai start huai,  fir woh i<100,   i less than 100 tak chalega , and i++, har ek baar i kko 1 sai increment karega and jab loop ka andar aaiga tab console par i ko print karo


// we use forloop when we know kha sai start karna hai kha tak karna hai 


// while loop -  jab we know kha sai start hoga but ek condition satisty hone tak run hoga 

// // start  -- kha sai start hona hai let i = 1 ; ya kuch v
// while (end){       // kad end hona hai 
//     // code
//     // change           -- updation the value ya bole tho i
// }

let i = 1; 
while(i<36){
    console.log(i);
    i++;
}

// start karo 1 ssai,  let i = 1;   fir jab tak i jo 36 sai chota hai tab tak yeh andar ka code run karo


// do while -- yeh woh code hai jjisme ek baar na ek baar tho code run hoga, condition galat hone sai v

// start    -- intilizing the value  let i = 1; ya kuch v
// do{
  // ek baar na ek bar iska andar ka code run hoga
// // chnage     -- changing the value which is i ko update karna

// }  
// while(end)  // condition check hoga


let ii = 1; 
do{
    console.log("ek tho run hua");
    i++;
} while(ii<0)  // condition galat hai fir v run hua