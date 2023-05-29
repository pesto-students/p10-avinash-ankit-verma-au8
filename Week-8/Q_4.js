// Given an expression string x. Examine whether the pairs and the orders
// of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function
// should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”
class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  peak() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
  }
}

var isValid = function (s) {
  const comp = { ")": "(", "}": "{", "]": "[" };
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (Object.values(comp).includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (comp[s[i]] === stack.peak()) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
};
