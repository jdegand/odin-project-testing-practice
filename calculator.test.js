const calculator = require('./calculator');

test('multiply works', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('add works', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('divide works', () => {
  expect(calculator.divide(1,2)).toBe(0.5);
});

test('divide works', () => {
  expect(calculator.subtract(1,2)).toBe(-1);
});
