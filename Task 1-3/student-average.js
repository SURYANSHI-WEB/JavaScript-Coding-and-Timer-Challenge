// Array of student objects with name, age, and scores
let students = [
  { name: 'Alice', age: 22, scores: [78, 85, 92] },
  { name: 'Bob', age: 20, scores: [88, 90, 76] },
  { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

// Finds and logs the student with the highest average score
function topStudent(students) {
  let topper = null;
  let highestAverage = -Infinity;

  // Loop through each student
  for (let student of students) {
    let total = 0;

    // Add up all scores for this student
    for (let score of student.scores) {
      total += score;
    }

    // Calculate average by dividing total by number of scores
    let average = total / student.scores.length;

    // Update topper if this student's average is the highest so far
    if (average > highestAverage) {
      highestAverage = average;
      topper = student;
    }
  }

  console.log("Top Student: ", topper.name, "with average score: ", highestAverage);
}

topStudent(students);
