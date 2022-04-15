export const lifeExpectancyCalculator = (age, expectancy) => {
  let lifeLeft = (expectancy - age);
  return lifeLeft;
}