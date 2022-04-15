import { lifeExpectancyCalculator, mercuryLifeExpectCalc } from '../src/js/life-expectancy.js';
import AgeObject from '../src/js/age-calculator.js';

describe('lifeExpectancyCalculator', () => {

  let newAge;

  beforeEach(() => {
    newAge = new AgeObject(29, 80);
  });

  test('should calculate how many years are left between life expectancy for Earth years', () => {
    let lifeLeft = lifeExpectancyCalculator(29, 80);
    expect(lifeLeft).toEqual(51);    
  });

  test('should output how many years passed life expectancy a person is if their age is more than expectancy', () => {
    let lifeLeft = lifeExpectancyCalculator(85, 80);
    expect(lifeLeft).toEqual("You have lived 5 years past your expectancy!");
  });

  test('should calculate how many years are left between life expectancy for Mercury years', () => {
    newAge.convertToEarthDays();
    let mAge = newAge.convertToMercuryAge();
    let mercuryLifeLeft = mercuryLifeExpectCalc(mAge, 80);
    expect(mercuryLifeLeft).toEqual(40);
  });
});