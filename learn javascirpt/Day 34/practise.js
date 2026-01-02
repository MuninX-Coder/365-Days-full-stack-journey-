// question 1
let x = 10;
let y = 20;

if(x > 5 && y < 25){
    console.log("A");

}else{
    console.log("B");
}

// question 2
let isAdmin = true;
let isloogedin = false;

if(isAdmin || isloogedin){
    console.log("access granted");
} else
{
    console.log("access denied");
}

// question 3 

let temp = 35;

if(!(temp < 30)){
    console.log("Hot");
}else{
    console.log("pleasant");
}

// question 4

let a = 0;

if(a){
    console.log("Truthy");
}else{
    console.log("falsy");
}

// question 5

let score = 78;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "fail";

console.log(grade);


// question 6

let points = 20;

let status = points > 100 ? "GOLD" : points > 50 ? "silver" : "Bronze";

console.log(status);


// question 7

let logggedin = true;
let hadtoken =  false;

let access = logggedin && hadtoken ? "Allow" : "Deny";

console.log(access);

// question 8

let b = 5;
b++;
console.log(b);


// question 9
let c = 7;
++c;
console.log(c);


// question 10

let xx = 3;
let yy = xx++;
console.log(xx, yy);


// question 11

let p = 4;
let q = ++p;
console.log(p, q);

// question 12

let m = 10;
console.log(m--);
console.log(m);

// question 13

let n = 5;
let result = n++ + ++n;
console.log(result);


// question 14

let likes = 100;

function likepost (){
    return ++likes;
}
console.log(likepost());
console.log(likes);

// question 15

let count = 5;

if(count-- === 5){
    console.log("Matched");
}else{
    console.log("Not matched");
}