

// ## 📦 ARRAY PRACTICE QUESTIONS (1–50)

// ### 1

// Ek array banao jisme **5 numbers ho**
// aur **saare elements console me print karo** using loop.

// let num = [1,2,3,4,5];

// num.forEach(function(val){
//     console.log(val);
// })


// ---

// ### 2

// Ek array diya hai,
// **uska length print karo** aur explain karo kaunsa index last element ka hai.

// let myarray = [1,2,3,4,5,6,7];
//  let Lastindex = myarray.length - 1;
// console.log(Lastindex);



// ---

// ### 3

// Ek array ke **first aur last element** ko print karo.
// 👉 Direct index access allowed hai.

// let myarr = [1,2,3,4,5,6];
// console.log("first index", myarr[0]);
// console.log("last index", myarr[myarr.length - 1]);
// ---

// ### 4

// Ek array ke **saare even numbers print karo**.
// 👉 Loop + `if` compulsory.

// let even = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// even.forEach(function(val){
//     if(val % 2 === 0){
//         console.log("even number : ", val);
//     }
// });

// ---

// ### 5

// Ek array ke **saare odd numbers ka sum nikalo**
// aur final sum print karo.

// let odd =  [1,2,3,4,5,6,7,8,9,10];

// let oddsum = 0;

// odd.forEach(function (val) {
//     if(val % 2 != 0){
// oddsum = oddsum + val;
//     }
// });

// console.log(oddsum);

// ---

// ### 6

// Ek array me **kitne elements positive hain aur kitne negative**,
// dono count print karo.

// let pos_nev = [1,-3,45,-45,-3,56,-34,6,-67,34,-33,6,4,-54,-34,56,7,];

// let positive = 0;
// let negative = 0;
// pos_nev.forEach(function(val){
//     if(val >0){
// positive++;
//     } else{
//         negative++;
//     }
// })
// console.log("total positive : ", positive);
// console.log("total negative :", negative);


// ---

// ### 7

// Ek array me se **largest number find karo**
// 👉 `Math.max` use nahi karna
// 👉 Comparison logic khud likho.


