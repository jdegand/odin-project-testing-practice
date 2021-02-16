const caesarCipher = require('./caesar-cipher');

test('encipher works', () => {
  expect(caesarCipher.encipher('abc', 3)).toBe('def');
});

test('encipher 0 works', () => {
  expect(caesarCipher.encipher('abc', 0)).toBe('abc');
});

test('encipher zero works', () => {
  expect(caesarCipher.encipher('ABC', 0)).toBe('ABC');
});

test('encipher 1 works', () => {
  expect(caesarCipher.encipher('ABC', 1)).toBe('BCD');
});

test('encipher 2 works', () => {
  expect(caesarCipher.encipher('AbC', 1)).toBe('BcD');
});

test('decipher works', () => {
  expect(caesarCipher.decipher('def', 3)).toBe('abc');
});

test('decipher backwards works', () => {
  expect(caesarCipher.decipher('aaa', 3)).toBe('xxx');
});

test('decipher backwards uppercase works', () => {
  expect(caesarCipher.decipher('AAA', 3)).toBe('XXX');
});
