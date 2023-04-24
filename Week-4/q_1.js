class MyPromise {
  constructor(executer) {
    this.resolvers = [];
    const resolve = (val) => {
      this.resolvedVal = val;
      if (this.resolvers.length) {
        this.resolvers.reduce((acc, fn) => fn(acc), this.resolvedVal);
      }
    };
    executer(resolve);
  }
  then(fn) {
    this.resolvers.push(fn);
    if (this.resolvers.length) {
      this.resolvers.reduce((acc, fn) => fn(acc), this.resolvedVal);
    }
    return this;
  }
}

const p1 = new MyPromise((resolve) => {
  const a = Math.ceil(Math.random() * 100);
  setTimeout(() => {
    resolve(a);
  }, 1000);
});

p1.then((val) => {
  return val * 2;
}).then((val) => {
  console.log({ val });
});
