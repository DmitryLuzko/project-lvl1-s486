import makeGame from '..';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

const oper = ['+', '-', '*'];
const count = oper.length;
const randomOperator = num => oper[num];

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
  const game = isCalc(number1, number2, operator);
  const question = questionCalc(number1, number2, operator);
  return [game, question];
};

export default () => makeGame(calc, description);
