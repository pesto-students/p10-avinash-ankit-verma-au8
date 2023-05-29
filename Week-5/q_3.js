/**Write a function called hasDuplicate which accepts an array and
 * returns true or false if that array contains a duplicate */

function hadDuplicate(arr) {
  const elementsSet = new Set(arr);
  return arr.length > elementsSet.size;
}

console.log(hadDuplicate([1, 2, 3, 4]));
console.log(hadDuplicate([1, 2, 3, 4, 4]));
