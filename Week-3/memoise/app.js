/** Question-1 */
const memoise = (func) => {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("returning from cache");
      return cache[key];
    }
    const result = func(args);
    cache[key] = result;
    return result;
  };
};

const sum = (numbers) => {
  const result = numbers.reduce((total, currVal, currIndex, arr) => {
    return total + currVal;
  }, 0);
  return result;
};

const memoisedSum = memoise(sum);
const result1 = memoisedSum(1, 2);
console.log({ result1 });
const result2 = memoisedSum(1, 2);
console.log({ result2 });
const result3 = memoisedSum(1, 2, 3);
console.log({ result3 });
const result4 = memoisedSum(1, 2, 7);
console.log({ result4 });
const result5 = memoisedSum(1, 2, 7);
console.log({ result5 });
const result6 = memoisedSum(7, 2, 1);
console.log({ result6 });
