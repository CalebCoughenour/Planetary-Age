import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { lifeExpectancyCalculator, mercuryLifeExpectCalc, venusLifeExpectCalc, marsLifeExpectCalc, jupiterLifeExpectCalc } from '../src/js/life-expectancy.js';
import AgeObject from '../src/js/age-calculator.js';

$('#user-input').submit(function(e) {
  e.preventDefault();
  const userAge = $('#users-age').val();
  const userLifeExpec = $('#users-expec').val();
  let userInput = new AgeObject(userAge, userLifeExpec);
  userInput.convertToEarthDays();
  $('#earth').text("You're Earth age is " + userInput.age + " which is " + userInput.days);
});