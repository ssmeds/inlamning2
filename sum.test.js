// const {
//   test,
//   expect
// } = require('@jest/globals');
const sum = require('./sum');

test('adds 1 and 2 to be equal to 3', () => {
  expect(sum(1, 2)).toBe(3);
});