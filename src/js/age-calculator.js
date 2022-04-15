
export default class AgeObject {
  constructor(age) {
    this.age = age;
  }

  convertToEarthDays() {
    let receivedAge = this.age;
    let totalEarthDays = receivedAge * 365;
    return totalEarthDays;
  }
}

