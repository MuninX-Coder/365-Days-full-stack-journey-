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
// 35. Print first 10 multiples of 9.
// 36. Print numbers between 1 and 100 that are NOT divisible by 2 and 3.
// 37. Print sum of numbers from 1 to 100 but skip multiples of 10.
// 38. Print numbers from 1 to 50; if number is multiple of 7, skip it.
// 39. Print numbers from 1 to 100; if number > 80, stop loop.
// 40. Print digits from 1 to 9 using `do...while`.
// 41. Print numbers from 1 to 20; replace multiples of 5 with “FIVE”.
// 42. Print numbers from 1 to 30; print “EVEN” for even numbers.
// 43. Print numbers from 1 to 30; print “ODD” for odd numbers.
// 44. Print numbers from 1 to 100 and count how many are divisible by 4.
// 45. Print the sum of squares from 1 to 5.
// 46. Print numbers between 1 and 100 that have remainder 1 when divided by 3.
// 47. Print countdown from 20 to 1 but skip 13.
// 48. Print numbers from 1 to 50; break when you hit first multiple of 11.
// 49. Print sum of numbers from 1 to 50 but stop when sum exceeds 500.
// 50. Print numbers from 1 to 100; count how many times loop runs.

// 51. Given a number `n`, print all numbers from 1 to `n`.
// 52. Given `n`, print all even numbers till `n`.
// 53. Given `n`, print sum of all numbers till `n`.
// 54. Given `n`, print factorial of `n`.
// 55. Given a number, count how many digits it has (using loop).
// 56. Given a number, print its digits one by one.
// 57. Reverse a number using loop.
// 58. Find sum of digits of a number.
// 59. Check if a number is palindrome (using loop logic).
// 60. Print multiplication table of a given number till 10.
// 61. Print all factors of a given number.
// 62. Count number of factors of a given number.
// 63. Check if a number is prime using loop.
// 64. Print all prime numbers between 1 and 50.
// 65. Print first 10 prime numbers.
// 66. Find sum of all prime numbers between 1 and 100.
// 67. Print Fibonacci series up to 10 terms.
// 68. Print Fibonacci numbers less than 100.
// 69. Find the largest digit in a number.
// 70. Find the smallest digit in a number.
// 71. Count how many even digits are in a number.
// 72. Count how many odd digits are in a number.
// 73. Print number pattern: 1 2 3 4 5 (single line using loop).
// 74. Print numbers until a random number becomes divisible by 7.
// 75. Keep adding numbers from 1 onward until sum exceeds 1000.

// 76. Print numbers from 1 to 100; break when you find first prime number > 50.
// 77. Print numbers from 1 to 100; skip all prime numbers.
// 78. Print sum of digits of all numbers from 1 to 50.
// 79. Count how many palindrome numbers are between 1 and 100.
// 80. Find the first number between 1 and 100 divisible by 13.
// 81. Print numbers from 1 to 100; stop after finding 5 multiples of 9.
// 82. Print first 10 numbers that are divisible by both 3 and 5.
// 83. Print numbers from 1 to 100; replace multiples of 3 with “A” and 5 with “B”.
// 84. Print numbers from 1 to 100; skip numbers whose digit sum is even.
// 85. Find sum of factorials of numbers from 1 to 5.
// 86. Print all Armstrong numbers between 1 and 500.
// 87. Check if a number is perfect number.
// 88. Print all perfect numbers less than 100.
// 89. Print numbers from 1 to 100; stop when digit sum equals 10.
// 90. Print reverse Fibonacci series of first 10 terms.
// 91. Print numbers until you find a number with exactly 3 factors.
// 92. Find LCM of two numbers using loop.
// 93. Find HCF of two numbers using loop.
// 94. Print first 10 numbers whose square ends with digit 6.
// 95. Print numbers from 1 to 100; count numbers containing digit 5.
// 96. Print numbers from 1 to 100; skip numbers having digit 3.
// 97. Generate first 10 triangular numbers using loop.
// 98. Print cumulative sum at each step from 1 to 20.
// 99. Print numbers until sum of digits becomes greater than the number itself.
// 100. Build a loop that stops only when a number becomes both prime and palindrome.
