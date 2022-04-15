import AgeObject from '../src/js/age-calculator.js';

describe('ageObject', () => {

  test('should receive age input and save it in object', () => {
  let age = new AgeObject(29);
  expect(age.age).toEqual(29);
  });
});

describe('convertToEarthDays', () => {
  let age;

  beforeEach(() => {
    age = new AgeObject(29);
  });

  test('should receive age as input and save as age variable', () => {
    let totalDays = age.convertToEarthDays();
    let totalAge = totalDays / 365;
    expect(totalAge).toEqual(29);
  });

  test('should multiply age by 365 to get Earth days relating to age', () => {
    let earthDaysAlive = age.convertToEarthDays();
    expect(earthDaysAlive).toEqual(10585);
  });

  test('should push total days alive to age object key this.days', () => {
    age.convertToEarthDays();
    expect(age.days).toEqual(10585)
  });
});

describe('convertToMercuryAge', () => {
  let age;

  beforeEach(() => {
    age = new AgeObject(29);
  });

  test('should divide total days alive by days for Mercury rotation(88)', () => {
    let mercuryAge = age.convertToMercuryAge();
    expect(mercuryAge).toEqual(120);
  });
});