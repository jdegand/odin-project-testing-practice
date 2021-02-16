const capitalize = require('./capitalize');

test('first character is uppercased', () => {
  expect(capitalize('string')).toBe('String')
});
