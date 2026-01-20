

// ### 1.
// Ek function banao jo **do numbers** input le aur unka **sum return** kare.
// Function ko aise likho ki wo **negative numbers** ke saath bhi kaam kare.
console.log("solution 1");
function sum (a,b){
    return a + b;
}
let Mysum = sum(-23,45);
console.log(Mysum);

// ### 2.
// Ek function likho jo **ek number** le aur bataye ki wo **even hai ya odd**.
// Return value `"Even"` ya `"Odd"` honi chahiye.
console.log("solution 2");
function even(a){
    if(a % 2 === 0){
        return "even";
    } return "odd";
}
let EvenODD = even(5);
console.log(EvenODD);
// ### 3.
// Ek function banao jo **radius** le aur **circle ka area** return kare.
// Formula use karna hai: π × r × r (π = 3.14).

console.log("solution 3");
let pi = 3.14;

function radius(r){
    return pi * r * r;
}
let MyArea = radius(2);
console.log(MyArea);

// ### 4.
// Ek function likho jo **do numbers** le aur unmein se **bada number** return kare.
// Agar dono equal ho to `"Both are equal"` return karo.
console.log("solution 4");

function bigsmall(a,b){
    if(a > b) return "a";
    else if (a === b) return "Both are equal";
    else return "b";
}
let BigorSmall = bigsmall(3,3);
console.log(BigorSmall);

// ### 5.
// Ek function banao jo **string** le aur uski **length** return kare
// Spaces ko bhi count karna hai.
console.log("solution 5");

function strLENGTH (str){
    let count = 0;

    while(str[count] !== undefined){
        count++;
    }
    return count;
}
let mylength = strLENGTH("Munin Borah");
console.log(mylength);
// ### 6.
// Ek function likho jo **string** input le aur usko **uppercase** mein convert karke return kare.
console.log("solution 6");

function upercase(str){
    let result = "";

    for(let i = 0; i<str.length; i++){
        let ch = str[i];
        
        if(ch >='a' && ch<='z' ){
            result = result + String.fromCharCode(ch.charCodeAt(0) - 32);
        } else{
            result = result +ch;
        }
    }
    return result;
}

let upercaseRst = upercase("munin");
console.log(upercaseRst);
// ### 7.
// Ek function banao jo **array of numbers** le aur unka **total sum** return kare.
// Loop function ke andar hi lagana hai.
console.log("solution 7");

function totalsum (arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++){
let val = arr[i];

sum = sum + val;
    }
    return sum;
}
let myarrSUM = totalsum([5,6,4]);
console.log(myarrSUM);

// ### 8.
// Ek function likho jo **array** le aur uska **first element** return kare.
// Agar array empty ho to `"Array is empty"` return karo.

console.log("solution 8");

function lastarr (arr){
   
   if(arr.length === 0){
    return "array is empty";
}
return arr[0];
}
let myLastARR = lastarr([]);
console.log(myLastARR);

// ### 9.
// Ek function banao jo **number** le aur bataye ki wo **positive, negative ya zero** hai.

console.log("solution 9");

function pnzNum (num){
    if(num > 0){
        console.log("positive");
    } else if(num < 0) {
        console.log("Negative");
    } else {
        console.log("zero");
    }
}
pnzNum(4);
pnzNum(-6);
pnzNum(0);
// ### 10.
// Ek function likho jo **do strings** le aur unko **ek saath jod (concatenate)** karke return kare.

console.log("solution 10");

function concatenate(a,b){
    return a + b; 
}
let concateStr = concatenate("Munin", "Borah");
console.log(concateStr);
// ---

// ### 11.
// Ek function banao jo **array of numbers** le aur sirf **even numbers ka naya array** return kare.

console.log("solution 11");

function evenARR (arr){
    let newarr =[];
    for(let i = 0; i<arr.length; i++){
        let val = arr[i];

    if(val % 2 === 0){
         newarr.push(val);
    }
   
    }
     return newarr;
}
let myEvenarr = evenARR([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
console.log(myEvenarr);

// ### 12.
// Ek function likho jo **number** le aur uska **square** return kare.
console.log("solution 12");

let myfnc = (a) => {
return a * a;
}
let squre = myfnc(4);
console.log(squre);

// ### 13.
// Ek function banao jo **array** le aur uska **last element** return kare.
console.log("solution 13");

function lastElement (arr){
    let last; 
    return last = arr[arr.length - 1];
}
let lastel = lastElement([23,4,5,67,34,8,5]);
console.log(lastel);

// ### 14.
// Ek function likho jo **string** le aur check kare ki wo **empty hai ya nahi**.
console.log("solution 14");

function emtyStr (str){
    if (str.length === 0){
        return "empty";
    } else {
        return "not empty";
    }
}
let myemtSTR = emtyStr(" ");
console.log(myemtSTR);

// ### 15.
// Ek function banao jo **3 numbers** le aur unmein se **sabse chhota number** return kare.
console.log("solution 15");

function smallNum(a,b,c){
    if(a < b && a < c){
        return a;
    } else if(b  < a && b < c){
        return b;
    } else {
        return c;
    }
}

let smallNumber = smallNum (2,1,4);
console.log(smallNumber);

// ### 16.
// Ek function likho jo **array of numbers** le aur unka **average** return kare.
console.log("solution 16");

function average(arr){
    let totalarrr = 0;
    let totalsum = 0;
    for(let i = 0; i<arr.length; i++){
        let sum = arr[i];
        totalsum = totalsum + sum;
        totalarrr++;
    }
    return  totalsum / totalarrr;
}

let arrayAvg = average([1,2,3,4,5]);
console.log(arrayAvg);

// ### 17.
// Ek function banao jo **number** le aur bataye ki wo **multiple of 5** hai ya nahi.
console.log("solution 17");

function mutiple5(num){
    if(num % 5 === 0){
        return "multiple of 5";
    } else {
        return "not multiple of 5";
    }
}
let multipe = mutiple5(50);
console.log(multipe);

// ### 18.
// Ek function likho jo **string** le aur usko **reverse** karke return kare.
// (Example: `"hello"` → `"olleh"`)

console.log("solution 18");

function reverse(str){
    let reversing = "";
    for(let i = str.length - 1; i>= 0; i--){
        reversing += str[i];
    }
    return reversing;
}

let strReverse = reverse("Munin");
console.log(strReverse);

// ### 19.
// Ek function banao jo **array of strings** le aur unmein se **longest string** return kare.
console.log("solution 19");

function arrSTR (arr){
    let currentLongest = arr[0];

    for(let i = 1; i<arr.length; i++){
        let currentValue = arr[i];

        if(currentValue.length > currentLongest.length){
currentLongest = currentValue;
        } 

    }
    return currentLongest;
}
let mylongest =arrSTR(["munin", "pinky", "goku", "pokemon", "fighter"]);
console.log(mylongest);
// ### 20.
// Ek function likho jo **number** le aur uska **factorial** calculate kare.
// (Example: 5 → 120)
console.log("solution 20");

function factorial (num){
let Final = 1;

for(let i=num; i>=1; i--){
    Final = Final * i;
}
return Final;
}
let factFinal = factorial(5);
console.log(factFinal);
// ---

// ### 21.
// Ek function banao jo **array** le aur bataye ki usmein **given value present hai ya nahi**.

// ### 22.
// Ek function likho jo **string** le aur count kare ki usmein **kitne vowels** hain.

// ### 23.
// Ek function banao jo **number** le aur bataye ki wo **prime number** hai ya nahi.

// ### 24.
// Ek function likho jo **array of numbers** le aur unmein se **maximum value** return kare.

// ### 25.
// Ek function banao jo **string** le aur check kare ki wo **palindrome** hai ya nahi.
// (Example: `"madam"`)

// ### 26.
// Ek function likho jo **array** le aur uska **length bina `.length` use kiye** return kare.

// ### 27.
// Ek function banao jo **number** le aur usko **binary** mein convert karke return kare.

// ### 28.
// Ek function likho jo **array of numbers** le aur sirf **odd numbers ka sum** return kare.

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

