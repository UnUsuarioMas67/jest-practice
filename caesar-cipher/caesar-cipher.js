const caesarCipher = function (str, key = 3) {
  const chars = str.split('');
  const output = chars
    .map((c) => {
      const code = c.charCodeAt(0);
      cipherCode = code;

      // lowercase letters
      if (code >= 97 && code < 123) {
        cipherCode = wrapValue(code + key, 97, 123);
      }
      // uppercase letters
      else if (code >= 65 && code < 91) {
        cipherCode = wrapValue(code + key, 65, 91);
      }

      return String.fromCharCode(cipherCode);
    })
    .join('');

  return output;
};

const wrapValue = function (value, min, max) {
  const length = max - min;
  return value > min ? ((value - min) % length) + min : value + length;
};

module.exports = caesarCipher;
