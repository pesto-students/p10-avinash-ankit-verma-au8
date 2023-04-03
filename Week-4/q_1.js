function getNumber(resolveCb, rejectCb, waittime) {
  const randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber % 5 === 0) {
    setTimeout(() => rejectCb(randomNumber), waittime);
  } else {
    setTimeout(() => resolveCb(randomNumber), waittime);
  }
}

getNumber(
  (number) => console.log(`${number} not divisible by 5`),
  (number) => console.log(`${number} is divisible by 5`),
  1000
);
