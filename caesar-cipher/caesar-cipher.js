const caesarCipher = function (str, key = 3) {
  const chars = str.split('');
  const output = chars
    .map((c) => {
      const code = c.charCodeAt(0);
      let min = 0;
      let max = 0;

      // lowercase letters
      if (code >= 97 && code < 123) {
        min = 97;
        max = 123;
      }
      // uppercase letters
      else if (code >= 65 && code < 91) {
        min = 65;
        max = 91;
      }
      // if not a letter return the original character
      else {
        return c;
      }

      const sum = code + key;
      const length = max - min;
      const cipherCode = sum > min ? ((sum - min) % length) + min : sum + length;

      return String.fromCharCode(cipherCode);
    })
    .join('');

  return output;
};

module.exports = caesarCipher;
