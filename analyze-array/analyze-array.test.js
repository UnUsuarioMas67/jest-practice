const analyzeArray = require('./analyze-array.js');

test('returns an object containing information about the array', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  expect(result).toEqual(expected);

  const result2 = analyzeArray([50, 12, 9.42, -4, 13, -18, -7, 20]);
  const expected2 = {
    average: 9.4275,
    min: -18,
    max: 50,
    length: 8,
  };

  expect(result2).toEqual(expected2);
});

test('works with empty arrays', () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test('does not accept arrays with non number values', () => {
  expect(() => analyzeArray([0, 7, 'hello', 31, false])).toThrow();
});
