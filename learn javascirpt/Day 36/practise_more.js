// Write a bmi calculator

function bmi(weight, height){
  return  weight / (height*height);
}

console.log(bmi(46,1.66).toFixed(2));


// create a reusable discount calculator

function discoutcalculator(discount){
    return function(price){
return price - price * (discount / 100);
    }
}

let discounter = discoutcalculator(10);
console.log(discounter (200));


// counter

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let c = counter();
 console.log(c());
 console.log(c());
 console.log(c());
 console.log(c());
 console.log(c());



 function pure(val){
return val * 2;
 }
console.log(  pure(5));


(function(){
    const password = "seceret password";
    console.log(password);
})();

// console.log(password);