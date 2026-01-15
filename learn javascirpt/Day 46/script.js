

// 1. Write a program that checks if a number is positive.
let number = 1;
if (number >= 1) {
  console.log("positive", number);
}

// 2. Write a program that checks if a number is negative.
if (number < 0) {
  console.log("Negative", number);
}

// 3. Write a program that checks if a number is zero.

if (number == 0) {
  console.log("Zero", 0);
}

// 4. Store a number in a variable and print `"Even"` if it is even.
let evenNUM = 46;
if (evenNUM % 2 === 0) {
  console.log("even", evenNUM);
}

// 5. Store a number in a variable and print `"Odd"` if it is odd.

let oddNum = 57;
if (oddNum % 2 != 0) {
  console.log("odd", oddNum);
}

// 6. Check if a person is eligible to vote (age ≥ 18).

let age = 19;
if (age >= 18) {
  console.log("you can vote", age);
}

// 7. Store a user’s age and print `"Child"` if age < 13.

let underAge = 12;
if (underAge <= 13) {
  console.log("you can't vote :", underAge);
}

// 8. Print `"Teen"` if age is between 13 and 19.
let teen = 15;
if (teen >= 13 && teen <= 19) {
  console.log("Teen", teen);
}

// 9. Print `"Adult"` if age is 20 or more.

let adult = 21;
if (adult > 20) {
  console.log("adult: ", adult);
}

// 10. Check if a number is divisible by 5.

let divBY5 = 50;
if (divBY5 % 5 === 0) {
  console.log("Yes divisible by 5", divBY5);
}

// 11. Check if a number is divisible by both 3 and 5.

let divBY5and3 = 30;
if (divBY5and3 % 3 === 0 && divBY5and3 % 5 === 0) {
  console.log("yes divisible by both 5 and 3 : ", divBY5and3);
} else {
  console.log("not divisible by 3 and 5 : ", divBY5and3);
}

// 12. Check if a number is divisible by 3 or 7.

let divby3and7 = 56;
if (divby3and7 % 3 === 0 && divby3and7 % 7 === 0) {
  console.log("yes divisible by 3 and 7 : ", divby3and7);
} else {
  console.log("not divisible by 3 and 7", divby3and7);
}

// 13. Store two numbers and print the larger one.

let num1 = 3345;
let num2 = 5667;

if (num1 > num2) {
  console.log("Number 1 largest : ", num1);
} else {
  console.log("Number 2 largest : ", num2);
}

// 14. Store two numbers and print `"Equal"` if they are the same.

let equal1 = 12;
let equal2 = 12;

if (equal1 === equal2) {
  console.log("equal number", "number 1 : ", equal1, "number 2 :", equal2);
}

// 15. Store three numbers and print the largest one.
let num3 = 7865;

if (num1 > num2 && num1 > num3) {
  console.log("Number 1 largest : ", num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("Number 2 largest :", num2);
} else {
  console.log("Number 3 largest : ", num3);
}

// 16. Store a password and check if its length is at least 8.

let parrword = 987653210;

// 17. Store a boolean `isLoggedIn` and print `"Welcome"` if true.

let isLoggedIn = true;
if (isLoggedIn === true) {
  console.log("Welcome");
}

// 18. Print `"Access Denied"` if `isLoggedIn` is false.
isLoggedIn = false;
if (isLoggedIn === false) {
  console.log("Access Denied");
}

// 19. Check if a temperature is above 30 and print `"Hot"`.
let temperature = 31;
if (temperature > 30) {
  console.log("Hot", temperature);
}

// 20. Check if a temperature is below 15 and print `"Cold"`.
temperature = 14;
if (temperature < 15) {
  console.log("cold", temperature);
}

// 21. Store marks and print `"Pass"` if marks ≥ 40, else `"Fail"`.

let marks = 56;
if (marks >= 40) {
  console.log("pass");
} else {
  console.log("fail");
}

// 22. Print `"Excellent"` if marks ≥ 90.
marks = 98;
if (marks >= 90) {
  console.log("Excellent");
}

// 23. Print `"Good"` if marks are between 70 and 89.
marks = 85;
if (marks >= 70 && marks <= 89) {
  console.log("Good");
}

// 24. Print `"Average"` if marks are between 40 and 69.
marks = 50;
if (marks >= 40 && marks <= 69) {
  console.log("Average");
}

// 25. Print `"Fail"` if marks < 40.
marks = 23;
if (marks < 40) {
  console.log("fail");
}

// 26. Store a number and check if it is a single-digit number.

let singleDigit = 8;

if (singleDigit >= 0 && singleDigit <= 9) {
  console.log("single digit : ", singleDigit);
}

// 27. Check if a number is a two-digit number.
let doubleDigit = 45;
if (doubleDigit >= 10 && doubleDigit <= 99) {
  console.log("Double digit", doubleDigit);
}

// 28. Check if a year is a leap year (basic logic).

// 29. Store a character and check if it is a vowel.
let charcter = "a";

if (
  charcter === "a" ||
  charcter === "e" ||
  charcter === "i" ||
  charcter === "o" ||
  charcter === "u" ||
  charcter === "A" ||
  charcter === "E" ||
  charcter === "O" ||
  charcter === "I" ||
  charcter === "U"
) {
  console.log("vowel : ", charcter);
}

// 30. Check if a character is a consonant.
charcter = "z";
if (
  charcter === "a" ||
  charcter === "e" ||
  charcter === "i" ||
  charcter === "o" ||
  charcter === "u" ||
  charcter === "A" ||
  charcter === "E" ||
  charcter === "O" ||
  charcter === "I" ||
  charcter === "U"
) {
  console.log("vowel : ", charcter);
} else {
  console.log("consonant : ", charcter);
}

// 31. Store a number and check if it is between 10 and 50.

let storenumber = 45;
if (storenumber >= 10 && storenumber <= 50) {
  console.log("Yes :", storenumber);
}

// 32. Store a username and check if it is empty.

let username;
if (username === "") {
  console.log("yes empty: ", username);
}

// 33. Store a string and check if its length is zero.

let srtValue = "";

if (srtValue.length === 0) {
  console.log("yes", srtValue);
}

// 34. Store a number and check if it is NOT equal to 100.

let storeNumber = 99;
if (storeNumber != 100) {
  console.log("Not equal : ", storeNumber);
}

// 35. Check if a number lies outside the range 1 to 100.

let outside = 232;
if (outside > 1 && outside > 100) {
  console.log("lies outside : ", outside);
}

// 36. Store a day number (1–7) and print the day name using `if-else`.
let dayNumber = 1;

if (dayNumber === 1) {
  console.log("Monday");
} else if (dayNumber === 2) {
  console.log("Tuesday");
} else if (dayNumber === 3) {
  console.log("wednesday");
} else if (dayNumber === 4) {
  console.log("Thursday");
} else if (dayNumber === 5) {
  console.log("Friday");
} else if (dayNumber === 6) {
  console.log("saturday");
} else if (dayNumber === 7) {
  console.log("sunday");
} else {
  console.log("inval input, enter between 1 to 7");
}

// 37. Rewrite the same day program using `switch`.
let Day = 7;
switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid input , enter between 1 to 7");
}

// 38. Store a traffic light color and print the action using `if-else`.

let clr = 1; // 1 for green, 0 for red, 2 for yellow

if (clr === 1) {
  console.log("Green light");
} else if (clr === 0) {
  console.log("Red light");
} else if (clr === 2) {
  console.log("Yellow light");
}

// 39. Rewrite the traffic light program using `switch`.

let traffif = 2;

switch (traffif) {
  case 1:
    console.log("Green light");
    break;

  case 2:
    console.log("Red light");
    break;

  case 3:
    console.log("Yellow light");
    break;

  default:
    console.log("invalid input , enter between 1 to 3");
}

// 40. Store a month number and print the month name.
let month = 1;

if (month === 1) {
  console.log("January");
} else if (month === 2) {
  console.log("february");
} else if (month === 3) {
  console.log("March");
} else if (month === 4) {
  console.log("April");
} else if (month === 5) {
  console.log("May");
} else if (month === 6) {
  console.log("June");
} else if (month === 7) {
  console.log("July");
} else if (month === 8) {
  console.log("August");
} else if (month === 9) {
  console.log("September");
} else if (month === 10) {
  console.log("October");
} else if (month === 11) {
  console.log("November");
} else if (month === 12) {
  console.log("December");
}

// 41. Check if a number is positive AND even.

let positive_even = 36;
if (positive_even >= 1 && positive_even % 2 === 0) {
  console.log("The nuber is both positive and even :", positive_even);
}

// 42. Check if a number is negative OR zero.

let negative_zero = -9;
if (negative_zero === 0 || negative_zero <= 0) {
  console.log("Yes the number is either negative or zero", negative_zero);
}

// 43. Store age and `hasID` boolean, allow entry only if both true.

let Yourage = true;
let hasID = true;

if (Yourage == true && hasID == true) {
  console.log("entry allowed");
}

// 44. Store age and allow entry if age ≥ 18 OR has permission.

let above18 = 19;
if (above18 >= 18) {
  console.log("entry allowed");
}

// 45. Store username and password and check login validity.

let Yourusername = "Munin";
let Yourpassword = 987654321;

if (Yourusername === "Munin" && Yourpassword === 987654321) {
  console.log("login allowed");
} else {
  console.log("invalid user");
}

// 46. Store a score and assign a grade using `else if`.
let score = 89;

if (score >= 80 && score <= 100) {
  console.log("a");
} else if (score >= 50 && score <= 79) {
  console.log("b");
}

// 47. Store income and calculate tax slab using conditions.

let income = 50000;

let tax = 5; // your tax percent - 5, 10, 15, 20

switch (tax) {
  case 5:
    console.log(income - 2500);
    break;

  case 10:
    console.log(income - 5000);
    break;

  case 15:
    console.log(income - 7500);
    break;

  case 20:
    console.log(income - 10000);
    break;

  default:
    console.log("inval tax slap");
}

// 48. Check if a number is divisible by 2, 3, or both.

let yournumer = 45;

if (yournumer % 2 === 0 || yournumer % 3 === 0 || yournumer % 2 === 0 && yournumer % 3 === 0){
    console.log("yes it is divisible", yournumer);
} else{
    console.log("Not divisible", yournumer);
}

// 49. Store speed and print `"Overspeeding"` if speed > limit.

let speed = 78;

if(speed > 60){
console.log("overspeeding", speed);
} else{
    console.log("driving in the zone", speed);
}

// 50. Store balance and withdraw amount, check if withdrawal is allowed.

let balance = 500;
let withdrawl = 600;

if(withdrawl < balance){
    console.log("withdrawl in allword");

} else {
    console.log("insufficient balance");
}

// 51. Store a number and print whether it is prime (basic logic).

let primenum = 57;

if(primenum % primenum === 0 && primenum % 2 === 0){
    console.log("prime number", primenum);
} else{
    console.log("not a prime number", primenum);
}

// 52. Store a number and check if it is a multiple of another number.

// 53. Store three sides and check if they form a valid triangle.

// 54. Check if a triangle is equilateral, isosceles, or scalene.

// 55. Store a year and check if it is a century year.

// 56. Check if a character is uppercase or lowercase.

// 57. Store a number and check if it is an integer.

// 58. Store a number and check if it is NaN.

// 59. Store user role and grant access based on role.

// 60. Store product quantity and apply discount conditionally.

// 61. Store exam score and attendance percentage, decide pass/fail.

// 62. Store time in hours and print greeting (morning/afternoon/night).

// 63. Store electricity units and calculate bill using slabs.

// 64. Store BMI value and print health category.

// 65. Store two strings and check if they are equal ignoring case.

// 66. Store a number and check if it is within ±10 of 100.

// 67. Store a character and check if it is a digit.

// 68. Store a character and check if it is special character.

// 69. Store a number and classify it as small, medium, or large.

// 70. Store salary and calculate bonus based on conditions.

// 71. Store shopping cart total and apply coupon logic.

// 72. Store login attempts and block user after 3 attempts.

// 73. Store battery percentage and show battery status.

// 74. Store weather condition and suggest clothing.

// 75. Store exam result and decide scholarship eligibility.

// 76. Store age and gender and apply conditional rules.

// 77. Store two dates and determine which comes first.

// 78. Store a number and check if it is a perfect square.

// 79. Store a number and check if it is a palindrome.

// 80. Store a string and check if it starts with a specific letter.

// 81. Store multiple conditions and nest `if-else` properly.

// 82. Convert nested `if-else` into `switch` where possible.

// 83. Write a program where one wrong condition breaks the logic.

// 84. Debug a condition that always returns true.

// 85. Debug a condition that never runs.

// 86. Write a program that prioritizes conditions correctly.

// 87. Write a program where order of conditions matters.

// 88. Write a menu-driven program using `switch`.

// 89. Combine logical operators to form complex rules.

// 90. Rewrite a complex condition into simpler ones.

// 91. Predict output of multiple `if-else` blocks before running.

// 92. Write a program that handles invalid input safely.

// 93. Write a program that checks edge cases explicitly.

// 94. Write a program that fails due to wrong comparison operator.

// 95. Fix a program that uses `=` instead of `==`.

// 96. Write a program that behaves differently for `==` and `===`.

// 97. Handle `null` and `undefined` safely in conditions.

// 98. Write a program where truthy and falsy values matter.

// 99. Write a real-world login validation using control flow.

// 100. Write a decision-making program that feels like real app logic.
