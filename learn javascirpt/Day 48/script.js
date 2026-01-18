// 1. Print numbers from 1 to 10 using a `for` loop.
console.log("solution 1");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// 2. Print numbers from 10 to 1 (reverse order).

console.log("solution 2");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// 3. Print all even numbers from 1 to 20.

console.log("solution 3");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 4. Print all odd numbers from 1 to 20.

console.log("solution 4");

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// 5. Print first 10 natural numbers starting from 0.
console.log("solution 5");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 6. Print numbers from 5 to 50 with a gap of 5.

console.log("solution 6");
for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}
// 7. Print table of 2.
console.log("solution 7");

let table = 2;
for (let i = 1; i <= 10; i++) {
  let tabvalue = table * i;
  console.log(`${table} * ${i} = ${tabvalue}`);
}
// 8. Print table of 7.
console.log("solution 8");

let table7 = 7;
for (let i = 1; i <= 10; i++) {
  let tabvalue = table7 * i;
  console.log(`${table7} * ${i} = ${tabvalue}`);
}
// 9. Print numbers between 1 to 100 that are divisible by 3.

console.log("solution 9");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// 10. Print numbers between 1 to 50 that are divisible by both 5 and 10.
console.log("solution 10");

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0 && i % 10 === 0) {
    console.log(i);
  }
}
// 11. Print squares of numbers from 1 to 10.
console.log("solution 11");
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
// 12. Print cubes of numbers from 1 to 5.

console.log("solution 12");

for (let i = 1; i <= 5; i++) {
  console.log(i * i * i);
}
// 13. Print all numbers from 1 to 30 except multiples of 4 (use `continue`).

console.log("solution 13");

for (let i = 1; i <= 30; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

// 14. Print numbers from 1 to 20 but stop when number becomes 13 (use `break`).
console.log("solution 14");

for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    break;
  }
  console.log(i);
}
// 15. Print numbers from 1 to 10 using `while` loop.

console.log("solution 15");

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// 16. Print numbers from 10 to 1 using `while`.

console.log("solution 16");

let m = 10;
while (m >= 1) {
  console.log(m);
  m--;
}
// 17. Print numbers from 1 to 5 using `do...while`.

console.log("solution 17");

let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 5);

// 18. Print “Hello” 5 times using any loop.

console.log("solution 18");

for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}
// 19. Print numbers from -5 to 5.

console.log("solution 19");

for (let i = -5; i <= 5; i++) {
  console.log(i);
}
// 20. Print all multiples of 6 less than 60.
console.log("solution 20");
for (let i = 1; i < 60; i++) {
  if (i % 6 === 0) {
    console.log(i);
  }
}
// 21. Print numbers between 1 and 100 that end with digit 7.

console.log("solution 21");
for (let i = 1; i <= 100; i++) {
  if (i % 10 === 7) {
    console.log(i);
  }
}
// 22. Print numbers from 1 to 100, skip numbers divisible by 10.
console.log("solution 22");

for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    continue;
  }
  console.log(i);
}
// 23. Print first 10 even numbers starting from 2.

console.log("solution 23");

let counter = 0;
for (let i = 2; i <= 100; i += 2) {
  counter++;
  console.log(i);
  if (counter === 10) {
    break;
  }
}
// 24. Print first 10 odd numbers starting from 1.

console.log("solution 24");
let oddCounter = 0;
for (let i = 1; i <= 100; i += 2) {
  console.log(i);
  oddCounter++;
  if (oddCounter === 10) {
    break;
  }
}
// 25. Print numbers from 100 to 1, but only even ones.

console.log("solution 25");
for (let i = 100; i >= 1; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 26. Find the sum of numbers from 1 to 10.
console.log("solution 26");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = i + sum;
}
console.log(sum);
// 27. Find the sum of even numbers from 1 to 50.

console.log("solution 27");

let sumEven = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sumEven = i + sumEven;
  }
}
console.log(sumEven);
// 28. Find the sum of odd numbers from 1 to 50.

console.log("solution 28");

let sumOdd = 0;

for(let i = 1; i<= 50; i++){
    if(i%2 !== 0){
        sumOdd += i;
    }
}
console.log(sumOdd);
// 29. Count how many numbers between 1 to 100 are divisible by 5.
console.log("solution 29");
let counter5 = 0;

for(let i = 5;i<= 100; i+=5){
counter5++;
}
console.log(counter5);
// 30. Count how many even numbers are between 1 and 100.
console.log("solution 30");
let evenCount = 0;

for(let i = 2; i<= 100; i+= 2){
    evenCount++;
}
console.log(evenCount);
// 31. Print factorial of 5 using a loop.
console.log("solution 31");

let result = 1; 

for(let i =5 ; i>= 1; i--){
    result = i * result;
}
console.log(result);
// 32. Print factorial of a given number `n`.
console.log("solution 32");
let num = 20n;
let resultWithNum = 1n;

for(let i = num; i>= 1n; i--){
    resultWithNum = i * resultWithNum;
}
console.log(resultWithNum);
// 33. Reverse counting from 50 to 1, but stop at 25.

console.log("solution 33");

for(let i = 50; i >= 1; i--){
    
    if(i === 25){
        break;
    }
    console.log(i);
}
// 34. Print numbers from 1 to 100, but break when sum crosses 200.
console.log("solution 34");
let numberSUM = 0;

for (let i = 1; i<= 100; i++){
    numberSUM = numberSUM + i;
    if(numberSUM > 200){
        break;
    }
    console.log(i);
}
console.log(numberSUM);
