import { greeting, game } from '..';

const brainCalc = (a, b, c) => {
  if (c === '+') {
    return a + b;
  }
  if (c === '-') {
    return a - b;
  }
  return a * b;
};

const questionCalc = (a, b, c) => {
  console.log(`Question: ${a} ${c} ${b}`);
};

const calcRules = () => {
  console.log('What is the result of the expression?');
};

const gameCalc = () => {
  greeting(calcRules);
  game(brainCalc, questionCalc);
};

export default gameCalc;
