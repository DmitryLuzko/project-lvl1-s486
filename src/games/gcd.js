import makeGame from '..';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const isGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return isGcd(b, a % b);
};

const questionGcd = (a, b) => `${a} ${b}`;

const gcd = () => {
  const number = randomNum(1, 30);
  const number1 = randomNum(1, 30) * number;
  const number2 = randomNum(1, 30) * number;
  const game = isGcd(number1, number2);
  const question = questionGcd(number1, number2);
  return [game, question];
};

export default () => {
  makeGame(gcd, description);
};
