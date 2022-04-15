import AgeObject from '../src/js/age-calculator.js';
import { lifeExpectancyCalculator } from '../src/js/life-expectancy.js';

describe('lifeExpectancyCalculator', () => {
  let age;

  beforeEach(() => {
    age = new AgeObject(29, 80);
  });

  test('should calculate how many years are left between life expectancy', () => {
    let lifeLeft = lifeExpectancyCalculator(29, 80);
    expect(lifeLeft).toEqual(51);    
  });
});