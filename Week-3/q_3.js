function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();

/**Logged value will be "count is 0" because count value is assigned message variable on calling
 * createIncrement not the reference(which happens in case of closures). So any increment to the count
 * variable, message variable will not be able to notice.
 */
