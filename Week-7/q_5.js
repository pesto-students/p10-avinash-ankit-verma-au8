/**Given an one-dimensional unsorted array A containing N integers.You are also
 * given aninteger B, find if there exists a pair of elements in the array whose
 * difference is B.Return1 if any such pair exists else return 0.
 * Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
 * Input Format First argument is an integer array A of size N. Second argument
 * is aninteger B.Output Format Return 1 if any such pair exists else return 0.
 * Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78
 * Output 1: 1
 */

function findPair(arr, B) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const compliment1 = arr[i] + B;
    const compliment2 = arr[i] - B;
    if (map.has(compliment1) || map.has(compliment2)) {
      return 1;
    } else {
      map.set(arr[i], i);
    }
  }
  return -1;
}
