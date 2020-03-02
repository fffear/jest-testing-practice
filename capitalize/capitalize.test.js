const capitalize = require("./capitalize");

test("capitalizes 1st letter of a string", () => {
  expect(capitalize("comic")).toBe("Comic");
});
