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

var MyQueue = function () {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.isEmpty()) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.isEmpty()) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.isEmpty() && this.stack2.isEmpty();
};
