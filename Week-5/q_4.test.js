const mathOperations = require("./q_4");

describe("Maths operations", () => {
  it("should add two numbers", () => {
    const a = 5;
    const b = 10;
    expect(mathOperations.sum(a, b)).toEqual(15);
  });
  it("should subtract numbers", () => {
    const a = 5;
    const b = 10;
    expect(mathOperations.diff(a, b)).toEqual(-5);
  });
  it("should multiply numbers", () => {
    const a = 5;
    const b = 10;
    expect(mathOperations.product(a, b)).toEqual(50);
  });
});
