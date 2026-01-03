// write a function getgrade (score) that :
// . take a students marks (0 to 100)
// . return the grade based on this logic
// 90-100 A+
// 80 - 89 A
// 70 - 79 B
// 60 - 69 C
// 35 - 59 D
// 0 - 32 fail
// anything else invalid marks

function getgrade(score) {
  if (score >= 90 && score <= 100) return "A+";
  if (score >= 80 && score <= 89) return "A";
  if (score >= 70 && score <= 79) return "B";
  if (score >= 60 && score <= 69) return "C";
  if (score >= 35 && score <= 59) return "D";
  if (score >= 0 && score <= 32) return "fail";

  return "invalid marks";
}

console.log(getgrade(89));



// rock paper scissor logic

function rps(user,computer){
    if(user === computer) return "draw";

    if(user === "rock" && computer === "scrissor") return "user";
    if(user === "scissor" && computer === "paper") return "user";
    if(user === "paper" && computer === "rock") return "user";

return "computer";
    

}

console.log(rps("rock", "scissor"));