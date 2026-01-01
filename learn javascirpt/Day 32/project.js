let myname = "Munin";
console.log("My name is : ", myname ,"and it is a : ",(typeof(myname)));

let myAge = 18;
console.log("My age is : ", myAge, "and its is a : ",(typeof(myage)));

let isStudent = true;
console.log("am i a student : ", isStudent, "and it is a : ", (typeof(isStudent)));

let myvalue = null;
console.log("My value is : ", null, "and it is a : ", (typeof(myvalue)));

let undefinedvalue;
console.log("My undefined value is : ", undefinedvalue, "and it is a: ", (typeof(undefinedvalue)));

let sym1 = Symbol("Munin");
let sym2 = Symbol("Munin");

console.log(sym1 === sym2);

let bignumber = 234534534545n;
console.log("This is my big number : ", bignumber, "and it is a : ", (typeof(bignumber)));

let myarr = [1,2,3,4,5];
console.log("This is my array :", myarr, "and it is a : ",(typeof(myarr)));

let myobj = {
    name : "Munin",
    age : 18,
    class : 12
};

console.log("This is my object : ", myobj, "and it is a : ", (typeof(myobj)));