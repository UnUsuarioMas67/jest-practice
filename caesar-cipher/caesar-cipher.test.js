const caesarCipher = require('./caesar-cipher.js');

test('the string is being ciphered with the key', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
  expect(caesarCipher('maurice', 5)).toBe('rfzwnhj');
  expect(caesarCipher('goodbye', 1)).toBe('hppeczf');
});

test('defaults to 3 if the key is omitted', () => {
  expect(caesarCipher('hello')).toBe('khoor');
});

test('supports negative keys', () => {
  expect(caesarCipher('hello', -3)).toBe('ebiil');
});

test("wraps from 'z' to 'a' and viceversa", () => {
  expect(caesarCipher('xyz', 13)).toBe('klm');
  expect(caesarCipher('abc', -10)).toBe('qrs');
});

test('original lettercase is preserved', () => {
  expect(caesarCipher('HeLLo WORld', 3)).toBe('KhOOr ZRUog');
});

test('non-alphabetical characters are left unchanged', () => {
  expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!');
});
