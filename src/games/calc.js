import { game, makeGame } from '..';
import { randomNum, randomOperator, count } from '../utils';

const description = 'What is the result of the expression?';

const isCalc = (a, b, c) => {
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
  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  const operator = randomOperator(randomNum(0, count));
  const func = isCalc(number1, number2, operator);
  const ask = questionCalc(number1, number2, operator);
  game(func, ask);
};

const gameCalc = () => {
  makeGame(calc, description);
};

export default gameCalc;
