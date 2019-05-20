import makeGame from '..';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return brainGcd(b, a % b);
};

const gcdQuestion = (a, b) => `${a} ${b}`;

const gcd = () => {
  const number1 = randomNum(1, 30) * randomNum(1, 30);
  const number2 = randomNum(1, 30) * randomNum(1, 30);
  const answer = brainGcd(number1, number2);
  const question = gcdQuestion(number1, number2);
  return [answer, question];
};

export default () => {
  makeGame(gcd, description);
};
