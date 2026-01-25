// simple expense tracker

let MyExpenses = [100, 120, 400, 500, 750];
let total = 0;
let higestExpense = MyExpenses[0];

for (let i = 0; i < MyExpenses.length; i++) {
  let value = MyExpenses[i];
  total = total + value;
  if (value > higestExpense) {
    higestExpense = value;
  }
}

console.log(total);
console.log(higestExpense);
