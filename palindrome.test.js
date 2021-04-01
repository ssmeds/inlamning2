// const {
//   test,
//   expect
// } = require('@jest/globals');
const palindrome = require('./palindrome');

test('anna is palindrome and should be true', () => {
  expect(palindrome("anna")).toBeTruthy()
});