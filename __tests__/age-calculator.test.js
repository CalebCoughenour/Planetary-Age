import { AgeObject, convertToEarthDays } from '../src/js/age-calculator.js';

describe('ageObject', () => {

  test('should receive age input and save it in object')
  let age = new AgeObject(29);
  expect(age).toEqual(29);
});

describe('convertToEarthDays', () => {

  test('should receive age as input and save as age variable', () => {
    let totalDays = convertToEarthDays(29);
    let totalAge = totalDays / 365;
    expect(totalAge).toEqual(29);
  });

  test('should multiply age by 365 to get Earth days relating to age', () => {
    let earthDaysAlive = convertToEarthDays(29);
    expect(earthDaysAlive).toEqual(10585);
  });


});