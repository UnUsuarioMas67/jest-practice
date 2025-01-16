const analyzeArray = function (arr) {
  for (let item of arr) {
    if (isNaN(item)) throw new Error('Array must only contain number values');
  }

  if (arr.length === 0)
    return {
      average: null,
      min: null,
      max: null,
      length: 0,
    };

  const sorted = arr.toSorted((a, b) => a - b);
  const min = sorted[0];
  const max = sorted[sorted.length - 1];
  const average = arr.reduce((prev, curr, index) => {
    const result = prev + curr;
    if (index === arr.length - 1) return result / arr.length;
    return result;
  });

  return { min, max, average, length: arr.length };
};

module.exports = analyzeArray;
