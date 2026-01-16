const { NumberSchema } = require("firebase/ai");

// 52. Store a number and check if it is a multiple of another number.
let number = 34;
let anotherNumber = 56;

if (number % anotherNumber === 0) {
  console.log("yes multiple of another number");
} else {
  console.log("Not a multiple of another number");
}
// 53. Store three sides and check if they form a valid triangle.

let side1 = 2;
let side2 = 4;
let side3 = 5;

if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
  console.log("valid traingle ");
} else {
  console.log("not valid traingle ");
}

// 54. Check if a triangle is equilateral, isosceles, or scalene.

if (side1 == side2 && side2 == side3) {
  console.log("equlateral traingel ");
} else if (side1 == side2 || side2 == side3 || side1 == side3) {
  console.log("isosceles traingle");
} else {
  console.log("scalene traingle");
}

// 55. Store a year and check if it is a century year.
let year = 2026;

if (Math.ceil(year % 100 == 0)) {
  console.log("yes its a century year", year);
} else {
  console.log("not a century year", year);
}

// 56. Check if a character is uppercase or lowercase.

let YourChar = "a";

let Convert = YourChar.charCodeAt(0);

if (Convert >= 97 && Convert <= 122) {
  console.log("lowercase", Convert);
} else if (Convert >= 65 && Convert <= 90) {
  console.log("uppercase", Convert);
}

// 57. Store a number and check if it is an integer.

let num = 34;

if (num % 1 === 0) {
  console.log("integers");
} else {
  console.log("not a integer");
}

// 58. Store a number and check if it is NaN.

if (num !== num) {
  console.log("its a NaN");
} else {
  console.log("not a NaN");
}

// 59. Store user role and grant access based on role.

let YourRole = "Boss";

switch (YourRole) {
  case "Boss":
    console.log("You are the Boss");
    break;
  case "employe":
    console.log("Do the work");
    break;

  case "manager":
    console.log("You are the manager");
    break;

  default:
    console.log("invalid role");
}

// 60. Store product quantity and apply discount conditionally.

let productQuantity = 14;
let yourPrice = (99 * productQuantity);
if (productQuantity >= 1 && productQuantity <= 5) {
  console.log("No Discount");
} else if (productQuantity >= 6 && productQuantity <= 15) {
  console.log(yourPrice * 15/100);
}

// 61. Store exam score and attendance percentage, decide pass/fail.

let score = 96;
let attendance = 79;

if((score > 90 && score <= 100) &&( attendance >= 70 && attendance <= 100)){
    console.log("outstanding ");
} 
  
// 62. Store time in hours and print greeting (morning/afternoon/night).

let time = 6;

if(time === 6){
    console.log("MORNING");
} else if(time === 12){
    console.log("afternoon");
} else if(time === -6){
    console.log("evening");
}

// 63. Store electricity units and calculate bill using slabs.

let unit = 180;
let totalBill = 0;

// slab rates
let rateA = 1;    // first 100 units
let rateB = 1.5;  // next 100 units
let rateC = 2;    // above 200 units

if (unit > 200) {
    totalBill += 100 * rateA;
    totalBill += 100 * rateB;
    totalBill += (unit - 200) * rateC;
} 
else if (unit > 100) {
    totalBill += 100 * rateA;
    totalBill += (unit - 100) * rateB;
} 
else {
    totalBill += unit * rateA;
}

console.log("Total Bill:", totalBill);


// 64. Store BMI value and print health category.

let yourBmi = 18;

if(yourBmi>= 0 && yourBmi <= 18.5 ){
    console.log("Underweight");
} else if(yourBmi > 18.5 && yourBmi <=24.9 ){
    console.log("Normal");
} else if(yourBmi >= 25 && yourBmi <= 29.9){
    console.log("overweight");
} else{
    console.log("obese");
}

// 65. Store two strings and check if they are equal ignoring case.

let str1 = "Munin";
let str2 = "Munin";

if(str1.toLowerCase() === str2.toLowerCase()){
    console.log("equal");
} else{
    console.log("not equal ");
}

