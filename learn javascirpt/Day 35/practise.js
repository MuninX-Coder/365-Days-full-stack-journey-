// print number from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("solution 2");
// print number from 10 to 1 using a while loop

let a = 10;
while (a >= 1) {
  console.log(a);
  a--;
}

// print even number from 1 to 20 using a for loop
console.log("solution 3");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// print odd number from 1 to 15 using a while loop
console.log("solution 4");

let b = 1;
while (b <= 15) {
  if (b % 2 !== 0) {
    console.log(b);
  }
  b++;
}

// print the multiplication table of 5(i.e., 5*1 = 5....,  5* 10 = 50)
console.log("solution 5");

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// fine the sum of numbers from 1 to 100 using a loop
console.log("solution 6");

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log(sum);

// print all numbers between 1 to 50 that are divisible by 3
console.log("solution 7");

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// ask the user for a number and print wheather each number from 1 to that number is even or odd

// console.log("solution 8");

// let userinput = prompt("enter your number: ");

// for(let i = 1; i<= userinput; i++){
//     if(i%2 === 0){
//         console.log(`${i} is even`);
//     } else{
//         console.log(`${i} is odd`);
//     }
// }

// count how many numbers between 1 to 100 are divisible by 3 and 5
console.log("solution 9");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

console.log("solution 10");
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 7 === 0) {
    break;
  }
}

console.log("solution 11");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}


console.log("solution 12");

let count = 0;
for(let i = 1; i<= 100; i++){
    if(i%2=== 1){
        count++;
        console.log(i);
    }
    if(count === 5){
        break;
    }
}