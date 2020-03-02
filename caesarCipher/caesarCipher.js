function caesarCipher(string, key) {
  const shiftChar = (character, key) => {
    let charInAscii = character.charCodeAt();
    let shiftedCharInAscii;

    if (charInAscii >= 65 && charInAscii <= 90) {
      shiftedCharInAscii = ((((charInAscii - 65 + key) % 26) + 26) % 26) + 65;
    } else if (charInAscii >= 97 && charInAscii <= 122) {
      shiftedCharInAscii = ((((charInAscii - 97 + key) % 26) + 26) % 26) + 97;
    } else {
      shiftedCharInAscii = charInAscii;
    }

    return String.fromCharCode(shiftedCharInAscii);
  };

  const shiftCharInArray = (character, index) => {
    arrayOfString[index] = shiftChar(character, key);
  };

  let arrayOfString = string.split("");
  arrayOfString.forEach(shiftCharInArray);

  return arrayOfString.join("");
}

module.exports = caesarCipher;
