const capitalize = require('./capitalize.js');

test('function exists', () => {
  expect(typeof capitalize).toBe('function');
});

test('capitalizes the first character', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('mauRice')).toBe('MauRice');
  expect(capitalize('vaca')).toBe('Vaca');
  expect(capitalize('gOODBYE')).toBe('GOODBYE');
});
