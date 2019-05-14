import { greeting, game } from '..';

const brainGcd = (z, x, c, a, b) => {
  if (b === 0) {
    return a;
  }
  return brainGcd(z, x, c, b, a % b);
};

const questionGcd = (z, x, c, a, b) => {
  console.log(`Question: ${a} ${b}`);
};

const gcdRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const gameGcd = () => {
  greeting(gcdRules);
  game(brainGcd, questionGcd);
};

export default gameGcd;
