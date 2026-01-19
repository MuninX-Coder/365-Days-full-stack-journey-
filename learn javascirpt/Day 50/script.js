// 59. Check if a number is palindrome (using loop logic).
console.log("solution 59");

let number = 121;
let temp = number;
let reverse = 0;

while (number != 0) {
  reverse = reverse * 10 + (number % 10);
  number = Math.floor(number / 10);
}
if (temp === reverse) {
  console.log("palindrome");
} else {
  console.log("Not palindrome");
}

// 60. Print multiplication table of a given number till 10.

console.log("solution 60");

let multiplication = 5;
let valueMultiply = 1;

for (let i = 1; i <= 10; i++) {
  valueMultiply = multiplication * i;
  console.log(`${multiplication} * ${i} = ${valueMultiply}`);
}
// 61. Print all factors of a given number.
console.log("solution 61");

let yourNum = 34;

for (let i = 1; i <= yourNum; i++) {
  if (yourNum % i === 0) {
    console.log(i);
  }
}

// 62. Count number of factors of a given number.
console.log("solution 62");

let factCounter = 0;
for (let i = 1; i <= yourNum; i++) {
  if (yourNum % i === 0) {
    factCounter++;
  }
}
console.log(factCounter);

// 63. Check if a number is prime using loop.
console.log("solution 63");
let primeNum = 65;
let isPrime = true;

if (primeNum < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}
// 64. Print all prime numbers between 1 and 50.
console.log("solution 64");

for (let i = 2; i <= 50; i++) {
  let isprime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log(i);
  }
}
// 65. Print first 10 prime numbers.
console.log("solution 65");
let primeCount = 0;
for(let i = 2; i<=50; i++){
let isprime = true;
for(let j = 2; j<i; j++){
    if(i % j === 0){
        isprime = false;
        break;
    }
}
if(isprime){
    console.log(i);
    primeCount++;
    if(primeCount === 10){
        break;
    }
}
}
// 66. Find sum of all prime numbers between 1 and 100.
console.log("solution 66");

 let primeSUM = 0;

 for(let i = 2; i<= 100; i++){
    let thisprime = true;

    for(let j = 2; j<i; j++){
        if (i % j  === 0){
            thisprime = false;
            break;
        }
        
    }
    if(thisprime){
        primeSUM = primeSUM + i;
    }
 }
 console.log(primeSUM);
