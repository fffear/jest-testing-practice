const calculator = (() => {
  add = (a, b) => a + b;
  subtract = (a, b) => a - b;
  multiply = (a, b) => a * b;
  divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
})();

module.exports = calculator;
