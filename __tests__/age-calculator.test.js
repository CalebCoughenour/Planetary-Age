import { convertToDays } from '../src/js/age-calculator.js';

describe('convertToDays', () => {

  test('should receive age as input and save as age variable', () => {
    let age = convertToDays(29);
    expect(age).toEqual(29);
  });

  test('should multiply age by 365 to get Earth days relating to age', () => {
    let earthDaysAlive = convertToDays(29);
    expect(earthDaysAlive).toEqual(10,585);
  });
});