// data types - 

// data ka type, data tho kuch v hos aktai 

// primitive data type - aise sari values jinko copy karne par ek real copy meljai

// reference - inko copy karne par real copy nai miltai but we will get a reference of its parents 


// let a = 12;  // 12 jo value hai woh 

// let b = a;

//  a = a + 2;


//  let a = [1,3,5,];
//  let b = a;
//  b.pop();


// string - basically 

let myName = 'Munin';

// number - for number

let mynum = 12; 

// boolean - true and false

let a = true;
let b = false;

// nul - not giving value 

let myvalue = null;

// boolean - 

let myage;


// sysbol - unique unchange able value create kartai

let u1 = Symbol("uid");
let u2 = Symbol("uid");

let obje = {
    name:"Munin",
    age : 18,
    email: "a@gmail.com", 
    uid : 1
};


 let u3 = Symbol("uid");
obje[u1] = "001";


// bigint

let bignumber = 3243n;
bignumber + 23445435;


// array 

let arrays = [1,2,3];
let newarr = arrays;


// object 

let myobj = {
    name : "Munin",
    age : 18
};



// Dynamic typing - js mein static typing nhi hai, and yaha par hai dynamic typing , jiska mtlb hai ki ham dat ko change karsaktai kyu ki dynamic data types hai



// type corcion - one type automatically cornvert ho jaiga 


