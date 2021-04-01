// const { test } = require('@jest/globals');
// const { expect } = require('@jest/globals');
const reverseString = require('./reverseString');

test("reverses the word 'keyboard'", () => {
  expect(reverseString("keyboard")).toBe("draobyek");

});