// Write a program that checks if a number is positive or negative and prints the result.

// let number = Number(prompt("enter your number"));

// if (number >= 1) {
//   console.log("positive", number);
// } else if (number < 0) {
//   console.log("negative", number);
// } else {
//   console.log("zero");
// }

// ### 1–10

// 1. Write a program that checks if a number is **positive or negative** and prints the result.
// 2. Check if a number is **even or odd**.

// let even_odd  = Number(prompt("enter your number"));
// if(even_odd % 2 === 0){
//     console.log("even number");
// } else{
//     console.log("odd number");
// }

// 3. Check if a person is **eligible to vote** (age ≥ 18).
// let yourage = Number(prompt ("enter your age "));
// if(yourage>= 18){
//     console.log("you are eligible to vote");
// } else{
//     console.log("under age");
// }

// 4. Compare two numbers and print **which one is bigger**.

// let compare_number1 = Number(prompt("enter your number to  compare 1"));
// let compare_number2 = Number(prompt("enter your number to  compare 2"));

// if(compare_number1 > compare_number2){
//     console.log("Number 1 is greater");
// }else{
//     console.log("Number 2 is greater");
// }

// 5. Check if a number is **zero, positive, or negative**.
// let checknumber = Number(prompt("enter your number to check"));

// if(checknumber >= 1){
//     console.log("positive number");
// } else if(checknumber < 0){
//     console.log("negative number");
// } else {
//     console.log("zero");
// }

// // 6. Check if a character is a **vowel or consonant**.

// let check_character = String(prompt("enter your 1 character "));

// if (
//   check_character === "a" ||
//   check_character === "e" ||
//   check_character === "i" ||
//   check_character === "o" ||
//   check_character === "u" ||
//   check_character === "A" ||
//   check_character === "E" ||
//   check_character === "I" ||
//   check_character === "O" ||
//   check_character === "U"
// ) {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }


// 7. Check if a year is **leap year or not**.

// let leapyear = Number(prompt("enter your year "));

// if((leapyear % 4 === 0 && leapyear % 100 !== 0) || (leapyear % 400 === 0)){
// console.log("leap year");
// }else {
//     console.log("not a leap year");
// }


// 8. Check if a number is **divisible by 5**.
// let divby5 = Number(prompt("enter your number"));

// if(divby5 % 5 === 0){
//     console.log("divisible by 5 totally");
// } else {
//     console.log("not divisbile by 5 ");
// }


// 9. Check if a number is **greater than 100 or not**.

// let great100 = Number(prompt("enter your number to check"));

// if(great100 > 100){
//     console.log("the number is greater than 100");
// } else{
//     console.log("not greateer than 100");
// }

// 10. Check if a person can **drive** (age ≥ 18) otherwise print “Not allowed”.

// let yourdrivingage = Number(prompt("enter your age is you want to drive"));

// if(yourdrivingage >= 18){
//     console.log("you can drive champ");
// } else{
//     console.log("you can't drive little punk");
// }

// ---

// ### 11–20

// 11. Given marks, print **Pass** if marks ≥ 40 else **Fail**.

// let yourmarks = Number(prompt("enter your marks"));
// if(yourmarks >= 40){
//     console.log("Thanks god you pass ");
// } else{
//     console.log("fail fucking bastard");
// }


// 12. Check if a number lies **between 10 and 50** (inclusive).

// let checknumbers = Number(prompt("enter your number"));
// if (checknumbers > 10 && checknumbers < 50){
//     console.log("yes the number lies between 10 and 50");
// } else{
//     console.log("not between 10 and 50");
// }

// 13. Compare three numbers and print the **largest**.

// let num1 = Number(prompt("enter your number 1 "));
// let num2 = Number(prompt("enter your number 2 "));
// let num3 = Number(prompt("enter your number 3 "));

// if(num1 > num2 && num1 > num3 ){
//     console.log("Number 1 is greatest", num1);
// } else if(num2 > num1 && num2 > num3){
//     console.log("number 2 is greatest", num2);
// }  else if(num1 === num2 && num2 === num3){
//     console.log("All numbers are equal");
// }
// else{
//     console.log("Number 3 is greatest", num3);
// }

// 14. Check if a number is **multiple of both 3 and 5**.
// let mutiple_number = Number(prompt("enter your number to check mutiple of 3 and 5"));

// if((mutiple_number % 3 === 0) && (mutiple_number % 5 === 0)){
//     console.log("Yes this number is multiple of both 3 and 5 ", mutiple_number);
// } else{
//     console.log("NOT a mutliple of both number");
// }

// 15. Check if a temperature is **Hot (>30), Moderate (20–30), Cold (<20)**.
// let temp = Number(prompt("enter your temperature"));
// if(temp >= 30){
//     console.log("hot");
// } else if(temp >= 20 && temp <= 30){
//     console.log("moderate");
// } else {
//  console.log("cold");
// }

// 16. Check if a password length is **valid (≥ 8 characters)**.
// let yourpassword = String(prompt("enter your password"));
// if(yourpassword.length > '8'){
//     console.log("valid password")
// } else{
//     console.log("not valid");
// }

// 17. Check if a number is **exactly equal to 100**.
// let excatequal = Number(prompt("enter your number"));

// if(excatequal === 100){
//     console.log("excat equal to 100");
// } else{
//     console.log("not equal ");
// }

// 18. Check if a character is **uppercase or lowercase**.

// let yourcharacter = String(prompt("enter you character "));

// if(yourcharacter >= 'a' && yourcharacter <= 'z'){
//     console.log("lowercase");
// } else if(yourcharacter >= 'A' && yourcharacter <= 'Z'){
//     console.log("uppercase");
// }


// 19. Check if a number is **divisible by 2 or 3**.
// let divby2and3 = Number(prompt("enter your number"));

// if(divby2and3 % 2 === 0 && divby2and3 % 3 === 0){
//     console.log("yes the number is divided by 2 and 3");
// } else{
//     console.log("not divisible by 2 and 3");
// }

// 20. Check if a number is **not equal to zero**.
// let notequal0 = Number(prompt("enter your number"));

// if(notequal0 != 0){
//     console.log("yes the number is not equal to 0");
// } else 
//     console.log("equal to zero");
// ---

// ### 21–30

// 21. Given marks, print **Grade A (90+), B (75–89), C (60–74), D (<60)**.
// let marks = Number(prompt("enter your marks under 100"));

// if(marks >= 90 && marks <= 100){
//     console.log("A");
// } else if(marks >= 75 && marks <= 89){
//     console.log("B");
// } else if(marks >= 60 && marks <= 74){
//     console.log("C");
// } else if(marks < 60){
//     console.log("fail");
// }


// 22. Check if a number is **inside range 1–100**, otherwise print “Out of range”.
// let insiderange = Number(prompt("enter the number to check range"));

// if(insiderange >= 1 && insiderange <= 100){
//     console.log("yes the number is under range 1 to 100", insiderange);
// } else{
//     console.log("outside the range");
// }

// 23. Check if a user is **child (<13), teen (13–19), adult (>19)**.

// let childage = Number(prompt("enter your age: "));
// if(childage >= 13){
//     console.log("you are a child");
// } else if(childage >= 13 && childage <= 19){
//     console.log("you are an teen");
// } else{
//     console.log("you are an adult");
// }

// 24. Compare two numbers and print **Equal / Not Equal**.

// let com1 = Number(prompt("enter your number1"));
// let com2 = Number(prompt("enter your number2"));
// if(com1 === com2){
//     console.log("equal");
// } else{
//     console.log("not equal");
// }

