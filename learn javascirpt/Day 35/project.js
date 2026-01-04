// Number analyser project

let start_value = Number(prompt("enter your starting number: "));
let end_value = Number(prompt("enter your ending number: "));

let total_even = 0;
let total_odd = 0;
let total_sum = 0;

for(let i = start_value; i<= end_value; i++){
    if(i%2 === 0){
        total_even++;
    } else{
        total_odd++;
    }
    total_sum = total_sum + i;
}

console.log(total_even);
console.log(total_odd);
console.log(total_sum);