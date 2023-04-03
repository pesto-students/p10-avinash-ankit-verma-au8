function* fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  yield n1;
  yield n2;
  for (let i = 0; i < n - 2; i++) {
    let next = n1 + n2;
    yield next;
    n1 = n2;
    n2 = next;
  }
}

const f = fibonacci(6);
let result = f.next();
while (!result.done) {
  console.log(result.value);
  result = f.next();
}
