let students = [
  { name: 'Alice', age: 22, scores: [78, 85, 92] },
  { name: 'Bob', age: 20, scores: [88, 90, 76] },
  { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

function topStudent(students) {
  let topper = null;
  let highestAvg = -Infinity;

  for (let student of students) {
    let total = 0;

    // add up all scores
    for (let score of student.scores) {
      total += score;
    }

    let avg = total / student.scores.length;

    // update if this avg is higher than current best
    if (avg > highestAvg) {
      highestAvg = avg;
      topper = student;
    }
  }

  console.log("Top Student: " + topper.name + " with an average score of " + highestAvg.toFixed(2));
}

topStudent(students);