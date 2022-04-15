import AgeObject from './age-calculator.js';

export const lifeExpectancyCalculator = (age, expectancy) => {
  let lifeLeft = (expectancy - age);
  if (lifeLeft < 0) {
    let absLifeLeft =  ("You have lived " + (Math.abs(lifeLeft)) + " years past your expectancy!");
    return absLifeLeft;
  }
  return lifeLeft;
}



export const mercuryLifeExpectCalc = (mAge, expectancy) => {
    let mercuryLifeLeft = (mAge - expectancy);
    return mercuryLifeLeft;
}