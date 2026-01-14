const { connectDataConnectEmulator } = require("firebase/data-connect");


// 1. Create a variable named `age` and store your current age in it.
let myage = 18;
console.log(myage);

// 2. Create a variable `city` and assign your city name as a string.

let city = "lakhimpur";
console.log(city);

// 3. Declare a variable `isStudent` and store a boolean value.

let isStudent = true;
console.log(isStudent);

// 4. Create a variable `price` and store a decimal number in it.

let price = 99.99;
console.log(price);

// 5. Declare a variable without assigning any value and log it.

let variable;
console.log(variable); // we get undefined

// 6. Create two variables `a` and `b` with values 10 and 5, then log their sum.

let a,b;
a= 10; b = 5;
console.log("add : ",a+b);

// 7. Subtract `b` from `a` and store the result in a new variable.

let subtract_value = console.log(b-a);
console.log("subtract : ",subtract_value);

// 8. Multiply two numbers stored in variables and log the result.

let mul1, mul2;
mul1 = 2, mul2 = 4;
console.log( "multiply: " , mul1 * mul2);

// 9. Divide 20 by 4 using variables and log the output.

let div1 = 34;
let div2 = 2;
console.log("divide : ", div1 / div2);

// 10. Find the remainder when 17 is divided by 3.

console.log("Remainder : ", 17 % 3);

// 11. Create a variable `name` and log its data type.

let name;
console.log( "type of name : ",typeof(name));

// 12. Create a variable with a number and check its type using `typeof`.

let number = 34;
console.log("type of number : ", typeof(number));

// 13. Create a boolean variable and log its type.

let booleanvalue = true;
console.log("type of boolean : ", typeof (booleanvalue));

// 14. Create a variable with `null` and check its type.

let nullValue = null;
console.log("type of null : ",typeof(nullValue));   // object 

// 15. Create a variable with `undefined` and check its type.

let undefinedValue = undefined;
console.log("type of undefined : ", typeof(undefinedValue));   // undefined

// 16. Create a string containing a number and check its type.

let string_num = "1234";
console.log("type of string but value number : ", typeof(string_num));  // string 

// 17. Add a number and a string and log the result.

console.log(121+"munin");  // concatination is performed

// 18. Subtract a string number from a number and log the result.

console.log("123" - 23);  // 123 is converted to number and then subtraction is performed

// 19. Multiply a string number with a number and log the result.

console.log("2" * 2);  // string number is converted to number and then multiplication is performed

// 20. Divide a number by a string number and log the result.


console.log("34" / 2);  // string number is converted to number and then division is performed

// 21. Declare two variables using `let` and change one of their values.

let val1 = 12;
let val2 = 34;
val1 = 54;  // new value
val2 = 89;  // new value
console.log(val1, val2);

// 22. Declare a variable using `const` and try to change its value.

const mycurrentAge = 18;
// mycurrentAge = 19;  // got error we cant change 
// console.log(mycurrentAge);

// 23. Declare the same variable name twice using `let` and observe the error.

// let name1 = "Munin";
// let name1 = "subham";  // we got an error, saying identified name1 is already been declared

// 24. Declare a variable using `var` and redeclare it again.

var name1 = 34;
var name1 = 45;  // we can redeclare using var 
console.log(name1);

// 25. Assign a value to a variable without declaring it and log it.

a  = 23;
console.log("without declaring variable : ",a);

// 26. Swap values of two variables using a third variable.

let vala = 12
let valb = 23;
let temp;

temp = vala;
vala = valb;
valb = temp;

console.log(vala);
console.log(valb);


// 27. Swap values of two variables without using a third variable.

let value1 = 50;
let value2 = 100;

value1 = value1 + value2;
value2 = value1 - value2;
value1 = value1 - value2;
console.log(value1);  // 100
console.log(value2);   // 50


// 28. Store the result of `(10 + 5) * 2` in a variable.

let store_result = console.log( (10 + 5) * 2);
console.log(store_result);   // why getting undefined also 

// 29. Store the result of `10 + 5 * 2` in a variable.

let store_new = console.log(10 + 5 * 2);
console.log(store_new);

// 30. Explain the difference between the results of question 28 and 29 in comments.

// - because in q. 28 , we put the value 10 and 5 in a bracket which says first do this operation and then multiple with 2, so beacuse of that what q 28. is doing is first adding 10 + 5 = 15 then multiplying 15 with 2 and we get 30, but in q 29. we didnt specificed which operation is to be done first so its doing by default and taking the more precidence value  which means first multiply 5 with 2 and then add 10. and we get 20

// 31. Compare two numbers using `==` and log the result.

let com1 = 34;
let com2 = 3;
console.log("comparing using ==", com1 == com2);  // we get false 

// 32. Compare two numbers using `===` and log the result.

console.log("comparing using ===", com1 === com2);  // we get again false  , why getting both false beacuse of different value or what

// 33. Compare a number and a string using `==`.

let comstr = "Munin";
let comstr2 = "Munin";

console.log("comparing string using ==", comstr == comstr2);  // we get true

// 34. Compare a number and a string using `===`.

console.log("comparing string using ===", comstr === comstr2);  // we  get again true

// 35. Check if 10 is greater than 5.

console.log("checking 10 is greater then 5 :", 10 > 5);

// 36. Check if 5 is less than or equal to 5.

console.log("checking 5 is less or equal : ", 5 <= 5);

// 37. Check if 7 is not equal to "7" using strict comparison.

console.log("checking 7 : ", 7 === "7");  //false

// 38. Store the result of a comparison in a variable.
 let result_of_comparision =  ("checking 7 : ", 7 === "7");
 console.log(result_of_comparision);

// 39. Compare two variables whose values are changed later.

let changecom = 23;
let changecom2 = 5;
console.log("compare : ", changecom === changecom2);

// 40. Predict the output before running the comparison code.

// it will be false i think as both value are different, but type is same 

// 41. Create two boolean variables and use `&&` operator.

let isme = true;
let isyou = false;
console.log(isme && isyou);

// 42. Create two boolean variables and use `||` operator.

// using previous variable only
console.log(isme || isyou);

// 43. Use `!` operator on a boolean variable.

console.log(!isme);  // true becomes false 

// 44. Combine comparison and logical operators in one expression.

console.log (5 <= 10 && 5>= 2);

// 45. Check if a number is between 10 and 20 using logical operators.

let number_to_check = 12;
console.log(number_to_check > 10 && number_to_check < 20);

// 46. Check if a number is less than 5 or greater than 50.

console.log(number_to_check < 5 || number_to_check > 50);

// 47. Store a complex logical expression result in a variable.

let complexResult = (5 <= 10 && 5>= 2);
console.log(complexResult);

// 48. Change one value and observe how the logical result changes.
complexResult = (5 <= 106 && 5>= 342);
console.log(complexResult);

// 49. Write a condition that always returns `true`.

console.log( true);
// 50. Write a condition that always returns `false`.
console.log(false);

// 51. Create a variable and increase its value by 1 using `+`.
let increaseValue = 1;
increaseValue++;
console.log(increaseValue);

// 52. Increase the same variable using `+=`.
increaseValue += 5;  // increased by 5
console.log(increaseValue);

// 53. Decrease a variable using `-=` operator.

increaseValue -= 4; // decreased by 4
console.log(increaseValue);

// 54. Multiply a variable’s value by 2 using `*=`.

increaseValue *= 2;
console.log(increaseValue);

// 55. Divide a variable’s value by 2 using `/=`.
increaseValue /= 2 ;
console.log(increaseValue);

// 56. Use the increment operator and log the result.
increaseValue++;
console.log(increaseValue);

// 57. Use the decrement operator and log the result.
increaseValue--;
console.log(increaseValue);

// 58. Compare pre-increment and post-increment outputs.

let valuePre = 1;
++valuePre;
console.log(valuePre);  // first add value then print

let valuepost = 1;
valuepost++;
console.log(valuepost);  // first print value and then add
// 59. Store the result of post-increment in another variable.

let valueofpost = valuepost;
console.log(valueofpost);
// 60. Explain the difference using comments.

// i dont see any difference i think beacuse of the examples i had created but, i know pre increment first increase the value then print it, where as post increament first print the value then increase the value and then we get the new value

// 61. Create a variable with value `"10"` and convert it to a number.

let strTOnum = "10";
let cvrtNum = Number(strTOnum);
console.log(cvrtNum, "type : ", typeof(cvrtNum));  // converted to number

// 62. Create a variable with value `10` and convert it to a string.

let numTostr = 10;
let cvrtSTR = String(numTostr);
console.log(cvrtSTR, "type : ", typeof(cvrtSTR));  // converted to string

// 63. Convert a boolean value to a number.
let boLTOnum = true;
let cverTonum = Number(boLTOnum);

console.log(cverTonum, "type of : ", typeof(cverTonum));

// 64. Convert a number to a boolean.
let numbertoboolean = 23;
let bolleanconvert = Boolean(numbertoboolean);
console.log(bolleanconvert, "type of : ", typeof(bolleanconvert));

// 65. Convert an empty string to a boolean.

let empty_str = "";
let boolstr = Boolean(empty_str);
console.log(boolstr, "type of : ", typeof(boolstr));

// 66. Convert `0` to a boolean.
let Zero = 0;
let ZeroTobolean = Boolean(Zero);
console.log(ZeroTobolean," type of : ", typeof(ZeroTobolean));

// 67. Convert `"0"` to a boolean.

let strzero = "0";
let strZeroToBolean = Boolean(strzero);
console.log(strZeroToBolean, "type of : ", typeof(strZeroToBolean));

// 68. Add two variables after converting both to numbers.

let strvalue1 = "10";
let strvalue2 = "20";

let convertnum = Number(strvalue1);
let convertnum2 = Number(strvalue2);

console.log(convertnum + convertnum2); // we get 30 

// 69. Concatenate two variables after converting both to strings.

let numval = 23;
let numval2 = 56;

let concat1 = String(numval);
let concat2 =  String(numval2);

console.log(concat1 + concat2);

// 70. Predict the output before type conversion.

//  it will not add it will just concate which means joining i guess

// 71. Create a variable that stores the result of `5 + true`.

let result = 5 + true;
console.log(result); // we get 6, because true is 1 

// 72. Create a variable that stores the result of `5 + false`.

let result2 = 5 + false;
console.log(result2);   // fase is taken a 0, so 5 + 0 = 5 only

// 73. Create a variable that stores the result of `5 - true`.

let result3 = 5 - true;
console.log(result3);  // true is taken a 1, so 5 - 1 is 4

// 74. Create a variable that stores the result of `5 * false`.

let result4 =  5 * false;
console.log(result4);  // we got 0, beacuase false is 0, so 5 * 0 is 0

// 75. Explain why the above results occur in comments.

// it all happens because true is 1, and flase is 0, so all the operation are performed based on this logic

// 76. Compare `null` and `0` using `==`.

console.log(null == 0);  // we get false

// 77. Compare `null` and `0` using `===`.

console.log(null === 0);  // we get again false

// 78. Compare `undefined` and `null` using `==`.

console.log(undefined == null);  // we get true

// 79. Compare `undefined` and `null` using `===`.

console.log(undefined === null);

// 80. Predict all outputs before running them.

// all the output are written but i am not getting why the output is like that, explain me ok this part

// 81. Declare multiple variables in one line.

let aa,bb,cc,dd;

// 82. Assign the same value to multiple variables in one line.
aa = 1,bb = 1,cc = 1, dd = 1; 

// 83. Create variables with meaningful names for user data.
let userdata;
let userName;
let userAge;
let userDOB;

// 84. Rename poorly named variables to better ones.

let enteryourage;
let yourAge; 

// 85. Identify which variable names are invalid and why.



// variables names starting with number or any special keywords are invalid and the reason in simple js dont allow it and also we cant use reserve keywords as our variable names

// 86. Write code that causes a `NaN` result.

console.log(Infinity / Infinity);   // it gives NaN , I DONT KNOW EXPLAIN ME properly this concpet 

// 87. Check if a value is `NaN`.

let checkvalue = (Infinity / Infinity);
console.log(checkvalue);

// 88. Perform an operation that results in `Infinity`.
console.log(10/0);


// 89. Check the type of `Infinity`.

console.log(typeof(Infinity)); // gives number

// 90. Handle a division by zero case.
console.log(34/0);  // we will get infinity only, explain me this also

// 91. Create a variable and log its value before and after updating it.

// console.log(valuebeforlog); // says not defines
let valuebeforlog = 23;

// 92. Store an expression result in a variable and reuse it.
// i dont get this question 

// 93. Change variable values step by step and log each time.
let myval ; // declaration of a variable 
console.log(myval);
myval = 12; // initilization of the value , we gives value 12 to out variable myval
console.log(myval);

// 94. Predict the final value of a variable after multiple operations.

// which variable are you taking about

// 95. Write code where order of operations matters.

console.log((5*2) + (5*3)/2);


// 96. Break a complex expression into multiple variables.
console.log((5*2) + (5*3)/2);
// breaking this 
// first 5 * 2 will be performed, which will give 10
// secong 5 * 3 will be performed, which will give 15
// third = 10 + 15 will be take place which give 25
// fourth = 25 will be divided by 2 and we get 17.5


// 97. Refactor repeated values into variables.

// what dont get it

// 98. Find and fix a logical mistake in an expression.

// which quesitons

// 99. Write a small program that calculates total price using variables.

let price1 = 5434;
let price2 = 564;
let price3  =234;
let totalprice; 
totalprice = price1+ price2 + price3;
console.log(totalprice);

// 100. Write a small program that compares two users’ ages and stores the result.

let user1age = 19;
let user2age = 18;
let eldest = (user1age > user2age)
console.log(eldest);
