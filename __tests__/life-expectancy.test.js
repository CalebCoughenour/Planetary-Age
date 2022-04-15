import { lifeExpectancyCalculator, mercuryLifeExpectCalc, venusLifeExpectCalc, marsLifeExpectCalc, jupiterLifeExpectCalc } from '../src/js/life-expectancy.js';
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
    let testAge = new AgeObject(10, 80)
    testAge.convertToEarthDays();
    let mAge = testAge.convertToMercuryAge();
    let mercuryLifeLeft = mercuryLifeExpectCalc(mAge, 80);
    expect(mercuryLifeLeft).toEqual(39);
  });

  test('should output how many Mercury years passed life expectancy a person is if their age is more than expectancy', () => {
    newAge.convertToEarthDays();
    let mAge = newAge.convertToMercuryAge();
    let mercuryLifeLeft = mercuryLifeExpectCalc(mAge, 80);
    expect(mercuryLifeLeft).toEqual("You have lived 40 years past your expectancy!");
  });

  test('should calculate how many years are left between life expectancy for Venus years', () => {
    newAge.convertToEarthDays();
    let vAge = newAge.convertToVenusAge();
    let venusLifeLeft = venusLifeExpectCalc(vAge, 80);
    expect(venusLifeLeft).toEqual(33);
  });

  test('should output how many Venus years passed life expectancy a person is if their age is more than expectancy', () => {
    newAge.convertToEarthDays();
    let mAge = newAge.convertToVenusAge();
    let venusLifeLeft = venusLifeExpectCalc(mAge, 40);
    expect(venusLifeLeft).toEqual("You have lived 7 years past your expectancy!");
  });

  test('should calculate how many years are left between life expectancy for Mars years', () => {    
    newAge.convertToEarthDays();
    let marsAge = newAge.convertToMarsAge();
    let marsLifeLeft = marsLifeExpectCalc(marsAge, 80);
    expect(marsLifeLeft).toEqual(65);
  });

  test('should output how many Venus years passed life expectancy a person is if their age is more than expectancy', () => {
    newAge.convertToEarthDays();
    let marsAge = newAge.convertToMarsAge();
    let marsLifeLeft = marsLifeExpectCalc(marsAge, 14);
    expect(marsLifeLeft).toEqual("You have lived 1 years past your expectancy!");
  });

  test('should calculate how many years are left between life expectancy for Jupiter years', () => {   
    let testAge = new AgeObject(60, 1); 
    testAge.convertToEarthDays();
    let jAge = testAge.convertToJupiterAge();
    let jupiterLifeLeft = jupiterLifeExpectCalc(jAge, 1);
    expect(jupiterLifeLeft).toEqual(1);
  });

});