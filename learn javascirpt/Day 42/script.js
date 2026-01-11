
// ---

// ## 🧠 FUNCTION PRACTICE QUESTIONS (1–100)

// ### 1

// Ek simple function banao jo **sirf "Hello World" print kare** jab call ho.
// 👉 Parameters nahi honge.

function helloword(){
    console.log("HELLO World");
}
// helloword();

// ### 2

// Ek function likho jo **tumhara naam print kare** jab function call ho.
// 👉 Naam function ke andar hardcode karo.

function myname(){
    console.log("Munin Borah");
}
// myname();

// ### 3

// Ek function banao jo **do numbers le aur unka sum print kare**.
// 👉 Arguments use karo.

function add(a,b){
    console.log(a+b);
}
// add(23,45);

// ### 4

// Ek function likho jo **do numbers ka difference return kare**.
// 👉 Print nahi, `return` use karna hai.

function difference(a,b){
    return a - b;
}

let val = difference(23,3);
// console.log(val);

// ### 5

// Ek function likho jo **do numbers ko multiply kare aur result return kare**.

function mutiply (a,b){
    return a * b;
}
let va1 = mutiply(3,4);
// console.log(va1);

// ### 6

// Ek function banao jo **check kare number even hai ya odd**,
// aur result print kare.

function evenodd (num){
    if(num%2===0){
        console.log("even number", num);
    } else{
        console.log("odd number", num);
    }
}

// evenodd(43);
// evenodd(12);

// ### 7

// Ek function likho jo **ek number le aur uska square return kare**.

function square (num){
    return num * num ;
}
let value_of_squre = square(34);
// console.log(value_of_squre);

// ### 8

// Ek function likho jo **ek number le aur uska cube print kare**.

function cube(num){
    return num * num * num ;

}

let value_of_cube = cube(2);
// console.log(value_of_cube);

// ### 9

// Ek function likho jo **3 numbers le aur unka average nikale**.

function average(a,b,c){
    return (a+b+c)/3;
}

let average_value = average(2,3,53);
// console.log(average_value);

// ### 10

// Ek function banao jo **ek number le aur bataye positive, negative ya zero**.

let myfnc = (num) =>{
    if(num >= 1){
        console.log("positive number", num);

    } else if(num < 0){
        console.log("negative number", num);
    } else{
        console.log("zero", num);
    }
}

// myfnc(0);
// myfnc(1);
// myfnc(-1);


// ---

// ### 11

// Ek function likho jo **1 se N tak numbers print kare**.
// 👉 N argument ke through aayega.

function printing_number(num){
    for(let i = 1; i<= num; i++){
        console.log(i);
    }
}

// printing_number(34);

// ### 12

// Ek function banao jo **1 se N tak ka sum return kare**.

let sum = 0;

function sum_of_number(num){
    for(let i = 1; i<=num; i++){
        sum = sum + i;
    }
}
sum_of_number(10);
// console.log(sum);

// ### 13

// Ek function likho jo **N ka factorial return kare**.
// 👉 Loop function ke andar.

function factorial_of_num(num){
    let result_variable = 1;
    for(let i = 1; i<= num; i++){
        result_variable = result_variable * i;
       
    }
    return result_variable;
}


let value_of_factorial = factorial_of_num(10);
console.log(value_of_factorial);

// ### 14

// Ek function likho jo **table print kare kisi bhi number ki**.


function table(num){
    for(let i = 1;i==num; i++ ){
    
    }
}
table(5);
// ### 15

// Ek function banao jo **count kare 1 se N tak kitne even numbers hain**.

function even_tak_count(num){
    for(let i = 1; i<=num; i++){
        if(i % 2 === 0){
            console.log("even number", i);
        }
    }
}
// even_tak_count(100);

// ### 16

// Ek function likho jo **check kare number prime hai ya nahi**.


// ### 17

// Ek function banao jo **do numbers le aur bigger number return kare**.

function bigger_number(a,b){
    if(a>b){
        return a;
    } else if(b>a){
        return b;
    } else{
        console.log("equal");
    }
}

let value_of_bignum = bigger_number(23,34);
// console.log(value_of_bignum);

// ### 18

// Ek function likho jo **3 numbers me se maximum number return kare**.

function maximum3(a,b,c){
    return a + b + c;
}

let maximumvalue = maximum3(2,3,6);
// console.log(maximumvalue);

// ### 19

// Ek function likho jo **1 se N tak odd numbers print kare**.

function oddnumber(num){
    for(let i = 1; i<= num; i++){
        if(i%2 != 0){
            console.log("odd number", i);
        }
    }
}
// oddnumber(45);

// ### 20

// Ek function likho jo **reverse counting print kare N se 1 tak**.

function reverse_counting(num){
  
}

// ---

