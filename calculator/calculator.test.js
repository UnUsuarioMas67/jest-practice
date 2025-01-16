const calculator = require('./calculator.js');

test('should be able to add two number', () => {
  expect(calculator.add(5, 5)).toBe(10);
  expect(calculator.add(54, 63)).toBe(117);
  expect(calculator.add(5.12, 3.01)).toBeCloseTo(8.13);
});

test('should be able to subtract two numbers', () => {
  expect(calculator.sub(125, 25)).toBe(100);
  expect(calculator.sub(43, 37)).toBe(6);
  expect(calculator.sub(81, 81)).toBe(0);
});

test('substraction result should be negative if a is less than b', () => {
  expect(calculator.sub(27, 46)).toBe(-19);
});

test('should be able to multiply two numbers', () => {
  expect(calculator.mult(27, 7)).toBe(189);
  expect(calculator.mult(13, 20)).toBe(260);
});

test('multiplying a negative number and a positive number returns a negative result', () => {
  expect(calculator.mult(2, -2)).toBe(-4);
});

test('multiplying two negative numbers returns a positive result', () => {
  expect(calculator.mult(-3, -10)).toBe(30);
});

test('multiplying by zero should return zero', () => {
  expect(calculator.mult(1120, 0)).toBe(0);
});

test('should be able to divide two numbers', () => {
  expect(calculator.div(24, 6)).toBe(4);
  expect(calculator.div(189, 27)).toBe(7);
  expect(calculator.div(40, 6)).toBeCloseTo(6.66666666666666);
  expect(calculator.div(6, 40)).toBeCloseTo(0.15);
});

test('dividing zero by another number should return zero', () => {
  expect(calculator.div(0, 6)).toBe(0);
});

test('dividing by zero should throw an error', () => {
  expect(() => calculator.div(6, 0)).toThrow();
});
