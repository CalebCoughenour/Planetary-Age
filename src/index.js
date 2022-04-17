import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeObject from '../src/js/age-calculator.js';
import { lifeExpectancyCalculator, marsLifeExpectCalc, mercuryLifeExpectCalc, venusLifeExpectCalc, jupiterLifeExpectCalc } from './js/life-expectancy';


const earthExpectancy = (age, expectancy) => {
  if (age <= expectancy) {
  let earthExpectancy = lifeExpectancyCalculator(age, expectancy);
  return (`You have ${earthExpectancy} Earth years left!`);
  }
  else {
    return lifeExpectancyCalculator(age, expectancy);
  }
}

const mercuryExpectancy = (age, expectancy) => {
  if (age <= expectancy) {
    let mercuryExpectancy = mercuryLifeExpectCalc(age, expectancy);
    return (`You have ${mercuryExpectancy} Mercury years left!`);
  } else {
    return mercuryLifeExpectCalc(age, expectancy);
  }
}

const venusExpectancy = (age, expectancy) => {
  if (age <= expectancy) {
    let venusExpectancy = venusLifeExpectCalc(age, expectancy);
    return (`You have ${venusExpectancy} Venus years left!`);
  } else { 
    return venusLifeExpectCalc(age, expectancy);
  }
}

const marsExpectancy = (age, expectancy) => {
  if (age <= expectancy) {
    let marsExpectancy = marsLifeExpectCalc(age, expectancy);
    return (`You have ${marsExpectancy} Mars years left!`);
  } else {
    return marsLifeExpectCalc(age, expectancy);
  }
}

const jupiterExpectancy = (age, expectancy) => {
  if (age <= expectancy) {
    let jupiterExpectancy = jupiterLifeExpectCalc(age, expectancy);
    return (`You have ${jupiterExpectancy} Jupiter years left!`);
  } else {
    return jupiterLifeExpectCalc(age, expectancy);
  }
}




$('#user-input').submit(function(e) {
  e.preventDefault();
  $('ul').show();
  const userAge = $('#users-age').val();
  const userLifeExpec = $('#users-expec').val();
  let userInput = new AgeObject(userAge, userLifeExpec);
  userInput.convertToEarthDays();
  let mercuryAge = userInput.convertToMercuryAge();
  let venusAge = userInput.convertToVenusAge();
  let marsAge = userInput.convertToMarsAge();
  let jupiterAge = userInput.convertToJupiterAge();
  $('#earth-age').text(`You're Earth age is ${userInput.age} which is ${userInput.days} days!`);
  $('#mercury-age').text(`Your age on Mercury is ${mercuryAge}`);
  $('#venus-age').text(`Your age on Venus is ${venusAge}`);
  $('#mars-age').text(`Your age on Mars is ${marsAge}`);
  $('#jupiter-age').text(`Your age on Jupiter is ${jupiterAge}`);

  $('#earth-expectancy').text(earthExpectancy(userInput.age, userInput.expectancy));
  $('#mercury-expectancy').text(mercuryExpectancy(mercuryAge, userInput.expectancy));
  $('#venus-expectancy').text(venusExpectancy(venusAge, userInput.expectancy));
  $('#mars-expectancy').text(marsExpectancy(marsAge, userInput.expectancy));
  $('#jupiter-expectancy').text(jupiterExpectancy(jupiterAge, userInput.expectancy));
});