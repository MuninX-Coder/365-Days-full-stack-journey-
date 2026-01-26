

// ### 1️⃣



// Ek object banao `student` jisme:

// * name
// * age
// * city

// Phir:

// * dot notation se `name` print karo
// * bracket notation se `city` print karo

console.log("solution 1");
let student = {
    name: "Munin",
    age : 18,
    city : "Lakhimpur"
}
console.log(student.name);
console.log(student['city']);
// ---

// ### 2️⃣

// Ek object `car` banao jisme:

// * brand
// * model
// * year

// Agar `year` 2015 se bada ho to `"New Car"` print karo warna `"Old Car"`.
console.log("solution 2");
let car = {
    brand: 'BMW',
    model : 'M5',
    year : 2025
}
if(car.year > 2015){
    console.log("New car");
} else {
    console.log("Old car");
}

// ---

// ### 3️⃣

// Ek object `user` banao.
// Check karo:

// * agar `email` property exist karti ho to `"Email exists"`
// * warna `"Email missing"`

console.log("solution 3");

let user = {
    email: "example@gmail.com"
}

if("email" in user){
    console.log("email exists");
} else{
    console.log("email missing");
}
// ---

// ### 4️⃣

// Ek object `product` banao jisme:

// * name
// * price

// Price ko 10% increase karke object me update karo.
console.log("solution 4");
let product = {
    name : "iphone",
    price : 999
}
let price10 = product.price * 10 / 100;
let newprice = product.price + price10;

product.price = newprice;
console.log(product.price);
// ---

// ### 5️⃣

// Ek object `person` banao.
// Loop use karke **sabhi keys aur values print karo**.

console.log("soluton 5");

let person = {
    name: 'munin',
    class : 12,
    age : 18,
    gender : "male"
}
for(let key in person){
    console.log(key, person[key]);
}

// ---

// ### 6️⃣

// Ek object `book` banao.
// Agar `pages` > 300 ho to `"Thick Book"` print karo.
console.log("solution 6");
let book = {
    pages : 350
}
if(book.pages > 300){
    console.log("Thick Book");
}
// ---

// ### 7️⃣

// Ek object `mobile` banao.
// Baad me ek nayi property `battery` add karo.
console.log("solution 7")
let mobile = {
    name : "iphone"
}
mobile.battery = 5000;
console.log(mobile);
// ---

// ### 8️⃣

// Ek object `employee` banao.
// `salary` property delete karo.
console.log("solution 8");
let employee = {
    name : "Rajesh",
    salary : 5000
}
delete employee.salary;
console.log(employee);
// ---

// ### 9️⃣

// Ek object `settings` banao jisme:

// * theme: "dark"

// Agar theme "dark" ho to `"Dark mode ON"` print karo.

console.log("solution 9");

let settings = {
    theme : "dark"
}
let value = settings.theme;

if(value === "dark"){
    console.log("Dark mode ON");
}
// ---

// ### 🔟

// Ek object `game` banao.
// Check karo object empty hai ya nahi.

console.log("solution 10");

let game = {

}

let mykeys = Object.keys(game);
if(mykeys.length === 0){
    console.log("empty");
}
// ### 1️⃣1️⃣

// Ek function banao jo **object ko input** le
// Aur us object ki **total number of keys** return kare.
console.log("solution 11");

function totalKey(obj){
let keyCounter = 0;
for(let key in obj){
    keyCounter++;
}
return keyCounter;
}
let findkey = totalKey({name: "munin", class : 12, rollno : 38});
console.log(findkey);
// ---

// ### 1️⃣2️⃣

// Function banao jo object me:

// * `isAdmin` true ho to `"Access Granted"`
// * warna `"Access Denied"`

// ---

// ### 1️⃣3️⃣

// Function banao jo:

// * object ke kisi property ka value change kare

// ---

// ### 1️⃣4️⃣

// Ek function banao jo:

// * object ke sabhi values print kare

// ---

// ### 1️⃣5️⃣

// Ek function banao jo:

// * object me `name` property ho to true return kare

// ---

// ### 1️⃣6️⃣

// Ek function banao jo:

// * object ka **copy** banaye (original change na ho)

// ---

// ### 1️⃣7️⃣

// Ek function banao jo:

// * object me nayi key add kare dynamically

// ---

// ### 1️⃣8️⃣

// Function banao jo:

// * object me number values ka **sum** nikale

// ---

// ### 1️⃣9️⃣

// Function banao jo:

// * object me se sirf string values print kare

// ---

// ### 2️⃣0️⃣

// Function banao jo:

// * object ke sabhi values ko uppercase kare (sirf strings)



// ### 2️⃣1️⃣

// Array banao jisme **3 student objects** ho.
// Sab students ke naam print karo.

// ---

// ### 2️⃣2️⃣

// Array of objects me se:

// * age > 18 wale students print karo

// ---

// ### 2️⃣3️⃣

// Array of product objects ho.
// Total price calculate karo.

// ---

// ### 2️⃣4️⃣

// Array of users ho.
// Check karo koi user `isActive` false hai ya nahi.

// ---

// ### 2️⃣5️⃣

// Array of objects me:

// * kisi ek object ka property update karo

// ---

// ### 2️⃣6️⃣

// Array of objects me:

// * ek naya object add karo

// ---

// ### 2️⃣7️⃣

// Array of objects me:

// * kisi ek object ko remove karo

// ---

// ### 2️⃣8️⃣

// Array of objects me:

// * sirf names ka naya array banao

// ---

// ### 2️⃣9️⃣

// Array of objects me:

// * highest salary wala employee find karo

// ---

// ### 3️⃣0️⃣

// Array of objects me:

// * kisi ek key ke basis pe count nikalo
//   (eg: male / female count)

// ---

// ## 🔹 LOGIC-HEAVY OBJECT QUESTIONS (31–40)

// ### 3️⃣1️⃣

// Object me marks diye ho.
// Total aur average calculate karo.

// ---

// ### 3️⃣2️⃣

// Object me months aur sales values ho.
// Sabse zyada sale wala month find karo.

// ---

// ### 3️⃣3️⃣

// Object me votes diye ho.
// Winner find karo.

// ---

// ### 3️⃣4️⃣

// Object me temperatures ho.
// Highest aur lowest find karo.

// ---

// ### 3️⃣5️⃣

// Object me names aur ages ho.
// Sabse bada age find karo.

// ---

// ### 3️⃣6️⃣

// Object me numbers ho.
// Even aur odd values count karo.

// ---

// ### 3️⃣7️⃣

// Object me strings ho.
// Sabse lamba string find karo.

// ---

// ### 3️⃣8️⃣

// Object me mixed values ho.
// Sirf numbers ka sum nikalo.

// ---

// ### 3️⃣9️⃣

// Object me prices ho.
// 10% discount apply karo sab par.

// ---

// ### 4️⃣0️⃣

// Object me boolean values ho.
// True values count karo.



// ### 4️⃣1️⃣

// Shopping cart object banao.
// Total items aur total price nikalo.

// ---

// ### 4️⃣2️⃣

// User profile object banao.
// Incomplete profile detect karo (missing fields).

// ---

// ### 4️⃣3️⃣

// Exam result object banao.
// Pass / Fail decide karo.

// ---

// ### 4️⃣4️⃣

// Attendance object banao.
// Present percentage nikalo.

// ---

// ### 4️⃣5️⃣

// Game score object banao.
// Highest scorer find karo.

// ---

// ### 4️⃣6️⃣

// Bank account object banao.
// Balance update function likho.

// ---

// ### 4️⃣7️⃣

// Object me tasks ho.
// Completed tasks count karo.

// ---

// ### 4️⃣8️⃣

// Object me ratings ho.
// Average rating nikalo.

// ---

// ### 4️⃣9️⃣

// Object me inventory ho.
// Out of stock items find karo.

// ---

// ### 5️⃣0️⃣

// Object me user roles ho.
// Admin users find karo.

// ---
