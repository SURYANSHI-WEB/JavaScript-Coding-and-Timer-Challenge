function getUniqueElements(arr1, arr2) {
  let combined = arr1.concat(arr2);
  let unique = [];

  // keep item only if it's not in both arrays
  for (let item of combined) {
    if (!arr1.includes(item) || !arr2.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

console.log(getUniqueElements(a, b));