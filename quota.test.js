const quota = require('./quota');

test('divides 6 with 2, to be equal to 3', () => {
  expect(quota(6, 2)).toBe(3);
});