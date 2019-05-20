import makeGame from '..';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];
const count = operations.length;
const operator = num => operations[num];

const calculator = (a, b, sign) => {
  let expression;
  switch (sign) {
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

const calcQuestion = (a, b, c) => `${a} ${c} ${b}`;

const calc = () => {
  const number1 = randomNum(1, 100);
  const number2 = randomNum(1, 100);
  const gameOperator = operator(randomNum(0, count));
  const answer = calculator(number1, number2, gameOperator);
  const question = calcQuestion(number1, number2, gameOperator);
  return [answer, question];
};

export default () => makeGame(calc, description);
