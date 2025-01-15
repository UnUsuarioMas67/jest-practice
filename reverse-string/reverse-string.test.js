const reverseString = require('./reverse-string');

test('function exists', () => {
  expect(typeof reverseString).toBe('function');
});

test('returns the string reversed', () => {
  expect(reverseString('Maurice')).toBe('eciruaM');
  expect(reverseString('RaceCar')).toBe('raCecaR');
  expect(reverseString('metroid')).toBe('diortem');
});
