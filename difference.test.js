const difference = require('./difference');

test('subtracts 2 from 5 to be equal to 3', () => {
  expect(difference(5, 2)).toBe(3);
});