// ### 21.
// Ek function banao jo **array** le aur bataye ki usmein **given value present hai ya nahi**.
console.log("solution 21");
let myvalue = 4;
function myarr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentVlu = arr[i];

    if (currentVlu === myvalue) {
      return "present";
    }
  }
  return "not present";
}
let checkArr = myarr([3, 5, 7, 8, 4, 6]);
console.log(checkArr);

// ### 22.
// Ek function likho jo **string** le aur count kare ki usmein **kitne vowels** hain.

console.log("solution 22");

function countVowel(str) {
  let vowelCounter = 0;

  for (let i = 0; i < str.length; i++) {
    let currentVlue = str[i];

    if (currentVlue === "a") {
      vowelCounter++;
    } else if (currentVlue === "e") {
      vowelCounter++;
    } else if (currentVlue === "i") {
      vowelCounter++;
    } else if (currentVlue === "o") {
      vowelCounter++;
    } else if (currentVlue === "u") {
      vowelCounter++;
    } else if (currentVlue === "A") {
      vowelCounter++;
    } else if (currentVlue === "E") {
      vowelCounter++;
    } else if (currentVlue === "I") {
      vowelCounter++;
    } else if (currentVlue === "O") {
      vowelCounter++;
    } else if (currentVlue === "U") {
      vowelCounter++;
    }
  }
  return vowelCounter;
}

let myStr = countVowel("MuninBorah");
console.log(myStr);

// ### 23.
// Ek function banao jo **number** le aur bataye ki wo **prime number** hai ya nahi.
console.log("solution 23");

function prime(num) {
  if (num <= 1) {
    return "not prime";
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "not prime";
    }
  }
  return "prime";
}

let mynum = prime(6);
console.log(mynum);

// ### 24.
// Ek function likho jo **array of numbers** le aur unmein se **maximum value** return kare.
console.log("solution 24");

function maximum(arr) {
  let currentMaximum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let newvalue = arr[i];

    if (newvalue > currentMaximum) {
      currentMaximum = newvalue;
    }
  }
  return currentMaximum;
}

let mymaximum = maximum([2, 3, 4, 58, 934]);
console.log(mymaximum);

// ### 25.
// Ek function banao jo **string** le aur check kare ki wo **palindrome** hai ya nahi.
// (Example: `"madam"`)
console.log("solution 25");

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return "Not palindrome";
    }
    left++;
    right--;
  }
  return "palindrome";
}
let myplaindrome = palindrome("madam");
console.log(myplaindrome);

// ### 26.
// Ek function likho jo **array** le aur uska **length bina `.length` use kiye** return kare.

console.log("solution 26");

function lengthARR (arr){
    let counter = 0;
for(let i = 0; arr[i] !== undefined; i++){
    counter++;
}
return counter;
}
let myarrlength = lengthARR([1,2,3,4,5,6,7,8,3,5,67,8,56,8,9]);
console.log(myarrlength);
// ### 27.
// Ek function banao jo **number** le aur usko **binary** mein convert karke return kare.

console.log("solution 27");

function binary(num) {

  if (num === 0) {
    return "0";
  }

  let result = "";

  while (num > 0) {
    if (num % 2 === 0) {
      result = "0" + result;
    } else {
      result = "1" + result;
    }

    num = Math.floor(num / 2);
  }

  return result;
}

let myBinary = binary(10);
console.log(myBinary);

// ### 28.
// Ek function likho jo **array of numbers** le aur sirf **odd numbers ka sum** return kare.
console.log("solution 28");

function oddsum(arr){
    let totalSum = 0;

for(let i = 1; i<arr.length; i++){
    let mynum = arr[i];

    if(mynum % 2 !== 0){
        totalSum = totalSum + mynum;
    }
}
return totalSum;
}
let oddarr = oddsum([1,2,3,4,5,6,7,8,9]);
console.log(oddarr);

// ### 29.
// Ek function banao jo **string** le aur har word ka **first letter capital** kare.


// ### 30.
// Ek function likho jo **array** le aur usko **reverse** karke return kare.

// ---

// ### 31.
// Ek function banao jo **two numbers** aur ek **operator (+, -, *, /)** le aur result return kare.

// ### 32.
// Ek function likho jo **array of numbers** le aur check kare ki **sab numbers positive** hain ya nahi.

// ### 33.
// Ek function banao jo **string** le aur usmein se **spaces remove** karke return kare.

// ### 34.
// Ek function likho jo **array** le aur usmein se **duplicate values hata** de.

// ### 35.
// Ek function banao jo **number** le aur uska **table (1 to 10)** print kare.

// ### 36.
// Ek function likho jo **array of numbers** le aur unko **ascending order** mein return kare.

// ### 37.
// Ek function banao jo **string** le aur usmein **kitne words** hain wo count kare.

// ### 38.
// Ek function likho jo **number** le aur bataye ki wo **perfect square** hai ya nahi.

// ### 39.
// Ek function banao jo **array** le aur **second largest number** return kare.

// ### 40.
// Ek function likho jo **string** le aur har character ke beech **dash (-)** add kare.

// ---

// ### 41.
// Ek function banao jo **number** le aur uska **sum of digits** return kare.

// ### 42.
// Ek function likho jo **array of numbers** le aur unmein se **negative numbers ka count** kare.

// ### 43.
// Ek function banao jo **string** le aur usko **number mein convert** kare.

// ### 44.
// Ek function likho jo **array** le aur check kare ki wo **sorted hai ya nahi**.

// ### 45.
// Ek function banao jo **number** le aur usko **string** mein convert kare.

// ### 46.
// Ek function likho jo **array of strings** le aur unko **single sentence** mein convert kare.

// ### 47.
// Ek function banao jo **number** le aur bataye ki wo **Armstrong number** hai ya nahi.

// ### 48.
// Ek function likho jo **string** le aur usmein se **special characters hata** de.

// ### 49.
// Ek function banao jo **array** le aur **alternate elements** ka naya array return kare.

// ### 50.
// Ek function likho jo **number** le aur **Fibonacci series** generate kare (given length tak).
