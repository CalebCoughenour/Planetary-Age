
export default class AgeObject {
  constructor(age, expect) {
    this.age = age;
    this.days = 0;
    this.expectancy = expect;
  }

  convertToEarthDays() {
    let receivedAge = this.age;
    let totalEarthDays = receivedAge * 365;
    this.days = totalEarthDays;
    return totalEarthDays;
  }

  convertToMercuryAge() {
    let mercuryAge = Math.round(this.days / 88);
    return mercuryAge;
  }
  
  convertToVenusAge() {
    let venusAge = Math.round(this.days / 225);
    return venusAge;
  }

  convertToMarsAge() {
    let marsAge = Math.round(this.days / 686);
    return marsAge;
  }

  convertToJupiterAge() {
    let jupiterAge = Math.round(this.days / 4344);
    return jupiterAge;  
  }
}

