// create an object for a student with name , age and isenrolled 

// let student = {
//     name : "Munin",
//     age : 18,
//     isEnrolled : true,
// };

// can an ojbect key be an number of boolean 

// const obj = {
//     true: "yes",
//     42 : "answer",
// };
// console.log(obj[42]);


// access the value of first name from this object 

// const user = {
//     "fist-name":"munin",
// };

// user["fist-name"];


// given a dynamic key let key = "age", how will you access user [key]

// let key = "age";
// const user = {
// age : 18,

// };
// user[key]

// from the object below print the latiitude 

// const locations  ={
//     city : "assam",
//     cordinates : {

//         latitude :33.34,
//         langitude : 34.4,
//     }
// };

// locations.cordinates.langitude


// what will happens if coordingates is missing how to prevent erro

// locations?.coordinates?.langitude;


// destructure the city and lat from the location object above

// let {city} = location;
// let {latitude} = city;

// desturcture the key first-name as a variable called first name 

// const user = {
//     "first-name" : "Munin"
// };

// let {"first-name": firstname} = user;


// use forin log to all keys in this object

// const course = {
//     title : "javascript",
//     duration : "4 weeks ",
// };

// // for(let key in course){
// //     console.log(key);
// // }


// Object.entries(course).forEach(function(val){
//     console.log(val[0] + ": " + val[1]);
// });


// const orginal = {a: 1, b: 2};
// const copy = {...orginal};

// deep cole the obj1 safely
// const obj1 = {info : {socre : 80}};
// let newobj =  JSON.parse(JSON.stringify(obj1));


// rewrite thi using option al chiang

// const person = {};
// console.log(person?.profile?.name);


// use a variblae dynamicalay assing a proerty

// const key = "role";
//  let obj = {
//     name : "Munin",
//     [key] : "admin",
// };
