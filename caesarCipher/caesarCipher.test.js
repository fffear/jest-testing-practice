const caesarCipher = require("./caesarCipher");

test("leaves characters that are spaces", () => {
  expect(caesarCipher("attack on titan", 5)).toBe("fyyfhp ts ynyfs");
});

test("can shift ascii code by shift key factor", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("can shift ascii code by negative shift key factor", () => {
  expect(caesarCipher("a", -1)).toBe("z");
});

test("can cipher with a large negative shift key factor", () => {
  expect(caesarCipher("Hello, World!", -30)).toBe("Dahhk, Sknhz!");
});

test("Leaves characters that are not letters", () => {
  expect(
    caesarCipher("The quick, brown fox jumped over the lazy dog!", 5)
  ).toBe("Ymj vznhp, gwtbs ktc ozruji tajw ymj qfed itl!");
});

test("can accept a shift factor greater than 26", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});
