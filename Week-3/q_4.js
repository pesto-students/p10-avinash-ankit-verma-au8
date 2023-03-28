function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
}

const stack = createStack();
stack.push(100);
stack.push(12);
stack.push(9);
stack.pop();
console.log(stack.items);

/** Refactored version with closure implementation */

function createStackWithClosure() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stackWithClosure = createStackWithClosure();

stackWithClosure.push(100);
stackWithClosure.push(12);
stackWithClosure.push(9);
stackWithClosure.pop();
console.log(stackWithClosure.items);
