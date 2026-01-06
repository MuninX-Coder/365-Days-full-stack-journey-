// // create a array with 3 fruits and print the second fruit

// let fruites = ["apple", "banana", "orange"];
// console.log(fruites[1]);

// // add "mango" at the end and "pineapple" at the beginning fo this array 

// fruites.unshift("pineapple");
// fruites.push("Mango");


// // remove the last item from this array using a method
// let number = [1,2,3,4];

// console.log(number.pop());

// insert "red " and "blue" at index 1 in this array

// let color = ["green", "yellow"];
// color.splice(1, 0, "red", "blue");

// extract only the middle 3 elements form this array

// let items = [1,2,3,4,5,6];
//  let newarr = items.slice(1,4);
//  console.log(newarr);


// sort this array alphabetically and then reverse it
// let names = ["Zara", "Arjun", "Mira", "Bhavya"];

// let sortarr = names.sort(function(a,b){
// return a - b ;
// });

// sortarr.reverse();
// console.log(sortarr);

// use .map() to square each number 
// let makesquare = [1,2,3,4];

// let newarrwithsqure = makesquare.map(function(val){
//     return val*val;
// });

// console.log(newarrwithsqure);

// use .filter () to keep numbers greater than 10

// let above10 = [1,243,56,3,3,56,7,3,8,4,34,76,67];

// let arrabove10 = above10.filter(function(val){
//    return val > 10;
// });

// console.log(arrabove10);


// use .reduce() to find the sum of this array

// let sum = [2,45,56,34,6,234,65,54];

// let ansofsum = sum.reduce(function(valueofadd, val){
//     return valueofadd + val ;
// }, 0);

// console.log(ansofsum);

// use .find() to get the first number less than 10

// let arr = [12,15,3,8,20];

// let lessthan10 = arr.find(function(val){
//     return val < 10;
// })
// console.log(lessthan10);


// use .some to check if any student has scored below 35
// let score = [45,65,34,67,34,78];

// let below35 = score.some(function(val){
//     return val <  35;
// });

// console.log(below35);

// use .every() to check if all numbers are even 
//  let even = [2,4,6,8,10];

//  let iseven = even.every(function(val){
//     return val%2 === 0;
//  })
//  console.log(iseven);

// desturcture this array to get firstname and lastname

// let fullname = ["Munin", "Borah"];

// let [firstname,lastname] = fullname;

// console.log(firstname);
// console.log(lastname);



// merge 2 arrays using spread operator

// let a = [1,2];
// let b = [3,4];

// let onearr = [...a,...b];
// console.log(onearr);


// add "india" to the start of this array using spread

// let countries = ["usa", "uk"];

// let indiafirst = ["india",...countries];
// console.log(indiafirst);

// clone this array properly not by reference 

// let arr = [1,2,3];
// let arr2 = [...arr];
// console.log(arr2);

