// Array of numbers to search through
let numbers = [23, 45, 67, 89, 12, 90, 44];

// -Infinity ensures any real number will be larger on first comparison
let largest = -Infinity;
let secondLargest = -Infinity;

// First pass: find the largest number
for (let num of numbers) {
  if (num > largest) {
    largest = num;
  }
}

// Second pass: find the largest number that is still less than the largest
for (let num of numbers) {
  if (num > secondLargest && num < largest) {
    secondLargest = num;
  }
}

console.log("Second Largest: ", secondLargest); // Output: 89
