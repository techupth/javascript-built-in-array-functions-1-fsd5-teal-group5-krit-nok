const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

let totalAverageStudentScore = students.reduce(function (getAverageStudentScore, students){
  return getAverageStudentScore + students.score / 4;
}, 0);

console.log(totalAverageStudentScore); // Output: 87.5
