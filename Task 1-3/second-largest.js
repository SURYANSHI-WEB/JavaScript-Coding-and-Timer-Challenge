let numbers = [23, 45, 67, 89, 12, 90, 44];

let largest = -Infinity;
let secondLargest = -Infinity;

// first find the biggest number
for (let num of numbers) {
  if (num > largest) {
    largest = num;
  }
}

// then find the biggest number that isn't the largest
for (let num of numbers) {
  if (num > secondLargest && num < largest) {
    secondLargest = num;
  }
}

console.log("Second Largest:", secondLargest);