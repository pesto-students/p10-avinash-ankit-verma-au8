/**Sort array of 0's,1's and 2'sGiven an array of size N containing only 0s, 1s,
 * and 2s; sort the array in ascendingorder.
 * Example 1:Input:N = 5arr[]= {0 2 1 2 0}Output:0 0 1 2 2
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      swap(nums, mid, high);
      high--;
    }
  }
};

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
