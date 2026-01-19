const { mutationRef } = require("firebase/data-connect");

// 35. Print first 10 multiples of 9.
console.log("solution 35");

let multipe = 9;
let result = 1;


for(let i = 1;i <= 10; i++){
    result = multipe * i;
    console.log(`${multipe} * ${i} = ${result}`);
   
}
// 36. Print numbers between 1 and 100 that are NOT divisible by 2 and 3.

console.log("solution 36");

for(let i = 1; i<= 100; i++){
    if(i % 2 !==  0 && i%3 !== 0){
        console.log(i);
    }
}
// 37. Print sum of numbers from 1 to 100 but skip multiples of 10.

console.log("solution 37");
let SumCounter = 0;

for(let i = 1; i<=100; i++){
    if(i % 10 === 0){
        continue;
    }
    SumCounter = SumCounter + i; 
}
console.log(SumCounter);

// 38. Print numbers from 1 to 50; if number is multiple of 7, skip it.

console.log("solution 38");



for(let i = 1; i<=50; i++){
    if(i % 7 === 0){
        continue;
    }
   console.log(i);
}


// 39. Print numbers from 1 to 100; if number > 80, stop loop.

console.log("solution 39");

for(let i = 1; i<= 100; i++){
    if(i>80){
        break;
    }
    console.log(i);
}
// 40. Print digits from 1 to 9 using `do...while`.
console.log("solution 40");
let i = 1; 

do{
    console.log(i);
    i++;
} while (i<= 9)

// 41. Print numbers from 1 to 20; replace multiples of 5 with “FIVE”.

console.log("solution 41");
for(let i = 1; i<= 20 ; i++){
    if(i % 5 === 0){
        console.log("FIVE");
        continue;
    }
    console.log(i);
}
// 42. Print numbers from 1 to 30; print “EVEN” for even numbers.
console.log("solution 42");

for(let i = 1; i<= 30; i++){
    if(i % 2 === 0){
        console.log("EVEN");
        continue;
    }
    console.log(i);
}
// 43. Print numbers from 1 to 30; print “ODD” for odd numbers.

console.log("solution 43");

for(let i = 1; i<= 30; i++){
    if(i % 2 !== 0){
        console.log("ODD");
        continue;
    }
    console.log(i);
}
// 44. Print numbers from 1 to 100 and count how many are divisible by 4.
console.log("solution 44");

let count4 = 0;

for(let i = 1; i<= 100 ; i++){
    if(i % 4 === 0){
        count4++;
    }
    console.log(i);
}
console.log("Divisible by 4 : ", count4);
// 45. Print the sum of squares from 1 to 5.

console.log("solution 45");

let SumSquare = 0;

for(let i = 1; i<= 5; i++){
    let inerSqure = i * i ;
    SumSquare = inerSqure + SumSquare;
}
console.log(SumSquare);
// 46. Print numbers between 1 and 100 that have remainder 1 when divided by 3.

console.log("solution 46");

for(let i = 1; i<= 100; i++){
    if(i % 3 === 1){
        console.log(i);
    }
}
// 47. Print countdown from 20 to 1 but skip 13.
console.log("solution 47");

for(let i = 20; i>= 1; i--){
    if(i === 13){
        continue;
    }
    console.log(i);
}
// 48. Print numbers from 1 to 50; break when you hit first multiple of 11.
console.log("solution 48");

for(let i= 1; i<= 50; i++){
    if(i % 11 === 0){
        break;
    }
    console.log(i);
}
// 49. Print sum of numbers from 1 to 50 but stop when sum exceeds 500.

console.log("solution 49");

let sum500 = 0;

for(let i = 1; i<=50; i++){
    sum500 = sum500 + i;
    if(sum500>500){
        break;
    }
}
console.log(sum500);
// 50. Print numbers from 1 to 100; count how many times loop runs.

console.log("solution 50");

let loopCounter = 0;

for(let i = 1; i<=100; i++){
    loopCounter++;
}
console.log(loopCounter);

// 51. Given a number `n`, print all numbers from 1 to `n`.
console.log("solution 51");

let n = 56;

for(let i = 1; i<= n; i++){
    console.log(i);
}
// 52. Given `n`, print all even numbers till `n`.

console.log("solution 52");

for(let i = 1; i<= n; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
// 53. Given `n`, print sum of all numbers till `n`.

console.log("solution 53");

let sumOFN = 0;

for(let i = 1; i<= n; i++){
    sumOFN = sumOFN + i ;
}
console.log(sumOFN);
// 54. Given `n`, print factorial of `n`.

console.log("solution 54");
let  factorialNum = 20;
let Factorial = 1;
for(let i = 1; i<=factorialNum; i++){
Factorial = Factorial * i; 
}
console.log(Factorial);
// 55. Given a number, count how many digits it has (using loop).

console.log("solution 55");

let nn = 4567;   // number jiske digits count karne hain
let countDIGIT = 0;

if (nn === 0) {
  countDIGIT = 1;
} else {
  while (nn > 0) {
    countDIGIT++;
    nn = Math.floor(nn / 10);
  }
}

console.log(countDIGIT);

// 56. Given a number, print its digits one by one.
console.log("solution 56");

let nnn= 538;

if (nnn === 0) {
  console.log(0);
} else {
  while (nnn > 0) {
    let digit = nnn % 10;   // last digit
    console.log(digit);  // print digit
    nnn = Math.floor(nnn / 10); // remove last digit
  }
}

// 57. Reverse a number using loop.
console.log("solution 57");
let orgNUM = 123456789;
let rev = 0;

if(orgNUM === 0){
    orgNUM = 0;
} else {
    while (orgNUM > 0){
        let lastDigit = orgNUM % 10;
        rev = rev * 10 + lastDigit;
        orgNUM = (orgNUM - lastDigit) / 10;
    }
}
console.log(rev);
// 58. Find sum of digits of a number.
console.log("solution 58");

let yourDigit = 3657;
let SumDigit = 0;

if(yourDigit === 0){
    yourDigit = 0;
} else{
    while(yourDigit >0){
        let lastDigit = yourDigit % 10;
        SumDigit = SumDigit + lastDigit;
        yourDigit = (yourDigit - lastDigit) / 10;
    }
}
console.log(SumDigit);
