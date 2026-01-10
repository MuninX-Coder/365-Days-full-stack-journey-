// ---

// ## 🔁 Practice Questions (1–20)

// ### 1️⃣

// Ek `for` loop likho jo **1 se 10 tak ke numbers** console me print kare.
// 👉 Tumhe loop ka start, condition aur increment khud decide karna hai.
// 👉 Output line by line aana chahiye.

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

// ---

// ### 2️⃣

// Ek `for` loop likho jo **10 se 1 tak reverse counting** print kare.
// 👉 Loop 10 se start ho
// 👉 Har iteration me number kam hota jaye

// for(let i = 10; i>=1; i--){
//     console.log(i);
// }

// ---

// ### 3️⃣

// Ek `while` loop ka use karke **1 se 5 tak numbers** print karo.
// 👉 Pehle variable initialize karo
// 👉 Condition sahi jagah lagao
// 👉 Loop ke andar variable update karna mat bhoolna

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// ---

// ### 4️⃣

// Ek `do-while` loop likho jo **at least ek baar "Hello JS" print kare**,
// chahe condition false hi kyun na ho.
// 👉 Samajhna hai do-while ka real behavior

// let i = 1
// do{
//     console.log("HELLO JS");
//     i++;
// }
// while(i<45)

// ---

// ### 5️⃣

// Ek `for` loop likho jo **sirf even numbers (2,4,6,8,10)** print kare
// 1 se 10 ke beech.
// 👉 `if` use kar sakte ho
// 👉 Ya increment logic se bhi kar sakte ho (tumhari choice)

// for(let i = 1 ; i<=10; i++){
//     if(i%2 === 0){
//         console.log("even number: ", i);
//     }
// }

// ---

// ### 6️⃣

// Ek loop likho jo **sirf odd numbers** print kare 1 se 15 ke beech.
// 👉 Output me sirf odd numbers hone chahiye
// 👉 Loop type tum choose karo

// for(let i = 1; i<= 15; i++){
//     if(i%2 != 0){
//         console.log("odd number", i);
//     }
// }

// ---

// ### 7️⃣

// Ek `for` loop likho jo **1 se 10 tak ke numbers ka sum** calculate kare.
// 👉 Ek variable `sum` banao
// 👉 Har iteration me sum update karo
// 👉 Loop ke baad final sum print karo

// let sum = 0;
// for(let i = 1; i<=10; i++){
//     sum = sum + i;

// }
// console.log("Total sum", sum);

// ---

// ### 8️⃣

// Ek `while` loop likho jo **table of 5** print kare (5 x 1 se 5 x 10).
// 👉 Multiplication properly dikhna chahiye
// 👉 Example: `5 x 3 = 15`

// const number = 5;
// let i = 1;
// while(i<=10){
//     console.log(`5 * ${i} = ${5 * i}`);
//     i++;
// }

// ---

// ### 9️⃣

// Ek `for` loop likho jo **numbers print kare**,
// lekin **jaise hi number 7 aaye loop stop ho jaye**.
// 👉 `break` ka use compulsory hai
// 👉 7 print nahi hona chahiye

// for(let i = 1; i<= 10; i++){
//     console.log(i);
//     if(i===7){
//         console.log(i);
//         break;
//     }

// }

// ---

// ### 🔟

// Ek loop likho jo **1 se 10 tak numbers print kare**,
// lekin **number 5 skip ho jaye**.
// 👉 `continue` ka use compulsory hai
// 👉 Baaki saare numbers print hone chahiye

// for(let i = 1; i<=10; i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }

// ---

// ### 1️⃣1️⃣

// Ek `for` loop likho jo **1 se 50 tak ke numbers** check kare
// aur **sirf woh numbers print kare jo 3 se divisible ho**.
// 👉 `%` operator ka use samajhna hai

// for (let i = 1; i <=50; i++) {
//    if(i%3===0){
//     console.log(i);
//    }

// }

// ---

// ### 1️⃣2️⃣

// Ek `while` loop likho jo **10 se start ho aur 1 pe ruk jaye**.
// 👉 Reverse loop using `while`
// 👉 Infinite loop nahi hona chahiye

// let start = 10;
// while(start>=1){
//     console.log(start);
//     start--;
// }

// ---

// ### 1️⃣3️⃣

// Ek `for` loop likho jo **0 se 100 tak chale**,
// lekin **jaise hi number 42 aaye loop break ho jaye**.
// 👉 42 print nahi hona chahiye

// for(let i = 0; i<=100; i++){
//     console.log(i);
//     if(i===41){
//       break;
//     }

// }

// ---

// ### 1️⃣4️⃣

// Ek `for` loop likho jo **1 se 20 tak chale**,
// lekin **sirf even numbers ka sum nikale**.
// 👉 Odd numbers completely ignore hone chahiye
// 👉 Final sum loop ke baad print karo

// let evensum = 0;

// for(let i = 1; i<= 20; i++){
//     if(i%2===0){
//         evensum = evensum + i;
//     }
// }
// console.log("Total sum of even : ", evensum);

// ---

// ### 1️⃣5️⃣

// Ek `do-while` loop likho jo **1 se 5 tak numbers print kare**.
// 👉 Dhyaan do: initialization aur increment sahi jagah hona chahiye

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=5);

// ---

// ### 1️⃣6️⃣

// Ek loop likho jo **1 se 10 tak numbers print kare**,
// lekin **agar number 6 aaye to "Six detected" print ho aur loop break ho jaye**.
// 👉 Number 6 khud print nahi hona chahiye

// for(let i = 1; i<=10; i++){

//     if(i === 6){
//         console.log("six detected");
//         break;
//     }
//     console.log(i);
// }

// ---

// ### 1️⃣7️⃣

// Ek `for` loop likho jo **1 se 10 tak numbers ke square** print kare.
// 👉 Example: `3 -> 9`
// 👉 Har number ka square clearly dikhe

// let squarr = 0;
// for(let i = 1; i<=10; i++){
// squarr = i * i ;
// console.log("square of the number",i , "*" ,i, squarr);
// }

// ---

// ### 1️⃣8️⃣

// Ek loop likho jo **1 se 30 tak numbers** check kare
// aur **sirf woh numbers print kare jo 5 se divisible NA ho**.
// 👉 `continue` ka proper use hona chahiye

// for(let i = 1; i<= 30; i++){
//     if(i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }

// ---

// ### 1️⃣9️⃣

// Ek `while` loop likho jo **random nahi**,
// balki **clearly controlled ho** aur **5 iterations ke baad ruk jaye**.
// 👉 Count ka use karke loop control karo

// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// ---

// ### 2️⃣0️⃣

// Ek loop likho jo **1 se 100 tak numbers print kare**,
// lekin:

// * 20 ke baad loop break ho
// * Sirf **odd numbers** print ho
//   👉 `if`, `break`, `continue` sab ka correct use chahiye

// for (let i = 1; i <= 100; i++) {

//   if(i%2 != 0){
//     console.log("odd number", i);
//   }  else if(i === 20){
//     break;
//   }
//   console.log(i);
// }

// ---

// ---

// ## 🔁 Practice Questions (21–40)

// ### 2️⃣1️⃣

// Ek `for` loop likho jo **1 se 10 tak numbers** print kare,
// lekin **har number ke saath yeh bhi print ho ki number even hai ya odd**.
// 👉 Example: `3 is odd`
// 👉 `if` condition loop ke andar honi chahiye

// for(let i = 1; i<= 10;i++){
//     if(i%2 === 0){
//         console.log("even number : ", i);
//     } else {
//         console.log("odd number : ", i);
//     }
// }

// ---

// ### 2️⃣2️⃣

// Ek `while` loop likho jo **pehle 10 natural numbers ka square** print kare.
// 👉 Loop control clearly dikhna chahiye
// 👉 Output readable ho

// let square = 0;
// let i = 1;
// while(i <= 10){
// square = i * i ;
// console.log(square);
// i++;
// }

// ---

// ### 2️⃣3️⃣

// Ek `for` loop likho jo **1 se 100 tak ke numbers** me se
// **sirf 10 ke multiples print kare**.
// 👉 10, 20, 30... aise hi output aana chahiye

// for(let i = 10; i<=100; i+=10){        // kuch naya try karne ka try keya taki code ko short karke kaam sai kaam loop ko run karu aur output nekalu
// console.log(i);
// }

// ---

// ### 2️⃣4️⃣

// Ek `do-while` loop likho jo **user ko 3 baar attempt de**,
// aur har attempt par `"Try again"` print kare.
// 👉 Loop exactly 3 baar chalna chahiye
// 👉 `do-while` ka use clear hona chahiye

// let i = 1;
// do{
//     console.log("TRY AGAIN");
//     i++;
// } while(i<=3)

// ---

// ### 2️⃣5️⃣

// Ek `for` loop likho jo **1 se 50 tak numbers** check kare
// aur **sirf woh numbers print kare jo 4 aur 6 dono se divisible ho**.
// 👉 Logical operators ka correct use hona chahiye

// for(let i = 1; i<=50; i++){
//     if(i%4 === 0 && i%6 === 0){
//         console.log("Yes divisible by both 4 and 6: ", i);
//     }
// }

// ---

// ### 2️⃣6️⃣

// Ek loop likho jo **1 se 20 tak numbers** me
// **sabse pehla number dhundhe jo 7 se divisible ho**,
// aur **jaise hi mil jaye loop break ho jaye**.
// 👉 Sirf pehla matching number print hona chahiye

// for(let i = 1; i<=20; i++){
//    if(i % 7 === 0){
//     console.log(i);
//     break;
//    }
// }

// ---

// ### 2️⃣7️⃣

// Ek `while` loop likho jo **1 se start ho**,
// aur **jab tak number 15 se chhota ho tab tak chale**,
// lekin **number 10 aane par skip ho jaye**.
// 👉 `continue` ka use compulsory hai

// let i = 0;
// while (i < 15) {
//   i++;

//   if (i === 10) {
//     continue;
//   }
//   console.log(i);
// }

// ---

// ### 2️⃣8️⃣

// Ek `for` loop likho jo **1 se 5 tak chale**,
// aur **har iteration me loop ka current count print kare**.
// 👉 Simple lagta hai, lekin structure clean hona chahiye

// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

// ---

// ### 2️⃣9️⃣

// Ek loop likho jo **1 se 100 tak ke numbers** me
// **pehle 5 even numbers print kare**,
// aur phir loop band ho jaye.
// 👉 Counter ka use karna padega
// 👉 `break` ka use compulsory

// let counter = 0;

// for(let i = 1; i<=100; i++){
//     if(i%2 === 0){
//         console.log("even number", i);
//         counter++;
//         if(counter === 5){
//             break;
//         }
//     }
// }

// ---

// ### 3️⃣0️⃣

// Ek `do-while` loop likho jo **number 10 se start ho**,
// aur **jab tak number 1 tak na pahunch jaye tab tak print kare**.
// 👉 Reverse counting using `do-while`

// let i = 10;
// do{
//     console.log(i);
//     i--;

// }
// while(i>=1);

// ---

// ### 3️⃣1️⃣

// Ek `for` loop likho jo **1 se 30 tak numbers** me
// **sirf woh numbers print kare jo 3 ya 5 se divisible ho**.
// 👉 OR (`||`) operator ka use hona chahiye

// for(let i = 1; i<=30; i++){
//     if(i%3 === 0 || i%5 === 0){
//         console.log(i);
//     }
// }

// ---

// ### 3️⃣2️⃣

// Ek loop likho jo **1 se 20 tak numbers** print kare,
// lekin **har even number ke liye "Even number detected" print kare**,
// aur **odd numbers ke liye sirf number print kare**.
// 👉 Output me clear difference dikhna chahiye

// for(let i = 1; i<=20; i++){
//     if(i%2 === 0){
//         console.log("even number detected",i);
//     } else{
//         console.log(i);
//     }
// }

// ---

// ### 3️⃣3️⃣

// Ek `while` loop likho jo **1 se 100 tak numbers** check kare
// aur **jaise hi number 73 aaye loop stop ho jaye**.
// 👉 73 print nahi hona chahiye
// 👉 Condition + break ka use sahi hona chahiye

// let i = 1;
// while(i<=100){

//     if(i === 73){

//         break;
//     }
//     console.log(i);
//     i++;

// }

// ---

// ### 3️⃣4️⃣

// Ek `for` loop likho jo **1 se 10 tak numbers** ka
// **factorial calculate kare (hint: multiply)**.
// 👉 Final factorial value print karo
// 👉 Beech beech ke values bhi print kar sakte ho (optional)

// let factorial = 1;

// for(let i = 1; i<=10; i++){
//     factorial = factorial * i

// }
// console.log(factorial);

// ---

// ### 3️⃣5️⃣

// Ek loop likho jo **1 se 50 tak numbers** me
// **kitne numbers 8 se divisible hain yeh count kare**.
// 👉 Ek counter variable use karo
// 👉 Loop ke baad final count print karo

// let counter = 0;

// for(let i = 1; i<=50; i++){
//     if(i%8===0){
//         counter++;
//     }
// }
// console.log(counter);
// ---

// ### 3️⃣6️⃣

// Ek `do-while` loop likho jo **minimum 1 baar execute ho**,
// aur **maximum 5 baar execute ho**.
// 👉 Loop control tumhare haath me hona chahiye
// 👉 Output se number of runs clear hona chahiye
// let i = 1;
// do{
//     console.log("first time");
//     i++;
// } while(i<=5)

// ---

// ### 3️⃣7️⃣

// Ek `for` loop likho jo **1 se 100 tak numbers** me
// **sirf woh numbers print kare jo 10 ke multiples nahi hain**.
// 👉 `continue` ka clean use hona chahiye

// for(let i = 1; i<=100; i++){
//     if(i %10 === 0){
// continue;
//     }
//     console.log(i);
// }

// ---

// ### 3️⃣8️⃣

// Ek loop likho jo **1 se 10 tak numbers** print kare,
// lekin **har number ke baad yeh bhi print ho ki loop abhi kaunsa iteration me hai**.
// 👉 Iteration count clearly visible hona chahiye
// let iteration_counter = 0;

// for(let i = 1; i<=10; i++){
//     console.log(i);
//     iteration_counter++;
//     console.log("iteration count: ", iteration_counter);
// }

// ---

// ### 3️⃣9️⃣

// Ek `while` loop likho jo **1 se start ho**,
// aur **sirf pehle 7 odd numbers print kare**.
// 👉 Count odd numbers
// 👉 Loop ko sahi time par stop karo

// let odd_iteration = 0;
// let i = 1;
// while(i<100){
//     if(i%2 != 0){
//         console.log(i);
//         odd_iteration++;

//     } else if(odd_iteration === 7){
//         break;
//     }
//     i++;

// }
// ---

// ### 4️⃣0️⃣

// Ek loop likho jo **1 se 100 tak numbers** check kare,
// lekin:

// * **Agar number 25 aaye → skip**
// * **Agar number 60 aaye → loop break**
// * **Sirf even numbers print ho**

// 👉 `if`, `continue`, `break` teeno ka real test hai yeh.

// for (let i = 1; i <= 100; i++) {
//   if (i === 25) {
//     continue;
//   } else if (i === 60) {
//     break;
//   } else if (i % 2 === 0) {
//     console.log("even number: ", i);
//   }
// }

// ---






// ## 🔁 Practice Questions (41–60)

// ### 4️⃣1️⃣

// Ek `for` loop likho jo **1 se 10 tak numbers** print kare,
// lekin **har number ke aage uska cube bhi print ho**.
// 👉 Example: `2 -> 8`
// 👉 Calculation loop ke andar honi chahiye

// for(let i = 1; i<=10 ; i++){
//     console.log( i, "->",( i * i * i));
// }

// ---

// ### 4️⃣2️⃣

// Ek `while` loop likho jo **1 se 50 tak numbers** me
// **sirf woh numbers print kare jo 7 se divisible ho ya 11 se divisible ho**.
// 👉 OR condition ka correct use chahiye

// let i = 1;
// while(i<=50){
//     if(i%7 === 0 || i%11 === 0){
//         console.log(i);
//     }
//     i++;
// }

// ---

// ### 4️⃣3️⃣

// Ek `for` loop likho jo **1 se 100 tak chale**,
// aur **count kare kitne numbers even hain aur kitne odd hain**.
// 👉 Dono counts loop ke baad print hone chahiye

// let evencount = 0;
// let oddcount = 0;

// for(let i = 1; i<=100; i++){
//     if(i%2 === 0){
//         evencount++;
//     } else {
//         oddcount++;
//     }
// }
// console.log(evencount);
// console.log(oddcount);
// ---

// ### 4️⃣4️⃣

// Ek `do-while` loop likho jo **number 5 se start ho**,
// aur **har step me number ko 5 se multiply kare**,
// jab tak value **1000 se chhoti ho**.
// 👉 Har step ka output print hona chahiye

// let number = 5;
// do{
//     console.log(number);
//     number*=5;
// }while(number<1000)

// ---

// ### 4️⃣5️⃣

// Ek loop likho jo **1 se 20 tak numbers** me
// **sirf prime numbers print kare**.
// 👉 Prime logic tumhe khud banana padega
// 👉 Nested loop allowed hai (but sirf loops + if)



// ---
