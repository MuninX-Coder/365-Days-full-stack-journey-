// 1. Declare a variable name using let and assign your name to it.
let name = "Munin Borah";

// 2. Declare a constant birthYear and assign a number to it.
const bithyear = 2008;

// 3. Try reassigning a const variable. What error do you get?

// const firstvalue = 17;
// firstvalue = 18;
// console.log(firstvalue);

// 4. Declare three variables in one line using let. 

let age = 18, myname = "Munin", classs = 12;

// 5. Declare a variable without assigning a value. What is its value?

let noval; // undefined

// 6. Create a variable using var inside a block {} and access it outside the block.
{
    var insideblock = 19;
}

// console.log(insideblock);


// 7. Create a variable using let inside a block {} and try to access it outside.

{
    let insideblocklet = 18;
}

// console.log(insideblocklet);


// 8. Declare a variable isLoggedIn and assign a boolean value.

let isLoggein = true;

// 9. Declare a variable score and assign null to it.

let score  = null;

// 10. Declare a variable data and assign undefined to it manually.
let data = undefined;

// 11. Use typeof to check the type of a number.

let number  = 18;
// console.log(typeof(number));

// 12. Use typeof to check the type of a string.

let mystring = "MUNIN";
// console.log(typeof(mystring));

// 13. Use typeof on a boolean value.

let mybool  = true;
// console.log(typeof(mybool));


// 14. Use typeof on a null value.
let mynul = null;

// console.log(typeof(mynul));  // we got object


// 15. Use typeof on undefined.

let myundefined = undefined;
// console.log(typeof(myundefined)); // we got undefined


// 16. Store the result of typeof 10 in a variable.

let ten = 10;
let result_ten = (typeof(ten));
// console.log(result_ten);

// 17. Store the result of typeof "10" in a variable.

let strten = "10";
let result_str_10 = (typeof(strten));
// console.log(result_str_10);

// 18 . Compare the type of true and "true".

let compare_true = true;
// console.log(typeof(compare_true));

let compare_str_ture = "true";
// console.log(typeof(compare_str_ture));

// one is boolean and one is string

// 19. Create a variable that holds a BigInt.

let bignumber = 235334554543n;
// console.log(bignumber);

// 20. Check the type of a BigInt.

// console.log(typeof(bignumber));

// 21 Declare two number variables and add them.

let num1 = 34, num2 = 45;
// console.log(num1 + num2);

// 22 Subtract one number variable from another.
let sub1 = 34, sub2 = 56;
// console.log(sub1 - sub2);

// 23. Multiply two numbers and store the result.
let mutiply1 = 34, mutiply2 = 6, result;
result = mutiply1 * mutiply2;
// console.log(result);


// 24. Divide two numbers and store the result.

let div1 = 45, div2 = 34, divreslt;

divreslt = div1/div2;
// console.log(divreslt);

// 25. Use the modulus operator % to find the remainder.

let rem1 = 456, rem2 = 4, remainder;
remainder = rem1 % rem2;
// console.log(remainder);

// 26. Increment a variable using ++.

let currnt = 10;
currnt++;
// console.log(currnt);

// 27. Decrement a variable using --.
let subcurrent = 10;
subcurrent--;
// console.log(subcurrent);

// 28. Use += to add a value to an existing variable.

let addvalue3  = 10;
addvalue3+=3;
// console.log(addvalue3);

// 29. Use *= on a variable.

let addmul2 = 10;
addmul2*=2;
// console.log(addmul2);

// 30. Predict the output of let x = 10; x += 5;.

let x = 10;
x+=5;
// console.log(x);

// 31. Compare two numbers using ==.
let com1 = 23, com2 = 23;
// console.log(com1 == com2);

// 32. Compare two numbers using ===.
// console.log(com1 === com2);

// 33. Compare a number and a string using ==.

let strcom = "hi";
let numcom = 5;
// console.log(strcom == numcom);

// 34. Compare a number and a string using ===.

let numcomer = 45;
let strcomare = "hi";
// console.log((numcom === strcomare));

// 35. Compare null and undefined using ==.
let compare_Null = null;
let compare_undefined = undefined;
// console.log((compare_Null == compare_undefined)); // getting true
 

// 36. Compare null and undefined using ===.
// console.log((compare_Null === compare_undefined)); // getting false 

// 37. Compare false and 0 using ==.

// console.log ((false == 0)); // give true


// 38. Compare false and 0 using ===.

// console.log((false === 0)); // give false

// 39. Store the result of a comparison in a variable.

let result_of_comparison = (false === 0);
// console.log(result_of_comparison);

// 40. Predict the output of 5 > 3 && 3 > 1.

let predict = (5>3 && 3>1);
// console.log(predict);

// 41. Use the logical OR || operator between two boolean values.

let logical = (true || false);
// console.log(logical);


// 42. Use the logical AND && operator between two expressions.
let expression = ("val" && 5);
// console.log(expression);

// 43. Use the logical NOT ! operator on a boolean.
let not = (!false);
// console.log(not);

// 44. Predict the result of !true.

let trr = !true;
// console.log(trr);

// 45. Predict the result of !0.

let tt = !0;
// console.log(tt);

// 46. Combine comparison and logical operators in one expression.
let combine = (10 === 10 && 20 === 20);
// console.log(combine);

// 47 Store the result of a logical expression in a variable. 

let store = ((5 > 10 && 10 <20));
// console.log(store);

// 48. Check if a number is greater than 10 and less than 20.

let numbergreatless = 15;
let check = (numbergreatless > 10 && numbergreatless <20);
// console.log(check);

// 49. Write an expression that returns true if a value is null or undefined.

let valueex = null || undefined;
// console.log((valueex == null && valueex == undefined) = true);

// 50. Predict the output of true && false || true.

let priout = true && false || true;
// console.log(priout);


// 51. Convert a string "123" to a number using Number().

let convetstring = "123";
// console.log(Number(convetstring));

// 52. Convert a string "123abc" to a number. What do you get?

let covernewstr = "123abc";
// console.log(Number(covernewstr)); // we got NaN - not a number

// 53. Convert a number to a string.
let covnumber = 18;
// console.log(String(covnumber));

// 54. Use Boolean() on 0.

// console.log(Boolean(0)); // false

// 55. Use Boolean() on 1.
// console.log(Boolean(1));   // true


// 56. Use Boolean() on an empty string.
// console.log(Boolean("")); // false

// 57. Use Boolean() on a non-empty string.
// console.log(Boolean("hi"));  // true


// 58. Predict the result of Number(null).

// console.log(Number(null));  // 0


// 59 . Predict the result of Number(undefined).

// console.log(Number(undefined));  // NaN not a number


// 60 Predict the result of String(false).

// console.log(String(false));  // got false


// 61. Declare a variable and assign it a value using implicit type coercion.

let impicit = (5 + "5");
// console.log(impicit);  // converting 5 to string and then doing concatnation "55"

//62 Predict the result of "5" + 3.

let pere = "5" + 3;
// console.log(pere);

// 63. Predict the result of "5" - 3.

let newpere = "5" - 3;
// console.log(newpere); // string 5 is converted to number 5

//64.  Predict the result of "5" * 2.

let newwpere = "5 " * 2 ;
// console.log(newwpere);  // string 5 is converted to number 5

// 65. Predict the result of "10" / 2.
let newwwpere = "10" / 2;
// console.log(newwwpere);  // string 10 is converted to number 10

// 66. Predict the result of true + 1.

let predictrest = true +1
// console.log(predictrest); // we get 2, beacuse true is also considered as 1

// 67. Predict the result of false + 1.

let predictrestt = false + 1;
// console.log(predictrestt);  // we got 1 beacuse false is seen as 0 and so 0 + 1 = 1

//68.  Predict the result of null + 1.
let predictresttt = null + 1;
// console.log(predictresttt);  // we got 1, i think null is seen as 0

// 69. Predict the result of undefined + 1.
let predictrestttt = undefined + 1;
// console.log(predictrestttt);  // we got nan , but why , undefined is seen as a string and when we tyr to add a str with number that we got nan, i think so


//70 Explain the output of "" == 0.

let output = ("" == 0); // got true but why
// console.log(output);

// 71 Use the ternary operator to return "Adult" if age is 18 or more.
let adultage = 24;
// let isadult = adultage  >= 18 ? console.log("adult") : console.log("not adult");
// console.log(isadult); 

// 72 Use the ternary operator to return "Even" or "Odd" based on a number.
let evennumber = 4234;
// let iseven = evennumber % 2 === 0 ? console.log("even number") : console.log("odd number");
// console.log(iseven);  why getting undefined also

//73  Store the result of a ternary operation in a variable.
// let ter = 18 > 12 ? console.log("yes") : console.log("Not");
// console.log(ter);

// 74 Predict the output of 10 > 5 ? "Yes" : "No".
// 18 > 5 ? console.log("yes") : console.log("NO");



// 75 Predict the output of 0 ? "True" : "False".
// 0 === 1 ? console.log("true"): console.log("false");

// 76 Declare a variable and assign it the result of multiple arithmetic operations.
let mutiplevalue = (5 + 6) + (43-56) + (34*5) + (456/5) + (3544%34);
// console.log(mutiplevalue);

// 77 Use parentheses to change the result of an arithmetic expression.
let forceparen = (5 + 10) * 5;
// console.log(forceparen);
let withforce = 5 + 10 * 5;
// console.log(withforce);


// 78 Predict the output of 2 + 3 * 4.

let whatisoutput = 2 + 3 * 4;
// console.log(whatisoutput);

// 79 Predict the output of (2 + 3) * 4.
let whatisanotheroutput = (2+3) * 4;
// console.log(whatisanotheroutput);

//80  Store a comparison result inside another comparison.

let firstcompareresult = (1 === 1);
let anothercomparison = firstcompareresult;
// console.log(anothercomparison);



//81 Create a variable that holds NaN.
let varibaleholdnan = NaN;
// console.log(varibaleholdnan);

// 82 Check if a value is NaN using Number.isNaN().
// console.log(Number.isNaN(varibaleholdnan));  true

// 83 Predict the output of typeof NaN.
// console.log(typeof(NaN));  // number

// 84 Compare NaN with NaN.
let comparenanwithnan = (NaN === NaN);
// console.log(comparenanwithnan);  // gets false

// 85 Explain why NaN === NaN is false.
// - i 

//86 Declare a variable using var, redeclare it, and reassign it.
var firstval = 23;
var firstval = 45;
// console.log(firstval)

//87 Declare a variable using let, reassign it, but don’t redeclare it.
let reassing = 45;
reassing =56;
// console.log(reassing);

// 88 Try redeclaring a let variable in the same scope.
{
    let redeclare = 45;
    // let redeclare = 45; // got error only i can reassing it
}

// 89 Try redeclaring a var variable in the same scope.
{
    var redeclare = 4;
    var redeclare =45;
    // console.log(redeclare);
}

// 90 Explain the difference you observe.
// - the difference is simple, when we declare variable usign var , its a function score and and its doenst respect block {} how ever we can redeclare and reassing in var which is the problems so to solve this we use let and cosnt , however const is used for constant

// 91 Declare variables of all primitive data types.
let primitivestring = "Munin Borah";
let primitvenumber = 18;
let primitiveboolean = true;
let primitvenull = null;
let primitiveundefined = undefined;


//92  Use typeof on each primitive type.
// console.log(typeof(primitivestring));
// console.log(typeof(primitvenumber));
// console.log(typeof(primitiveboolean));
// console.log(typeof(primitvenull));
// console.log(typeof(primitiveundefined));

//93  Store results of multiple typeof checks in variables.

// console.log(typeof(primitivestring));
// console.log(typeof(primitvenumber));
// console.log(typeof(primitiveboolean));
// console.log(typeof(primitvenull));
// console.log(typeof(primitiveundefined));

//94  Compare values of different types and explain the result.
// string - used for sentences basically group of letter 
// number - used for numbers
// boolean - gives true and false 
// null and undefined

//95  Predict the output of a mixed-type expression.
// in js when we compare mixed type expression we get different result eg : "5" + 5 will give 55 as it is doing contatination and basically making the number 5 to a string , where as "5" - 5 gives 0 beacuse the string 5 is converted to number 5 , and there are many more like this


//96  Write an expression that results in Infinity.
// console.log(1/0);

//97 Write an expression that results in -Infinity.
// console.log(Number.NEGATIVE_INFINITY);

//98 Check the type of Infinity.
// console.log(typeof(1/0)); // gives number

//99 Compare Infinity with a large number.
// console.log((1/0)==(4534565346545n));  false 

//100 Predict the output of typeof (1 + "1").
// console.log(typeof(1 + "1"));  // gives string as number 1 is converted as string and then they were concinate and become 11 string, i hope so