/**
 * Task-1: Add 2 and 3
 * Task-2: Divide the result with 5
 * Task-3: Subtract 1 from result
 */

/** With async await */
// const doTask1 = async () =>
//   new Promise((resolve) => {
//     const result = 2 + 3;
//     resolve(result);
//   });

// const doTask2 = async (number) =>
//   new Promise((resolve) => {
//     const result = number / 5;
//     resolve(result);
//   });

// const doTask3 = async (number) =>
//   new Promise((resolve) => {
//     const result = number - 1;
//     resolve(result);
//   });

// const executeTasks = async () => {
//   const result = await doTask1();
//   const result2 = await doTask2(result);
//   const result3 = await doTask3(result2);
//   console.log(result3);
// };

// executeTasks();

/** With generators */

// function* doTask1Gen() {
//   const result = 2 + 3;
//   yield result;
// }

// function* doTask2Gen(number) {
//   const result = number / 5;
//   yield result;
// }

// function* doTask3Gen(number) {
//   const result = number - 1;
//   yield result;
// }

// function* executeTasksWithGenerators() {
//   const result = yield* doTask1Gen();
//   const result2 = yield* doTask2Gen(result);
//   yield* doTask3Gen(result2);
// }
// const taskGenerator = executeTasksWithGenerators();
// console.log(taskGenerator.next());
// console.log(taskGenerator.next(5));
