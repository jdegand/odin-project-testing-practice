const reverseString = require('./reverseString');

test('string is reversed', () => {
  expect(reverseString('string')).toBe('gnirts');
});
