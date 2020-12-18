// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

let value1 = ""
let value2 = ""

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below




// create two inputs
// create a function that when inputs are typed in is called and save inputs to two different global variables
// create a button
// create a function, that when button is clicked, displays the results of rpsFunction



const storeHand = (id, value) => {
  if (id == "first-hand") {
    value1 = value
  } else if (id == "second-hand") {
    value2 = value
  }

}

const displayResults = (value1, value2) => {
  if (value1 && value2) {
    document.getElementById("display-element").innerHTML = rockPaperScissors(value1, value2)
  } else {
    return document.getElementById("display-element").innerHTML = "nah fam"
  }
}



const rockPaperScissors = (firstHand, secondHand) => {
  let hand1 = firstHand.toLowerCase().trim()
  let hand2 = secondHand.trim().toLowerCase()

  if (hand1 === 'rock' && hand2 === 'rock') {
    return "It's a tie!"
  }  
  if (hand1 === 'paper' && hand2 === 'paper') {
    return "It's a tie!"
  }
  if (hand1 === 'scissors' && hand2 === 'scissors') {
    return "It's a tie!"
  }
  if (hand1 === 'rock' && hand2 === 'paper') {
    return "Hand two wins!"
  }
  if (hand1 === 'paper' && hand2 === 'scissors') {
    return "Hand two wins!"
  }
  if (hand1 === 'scissors' && hand2 === 'rock') {
    return "Hand two wins!"
  }
  if (hand1 === 'paper' && hand2 === 'rock') {
    return "Hand one wins!"
  }
  if (hand1 === 'rock' && hand2 === 'scissors') {
    return "Hand one wins!"
  }
  if (hand1 === 'scissors' && hand2 === 'paper') {
    return "Hand one wins!"
  }

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should test for input before next turn', () => {
      assert.equal(rockPaperScissors(undefined, 'paper'), "Hand two wins! but only because hand1 belongs to an idiot who can't follow instructions");
      assert.equal(rockPaperScissors('Paper', undefined), "Hand one wins! because hand2 doesn't wanna play apparently.");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
