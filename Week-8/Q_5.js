//Given an array arr{} of size N having distinct elements, the task is to find the
//next greater element for each element of the array in order of their appearance in
// the array.

class Stack {
  constructor() {
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
  }
  pop() {
    if (!this.isEmpty()) {
      return this.arr.pop();
    }
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.arr[this.arr.length - 1];
    }
  }
}

var nextGreaterElements = function (nums) {
  const stack = new Stack();
  const result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (stack.isEmpty()) {
      result[i] = -1;
    } else if (stack.peek() > nums[i]) {
      result[i] = stack.peek();
    } else {
      while (stack.peek() <= nums[i] || !stack.isEmpty()) {
        stack.pop();
      }
      if (stack.isEmpty()) {
        result[i] = -1;
      } else {
        result[i] = stack.peek();
      }
    }
    stack.push(nums[i]);
  }
  return result;
};
