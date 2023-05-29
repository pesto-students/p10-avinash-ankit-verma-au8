/**Write a function called vowelCount which accepts a string and returns a map where
 * the keys are numbers and the values are the count of the vowels in the string */
const vowels = "aeiou";
const str = "ankitverma";

function isVowel(char) {
  return vowels.includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let value of str) {
    if (isVowel(value)) {
      if (vowelMap.has(value)) {
        vowelMap.set(value, vowelMap.get(value) + 1);
      } else {
        vowelMap.set(value, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount(str));
