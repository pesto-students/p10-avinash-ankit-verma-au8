/**Given an m x n matrix, return all elements of the matrix in spiral order.
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
   Output: [1,2,3,6,9,8,7,4,5]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  let left = 0;
  const m = matrix[0].length;
  const n = matrix.length;
  let right = m - 1;
  let top = 0;
  let bottom = n - 1;
  let count = 0;

  outerLoop: while (top <= bottom && left <= right) {
    //left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
      count++;
    }
    top++;
    if (count >= m * n) {
      break outerLoop;
    }

    //top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
      count++;
    }
    right--;
    if (count >= m * n) {
      break outerLoop;
    }

    //right to left
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
      count++;
    }
    bottom--;
    if (count >= m * n) {
      break outerLoop;
    }

    //bottom to top
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
      count++;
    }
    left++;
    if (count >= m * n) {
      break outerLoop;
    }
  }
  return result;
};
