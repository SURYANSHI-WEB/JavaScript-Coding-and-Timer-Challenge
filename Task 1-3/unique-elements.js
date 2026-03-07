// Returns elements that appear in only one of the two arrays
function getUniqueElements(arr1, arr2) {
  // Merge both arrays into one
  let combined = arr1.concat(arr2);
  let unique = [];

  for (let item of combined) {
    // Keep item only if it's missing from one of the arrays
    if (!arr1.includes(item) || !arr2.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

console.log(getUniqueElements(a, b)); // Output: [1, 2, 5, 6]
