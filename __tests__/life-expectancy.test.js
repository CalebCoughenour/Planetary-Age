import { lifeExpectancyCalculator } from '../src/js/life-expectancy.js';

describe('lifeExpectancyCalculator', () => {
  test('should calculate how many years are left between life expectancy', () => {
    let lifeLeft = lifeExpectancyCalculator(29, 80);
    expect(lifeLeft).toEqual(51);    
  });

  test('should output how many years passed life expectancy a person is if their age is more than expectancy', () => {
    let lifeLeft = lifeExpectancyCalculator(85, 80);
    expect(lifeLeft).toEqual("You have live 5 years past your expectancy!");
  });
});