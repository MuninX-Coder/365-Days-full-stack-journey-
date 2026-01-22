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
console.log("solution 48");

function Special(str) {
  let char = "";

  for (let i = 0; i < str.length; i++) {
    let myChar = str[i];

    if (
      (myChar >= "a" && myChar <= "z") ||
      (myChar >= "A" && myChar <= "Z") ||
      (myChar >= "0" && myChar <= "9")
    ) {
      char = char + myChar;
    } else {
      continue;
    }
  }
  return char;
}

let mystr = Special("munin$%23*&is the best");
console.log(mystr);
// ### 49.
// Ek function banao jo **array** le aur **alternate elements** ka naya array return kare.
console.log("solution 49");

function alternate(arr) {
  let alternateArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      alternateArray.push(arr[i]);
    }
  }
  return alternateArray;
}
let myarr = alternate([12, 2, 34, 56, 7, 4]);
console.log(myarr);

// ### 50.
// Ek function likho jo **number** le aur **Fibonacci series** generate kare (given length tak).
console.log("solution 50");

function Fibonacci(num) {
  let storingFibonacchi = [0, 1];
  if (num <= 0) return [];
  else if (num === 1) return [1];
  else if (num === 2) return storingFibonacchi;

  for (let i = 2; storingFibonacchi.length < num; i++) {
    let last = storingFibonacchi[storingFibonacchi.length - 1];
    let secondLast = storingFibonacchi[storingFibonacchi.length - 2];
    let next = last + secondLast;
    storingFibonacchi.push(next);
  }
  return storingFibonacchi;
}
let myseries = Fibonacci(10);
console.log(myseries);
