export const lifeExpectancyCalculator = (age, expectancy) => {
  let lifeLeft = (expectancy - age);
  if (lifeLeft < 0) {
    let absLifeLeft =  ("You have lived " + (Math.abs(lifeLeft)) + " years past your expectancy!");
    return absLifeLeft;
  }
  return lifeLeft;
};



export const mercuryLifeExpectCalc = (mAge, expectancy) => {
  let mercuryLifeLeft = (expectancy - mAge);
  if (mercuryLifeLeft < 0) {
    let absMercLife = ("You have lived " + (Math.abs(mercuryLifeLeft)) + " years past your expectancy!");
    return absMercLife;
  }
  return mercuryLifeLeft;
};

export const venusLifeExpectCalc = (vAge, expectancy) => {
  let venusLifeLeft = (expectancy - vAge);
  if (venusLifeLeft < 0) {
    let absVenusLife = ("You have lived " + (Math.abs(venusLifeLeft)) + " years past your expectancy!");
    return absVenusLife;
  }
  return venusLifeLeft;
};

export const marsLifeExpectCalc = (marsAge, expectancy) => {
  let marsLifeLeft = (expectancy - marsAge);
  if (marsLifeLeft < 0) {
    let absMarsLife = ("You have lived " + (Math.abs(marsLifeLeft)) + " years past your expectancy!");
    return absMarsLife;
  }
  return marsLifeLeft;
};

export const jupiterLifeExpectCalc = (jAge, expectancy) => {
  let jupiterLifeLeft = (expectancy - jAge);
  if (jupiterLifeLeft < 0) {
    let absJupiterLife = ("You have lived " + (Math.abs(jupiterLifeLeft)) + " years past you expectancy!");
    return absJupiterLife;
  }
  return jupiterLifeLeft;
};