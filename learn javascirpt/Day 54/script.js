// ### Array Practice Questions (JavaScript)

const { connectDataConnectEmulator } = require("firebase/data-connect");

// 1. You are given an array of numbers. Create a new array that contains **only the numbers greater than 10**, in the **same order** as the original array.
console.log("solution 1");

let num1 = [3, 45, 65, 34, 6, 7, 8, 56, 98, 34, 87, 45];
let newarr = [];
let index = 0;
for (let i = 0; i < num1.length; i++) {
  let current = num1[i];

  if (current > 10) {
    newarr[index] = current;
    index++;
  }
}
console.log(newarr);
// 2. Given an array of numbers, calculate the **sum of all elements** without using built-in sum helpers.
console.log("solution 2");
let num2 = [3, 45, 65, 34, 6, 7, 8, 56, 98, 34, 87, 45];

let sum = 0;

for (let i = 0; i < num2.length; i++) {
  let current = num2[i];
  sum = sum + current;
}
console.log(sum);

// 3. Given an array of numbers, find the **largest number** in the array without using `Math.max`.
console.log("solution 3");

let num3 = [23, 4, 6, 43, 7, 5, 78, 45, 6, 45, 7, 45, 67, 34, 109];
let currentLargest = num3[0];

for (let i = 1; i < num3.length; i++) {
  let newLargest = num3[i];

  if (newLargest > currentLargest) {
    currentLargest = newLargest;
  }
}
console.log(currentLargest);

// 4. Given an array of numbers, find the **smallest number** in the array without using `Math.min`.
console.log("solution 4");

let num4 = [23, 45, 67, 4, 7, 45, 2, 78, 45];
let currentSmallest = num4[0];

for (let i = 1; i < num4.length; i++) {
  let newSmallest = num4[i];

  if (newSmallest < currentSmallest) {
    currentSmallest = newSmallest;
  }
}
console.log(currentSmallest);
// 5. You are given an array of numbers. Create a new array where **each number is doubled**.
console.log("solution 5");

let num5 = [2, 3, 4, 5, 6, 7, 8, 9];
let doubled = [];
let doubleIndex = 0;

for (let i = 0; i < num5.length; i++) {
  let newval = num5[i];
  doubled[doubleIndex] = newval * 2;
  doubleIndex++;
}

console.log(doubled);
// 6. Given an array of numbers, count **how many numbers are even** and **how many are odd**.
console.log("solution 6");

let num6 = [
  23, 4, 5, 3, 56, 34, 56, 87, 45, 3, 54, 76, 46, 34, 45, 76, 4, 56, 87,
];
let evenCounter = 0;
let oddCounter = 0;

for (let i = 0; i < num6.length; i++) {
  let value = num6[i];
  if (value % 2 === 0) {
    evenCounter++;
  } else if (value % 2 !== 0) {
    oddCounter++;
  }
}
console.log(evenCounter);
console.log(oddCounter);

// 7. Given an array of strings, create a new array that contains **only strings with length greater than 5**.
console.log("solution 7");

let myStr = ["Munin", "pokemon", "Bestcoder", "programmar", "I am the best"];
let GreaterString = [];

for (let i = 0; i < myStr.length; i++) {
  let currentStr = myStr[i];

  if (currentStr.length > 5) {
    GreaterString.push(currentStr);
  }
}

console.log(GreaterString);
// 8. You are given an array of numbers. Reverse the array **without using `reverse()`**.
console.log("solution 8");

let num8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversed = [];
let reveseIndex = 0;

for (let i = num8.length - 1; i >= 0; i--) {
  reversed[reveseIndex] = num8[i];
  reveseIndex++;
}
console.log(reversed);

// 9. Given an array of numbers, check if the array is **sorted in ascending order**. Return `true` or `false`.
console.log("solution 9");

let num9 = [1, 2, 3, 4, 5, 2, 7, 8];
let firstIndex = 0;
let secondIndex = 1;

let isSorted = true;

for (let i = 0; i < num9.length - 1; i++) {
  let firstValue = num9[firstIndex];
  let secondValue = num9[secondIndex];
  if (firstValue > secondValue) {
    isSorted = false;
  } else {
    firstIndex++;
    secondIndex++;
  }
}
console.log(isSorted);
// 10. Given an array of numbers, create a new array that contains the **square of each number**.
console.log("solution 10");

let num10 = [2,3,4,5,6,7];
let square = [];

for(let i = 0; i<num10.length; i++){
    let value = num10[i];
    square.push(value * value);
}
console.log(square);
// 11. You are given an array of numbers. Find the **first number greater than 50**. If none exists, return `null`.
console.log("solution 11");

let num11 = [2,3,4,60,7,8];
let first50 = null;

for(let i = 0; i<num11.length; i++){
    let value = num11[i];

    if(value > 50){
        first50 = value;
        break;
    } 
}
console.log(first50);
// 12. Given an array of strings, convert **all strings to uppercase** and store them in a new array.
console.log("solution 12");

let uperStr = ["munin", "pokemon", "henry", "chairzard"];
let indxuper = 0;
let newuperSTR = [];


for(let i = 0; i<uperStr.length; i++){
    let value = uperStr[i];
 newuperSTR.push(value.toUpperCase());

}
console.log(newuperSTR);

// 13. Given an array of numbers, remove **all duplicate values** and return a new array with only unique numbers.
// console.log("solution 13");
// let duplicateArray = [1,2,3,4,5,6,2,3,7,7,4,89,45];
// let uniqueNumber = [];

// for(let i = 0; i<duplicateArray.length; i++){
//     let value = duplicateArray[i];
    
// }
// console.log(uniqueNumber);
// 14. You are given two arrays of numbers. Create a new array that contains **all elements from both arrays**.

// 15. Given an array of numbers, count how many times a **specific number appears** in the array.

// 16. Given an array of numbers, find the **second largest number** in the array.

// 17. You are given an array of numbers. Create a new array that contains numbers **only at even indexes**.

// 18. Given an array of strings, find the **longest string** in the array.

// 19. Given an array of numbers, check whether **all elements are positive numbers**.

// 20. You are given an array of numbers. Create a new array where **negative numbers are replaced with 0**.

// 21. Given an array of numbers, find the **index of the first occurrence** of a given number. If not found, return `-1`.

// 22. Given an array of strings, check if **a specific string exists** in the array.

// 23. You are given an array of numbers. Sort the array in **ascending order without using `sort()`**.

// 24. Given an array of numbers, calculate the **average value** of the array elements.

// 25. Given an array of numbers, move **all zeros to the end** while keeping the order of other elements the same.

// 26. You are given an array of strings. Create a single string by **joining all elements with a space** in between.

// 27. Given an array of numbers, find the **difference between the largest and smallest number**.

// 28. You are given an array of numbers. Create a new array that contains **only unique values that appear exactly once**.

// 29. Given an array of strings, count how many strings **start with a vowel**.

// 30. You are given an array of numbers. Check if the array is a **palindrome** (reads the same forward and backward).

// 31. Given an array of numbers, split it into **two arrays**: one with even numbers and one with odd numbers.

// 32. You are given an array of strings. Remove **all empty strings (`""`)** from the array.

// 33. Given an array of numbers, rotate the array **one step to the right**.

// 34. You are given an array of numbers. Find **all pairs of numbers whose sum is equal to a given value**.

// 35. Given an array of strings, sort them **by length** from shortest to longest.

// 36. You are given an array of numbers. Create a new array where each element is the **running sum** up to that index.

// 37. Given an array of numbers, check if **any number appears more than once**.

// 38. You are given an array of strings. Capitalize **only the first letter** of each string.

// 39. Given an array of numbers, remove **only the first occurrence** of a given number.

// 40. You are given an array of numbers. Find the **maximum product of any two numbers** in the array.

// 41. Given an array of strings, count the **frequency of each string** and store the result in an object.

// 42. You are given an array of numbers. Find the **missing number** from a sequence of numbers from 1 to N.

// 43. Given an array of numbers, rearrange the array so that **positive numbers come first**, followed by negative numbers.

// 44. You are given an array of strings. Check if **all strings are unique**.

// 45. Given an array of numbers, find the **longest continuous increasing subarray**.

// 46. You are given an array of numbers. Replace each element with the **number of elements greater than it** in the array.

// 47. Given an array of strings, group strings by their **length**.

// 48. You are given an array of numbers. Find the **majority element** (an element that appears more than half the time).

// 49. Given an array of numbers, create a new array where each element is the **product of all other elements except itself**.

// 50. You are given an array of numbers. Determine whether the array can be **split into two parts with equal sum**.
