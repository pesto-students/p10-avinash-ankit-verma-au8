function doTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 done");
      resolve();
    }, 1000);
  });
}

function doTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 done");
      resolve();
    }, 2000);
  });
}

function doTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 done");
      resolve();
    }, 1500);
  });
}

async function executeTasksAsync() {
  try {
    console.log("Executing tasks asynchronously...");
    await doTask1();
    await doTask2();
    await doTask3();
    console.log("All tasks done!");
  } catch (error) {
    console.error(error);
  }
}

function* executeTasksGenerator() {
  try {
    console.log("Executing tasks using generators...");
    yield doTask1();
    yield doTask2();
    yield doTask3();
    console.log("All tasks done!");
  } catch (error) {
    console.error(error);
  }
}

// Execute tasks using async/await
executeTasksAsync();

// Execute tasks using generators
const taskGenerator = executeTasksGenerator();
taskGenerator.next();
taskGenerator.next();
taskGenerator.next();
