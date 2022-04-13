'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number 😁🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/
//usefull functions

const randomNum = function (n) {
  n = Math.trunc(Math.random() * 20) + 1;
  return n;
};

const displayText = function (text, c) {
  return (document.querySelector(c).textContent = text);
};

const displayV = function (text, c) {
  return (document.querySelector(c).value = text);
};

const displayB = function (text, c) {
  return (document.querySelector(c).style.backgroundColor = text);
};

const displayW = function (text, c) {
  return (document.querySelector(c).style.width = text);
};

//the secret number
let numbers = randomNum(20);
//updating it just for testing
console.log(numbers);

//score variable
let score = Number(document.querySelector('.score').textContent);

//high score variable
let highScore = Number(document.querySelector('.highscore').textContent);

//the button check
document.querySelector('.check').addEventListener('click', function () {
  //the guess number
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //no number entered

    displayText('No number entered 🙌', '.message');
  } else if (guess === numbers) {
    //changing the style of the page
    displayB('#60b347', 'body');
    displayW('30rem', '.number');

    //correct number
    //showing the actual number
    displayText(numbers, '.number');

    displayText('🎉 correct number !', '.message');

    //updating the high score
    if (highScore <= score) {
      highScore = score;
      displayText(highScore, '.highscore');
    }
  } else {
    //number too low
    if (score > 1) {
      displayText(
        guess > numbers ? '↗ number too high' : '↘ number too low',
        '.message'
      );
      score--;
      displayText(score, '.score');
    } else {
      //game over
      displayText(numbers, '.number');
      displayText('You lost the game :(', '.message');
      displayText(0, '.score');
      //changing the style
      displayB('#FF0000', 'body');
    }
  }
});

//the button again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayText(score, '.score');
  numbers = randomNum(20);
  console.log(numbers);
  displayText('?', '.number');
  displayV('', '.guess');
  displayB('#222', 'body');
  displayW('15rem', '.number');
  displayText('start guessing ...', '.message');
});
