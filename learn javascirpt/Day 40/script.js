// 1. Write a program that takes a number and prints **"Positive"**, **"Negative"**, or **"Zero"** using `if-else`.

// let number = Number(prompt("enter your number:"));
// if(number >= 1 ) {
//     console.log("positive number");
// } else if(number < 0) {
//     console.log("negative number");
// } else if(number === 0) {
//     console.log("zero");
// }

// 2. Take a person’s age as input and print whether they are **eligible to vote** or **not eligible**.

// let yourage = Number(prompt("enter your age"));
// if(yourage >= 18){
//     console.log("eligibe to vote");
// } else {
//     console.log(  "not eligible to vote")
// }

// 3. Given three numbers, find and print the **largest** one using conditional statements only.
// let num1 = Number(prompt("enter number 1"));
// let num2 = Number(prompt("enter number 2"));
// let num3 = Number(prompt("enter number 3"));

// if(num1 > num2 && num1 > num3){
//     console.log("Number 1 is the largets", num1);
// }
// else if(num2 > num1 && num2 > num3) {
//     console.log("Number 2 is the greatest", num2);
// } else if(num3 > num2 && num3 > num1){
//     console.log("Number 3 is the greatest ", num3);
// } else if (num1 === num2 && num2 === num3){
//     console.log("all are equal",num1, num2, num3);
// }

// 4. Write a program that checks if a given year is a **leap year** or not.
// let youryear = Number(prompt("enter your year: "));
// if((youryear % 4 == 0 && youryear % 100 != 0) || (youryear % 400 == 0)){
//     console.log("its a leap year", youryear);
// } else{
//     console.log("not a leap year", youryear);
// }

// 5. Take a number and print **"Even"** or **"Odd"** without using loops.
// let even_odd_number = Number(prompt("enter your number to check even or odd"));
// if(even_odd_number % 2 === 0){
//     console.log("its a even number", even_odd_number );
// } else{
//     console.log("odd number", even_odd_number);
// }

// 6. Given a number from 1 to 7, print the corresponding **day of the week** using `switch`.

// let days = Number(prompt("enter your days in 1 to 7"));

// switch (days) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("friday")
//         break;
//     case 6:
//         console.log("saturday")
//         break;
//     case 7:
//         console.log("sunday")
//         break;

//     default:
//         console.log("invalid input, enter value 1 to 7 only");
//         break;
// }

// 7. Take a character as input and check whether it is a **vowel or consonant**.

// let yourchar = String(prompt("enter your character 1 character only"));

// if (
//   yourchar === "a" ||
//   yourchar === "e" ||
//   yourchar === "i" ||
//   yourchar === "o" ||
//   yourchar === "u" ||
//   yourchar === "A" ||
//   yourchar === "E" ||
//   yourchar === "I" ||
//   yourchar === "O" ||
//   yourchar === "U"
// ) {
//   console.log("its a vowel", yourchar);
// } else {
//   console.log("its a consonent: ", yourchar);
// }

// 8. Given a student’s marks:

//    * 90+ → print **A**
//    * 75–89 → print **B**
//    * 50–74 → print **C**
//    * below 50 → print **Fail**

// let student_marks = Number(prompt("enter your marks: "));
// if (student_marks >= 90){
//    console.log("A");
// } else if(student_marks >= 75 && student_marks <= 89){
//     console.log("B");
// } else if(student_marks >= 50 && student_marks <= 74){
//     console.log("c");
// } else if (student_marks <= 50){
//     console.log("fail");
// }

// 9. Take two numbers and an operator (`+`, `-`, `*`, `/`) and perform the operation using `switch`.

// let number1 = Number(prompt("enter your number 1"));
// let number2 = Number(prompt("enter your number 2"));
// let opration_to_perform = prompt("your operation +, -, *, /");

// switch (opration_to_perform) {
//     case '+':
//         console.log("addition : ", number1 + number2);
//         break;
//     case '-':
//         console.log("subtraction : ", number1 - number2);
//         break;
//     case '*':
//         console.log("Multiplication : ", number1 * number2);
//         break;
//     case '/':
//         console.log("Division : ", number1 / number2);
//         break;

//     default:
//         console.log("invalid oprator");
//         break;
// }

// 10. Write a program that checks whether a number is **divisible by both 3 and 5**, only 3, only 5, or neither.

// let check_divisible = Number(prompt("enter your number"));

// if (check_divisible % 3 == 0 && check_divisible % 5 == 0) {
//   console.log("yes divisible by both 3 and 5", check_divisible);
// } else if (check_divisible %  3 == 0) {
//   console.log("only divisible by 3");
// } else if (check_divisible % 5 == 0) {
//   console.log("only divisible by 5", check_divisible);
// }

// 11 Take a number and print whether it is a single-digit, double-digit, or more than two digits.
// let checkdigit = Number(prompt("enter your digit to check"));

// if(checkdigit >= 0 && checkdigit <= 9){
//     console.log("single digit", checkdigit);
// } else if(checkdigit >= 10 && checkdigit <= 99){
//     console.log("double digit", checkdigit);
// } else {
//     console.log("more than 2 digit : ", checkdigit);
// }

// 12 Take a temperature value and print:

// "Cold" if below 15

// "Normal" if 15–30

// "Hot" if above 30

// let your_tempt = Number(prompt("enter your temperature"));
// if(your_tempt <= 15){
//     console.log("cold", your_tempt);
// } else if(your_tempt  >= 15 && your_tempt <= 30){
//     console.log("normal temp", your_tempt)
// } else {
//     console.log("hot", your_tempt);
// }

// 13 Take three angles of a triangle and check whether it forms a valid triangle.

// let side1 = Number(prompt("enter your first side"));
// let side2 = Number(prompt("enter your second side"));
// let side3 = Number(prompt("enter your third side"));

// if(side1 + side2 > side3){
//     console.log("valid traingle");
// } else if(side2  + side3 > side1){
//     console.log("valid triangle");
// } else if(side1 + side3 > side2){
//     console.log("valid traingle");
// }

//14 Take a character and check whether it is an alphabet, digit, or special character.

// let check_character = prompt("enter your character");

// if (
//   (check_character >= "a" && check_character <= "z") ||
//   (check_character >= "A" && check_character <= "Z")
// ) {
//   console.log("its an alphabet", check_character);
// } else if (check_character >= "1" && check_character <= "9") {
//   console.log("its a digit", check_character);
// } else {
//   console.log("its a sepcial character", check_character);
// }

//15 Given a number, check if it is prime or not (no loops allowed — think).
let prime_or_not = Number(prompt("enter your number: "));



//16 Take a number and print whether it is a perfect square or not.

//17 Take salary input and calculate bonus:

// salary ≥ 50,000 → 20% bonus

// salary ≥ 30,000 → 10% bonus

// below 30,000 → no bonus

//18 Take a month number (1–12) and print how many days it has (ignore leap year).

//19 Take two numbers and print whether they are equal, or which one is greater.

//20 Take a time in hours (0–23) and print:

// "Good Morning" (5–11)

// "Good Afternoon" (12–16)

// "Good Evening" (17–20)

// "Good Night" (21–4)
