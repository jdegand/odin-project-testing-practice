const analyze = require('./array');

test('average works', () => {
  expect(analyze.average([10,20,20,50])).toBe(25);
});

test('min works', () => {
  expect(analyze.min([10,20,20,50])).toBe(10);
});

test('max works', () => {
  expect(analyze.max([10,20,20,50])).toBe(50);
});

test('length works', () => {
  expect(analyze.length([10,20,20,50])).toBe(4);
});
