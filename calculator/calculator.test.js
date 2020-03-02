const calculator = require("./calculator");

test("add 10 + 25", () => {
  expect(calculator.add(10, 25)).toBe(35);
});

test("subtract 2 numbers", () => {
  expect(calculator.subtract(100, 27)).toBe(73);
});

test("multiply 2 numbers", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test("divide 2 numbers", () => {
  expect(calculator.divide(100, 5)).toBe(20);
});
