import { convertToDays } from '../src/js/age-calculator.js';

describe('convertToDays', () => {
  test('should receive age as input and save as age variable', () => {
    let age = convertToDays(29);
    expect(age).toEqual(29);
  });
});