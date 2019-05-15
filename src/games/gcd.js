import { game, makeGame } from '..';

const gcdRules = 'Find the greatest common divisor of given numbers.';

const brainGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return brainGcd(b, a % b);
};

const questionGcd = (a, b) => `${a} ${b}`;

const gcd = () => {
  const num = (Math.floor(Math.random() * 30) + 1);
  const num1 = (Math.floor(Math.random() * 30) + 1) * num;
  const num2 = (Math.floor(Math.random() * 30) + 1) * num;
  game(brainGcd(num1, num2), questionGcd(num1, num2));
};

const gameGcd = () => {
  makeGame(gcd, gcdRules);
};

export default gameGcd;
