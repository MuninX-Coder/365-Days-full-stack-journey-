// 13. Given an array of numbers, remove **all duplicate values** and return a new array with only unique numbers.
console.log("solution 13");
let duplicateArray = [1, 2, 3, 4, 5, 6, 2, 3, 7, 7, 4, 89, 45];
let uniqueNumber = [];

for (let i = 0; i < duplicateArray.length; i++) {
  let value = duplicateArray[i];
  let found = false;

  for (let j = 0; j < uniqueNumber.length; j++) {
    if (uniqueNumber[j] === value) {
      found = true;
      break;
    }
  }
  if (found === false) {
    uniqueNumber.push(value);
  }
}
console.log(uniqueNumber);
// 14. You are given two arrays of numbers. Create a new array that contains **all elements from both arrays**.
console.log("solution 14");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let final = [];

for (let i = 0; i < arr1.length; i++) {
  final.push(arr1[i]);
}
for (let j = 0; j < arr2.length; j++) {
  final.push(arr2[j]);
}
console.log(final);
// 15. Given an array of numbers, count how many times a **specific number appears** in the array.
console.log("solution 15");

let specific = [1, 2, 3, 2, 2, 4, 5, 2, 56, 2, 67, 2];
let specificCounter = 0;

for (let i = 0; i < specific.length; i++) {
  if (specific[i] === 2) {
    specificCounter++;
  }
}
console.log(specificCounter);
// 16. Given an array of numbers, find the **second largest number** in the array.
console.log("solution 16");

let largestArr = [2, 45, 3, 67, 78, 43];
let firstLargest = largestArr[0];
let secondLargest = null;

for (let i = 1; i < largestArr.length; i++) {
  let current = largestArr[i];

  if (current > firstLargest) {
    secondLargest = firstLargest;
    firstLargest = current;
  } else if (
    current < firstLargest &&
    (secondLargest === null || current > secondLargest)
  ) {
    secondLargest = current;
  }
}

console.log(secondLargest);
// 17. You are given an array of numbers. Create a new array that contains numbers **only at even indexes**.
console.log("solution 17");

let givenARR = [1,2,3,4,5,6];
console.log(givenARR);
let indexCounter = 0;
let evenIndex = [indexCounter];

for(let i = 1; i<givenARR.length; i++){
  indexCounter+=2;
   evenIndex.push(givenARR[i]);
}
console.log(evenIndex);

// 18. Given an array of strings, find the **longest string** in the array.
console.log("solution 18");

let longestString = ["munin", "ravi", "shuvam","captain ameraica" , "rejesh", "pokemon"];
let currentLontest = longestString[0];
let longest = null;

for(let i = 1; i<longestString.length; i++){
    let value = longestString[i];

    if(value.length > currentLontest.length){
       currentLontest = value;
    }
    longest = currentLontest;
}
console.log(longest);
// 19. Given an array of numbers, check whether **all elements are positive numbers**.
console.log("solution 19");

let findPositive = [2,3,-4,65,-3,67,-4,34,-56,-34,-78,-23,6];
let postive = [];

for(let i = 0; i<findPositive.length; i++){
    let value = findPositive[i];

    if(value > 0){
        postive.push(value);
    }
}
console.log(postive);
// 20. You are given an array of numbers. Create a new array where **negative numbers are replaced with 0**.
console.log("solution 20");

let replaceNegative = [1,23,-23,-34,-56,34,5,-65,7,-76];
let replaceZer = [];

for(let i = 0; i<replaceNegative.length; i++){
    let value = replaceNegative[i];

   
}
console.log(replaceZer);

