import { game, makeGame } from '..';

const calcRules = 'What is the result of the expression?';

const brainCalc = (a, b, c) => {
  let expression;
  switch (c) {
    case '+':
      expression = a + b;
      break;
    case '-':
      expression = a - b;
      break;
    default:
      expression = a * b;
  }
  return expression;
};

const questionCalc = (a, b, c) => `${a} ${c} ${b}`;

const calc = () => {
  const num1 = (Math.floor(Math.random() * 100) + 1);
  const num2 = (Math.floor(Math.random() * 100) + 1);
  const oper = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * 3);
  const randomOper = oper[rand];

  game(brainCalc(num1, num2, randomOper), questionCalc(num1, num2, randomOper));
};

const gameCalc = () => {
  makeGame(calc, calcRules);
};

export default gameCalc;
