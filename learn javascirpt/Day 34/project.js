// student result / result checker

let student_marks = Number(prompt("Enter your marks:"));

const total_marks = 100;

let total_attandence = Number(prompt("enter your total attandance: "));

let assignmentInput = prompt("Did you submit the assignment? (yes/no)");

let isSubmitted_assingment = assignmentInput === "yes";

let number_warning = Number(prompt("number of warnings: "));

let student_percentage = (student_marks / total_marks) * 100;
console.log("your exam percentage : ", student_percentage);

number_warning += 1; // default warning

// giving the final reslut

let final_result =
  student_percentage >= 90 && student_percentage <= 100
    ? "A+"
    : student_percentage >= 85 && student_percentage <= 90
    ? "A"
    : student_percentage >= 70 && student_percentage <= 85
    ? "B"
    : student_percentage < 70
    ? "C"
    : "fail-Batard";

console.log("your final result", final_result);
console.log("total percentage : ", student_percentage);
console.log("number of warnings: ", number_warning);
console.log("total attandance : ", total_attandence);
console.log("submitted assingment or not : ", isSubmitted_assingment);
