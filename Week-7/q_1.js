/**Find the contiguous subarray within an array, A of length N which has the largest
 * sum.Input Format:The first and the only argument contains an integer array, A.
 * Output Format: Return an integer representing the maximum possible sum of the
 * contiguous subarray.
 * Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000
 * For example:Input 1: A = [1, 2, 3, 4, -10]
 * Output 1: 10
 * Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
 * Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output 2: 6
 * Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = -Number.MAX_VALUE;
  nums.map((element, i) => {
    sum += element;
    max = getMax(sum, max);
    if (sum < 0) {
      sum = 0;
    }
  });
  return max;
};

function getMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
