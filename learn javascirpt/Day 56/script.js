// 21. Given an array of; numbers, find the **index of the first occurrence** of a given number. If not found, return `-1`.
console.log("solution 21");

let givenARR = [12, 3, 4, 6, 78, 0, 1];
let givenNum = 1;
let result = -1;

for (let i = 0; i < givenARR.length; i++) {
  let value = givenARR[i];

  if (value === givenNum) {
    result = i;
    break;
  }
}
console.log(result);
// 22. Given an array of strings, check if **a specific string exists** in the array.
console.log("solution 22");

let givenString = ["munin", "pokemon", "rahul", "ravi"];
let targetString = "RAHUL";
let specificString = false;

for (let i = 0; i < givenString.length; i++) {
  let value = givenString[i];
  let converLower = value.toLowerCase();

  if (converLower === targetString.toLowerCase()) {
    specificString = true;
    break;
  }
}
console.log(specificString);
// 23. You are given an array of numbers. Sort the array in **ascending order without using `sort()`**.
console.log("solution 23");

let num = [3,6,8,4,6,2,4,1,9];
let currentSmall = num[0];
let temp = 0;
let ascendingResult = [temp];

for(let i = 1; i<num.length; i++){
    let value = num[i];

    if(value < currentSmall){
        currentSmall = value;
        ascendingResult.push(currentSmall);
        temp++;
    }

}
console.log(ascendingResult);
