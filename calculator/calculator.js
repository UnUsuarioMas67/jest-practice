const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => {
  if (b === 0) throw new Error('Divided by Zero');

  return a / b;
};

module.exports = { add, sub, mult, div };
