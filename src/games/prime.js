import { game, makeGame } from '..';
import { randomNum } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  if (a < 2) {
    return false;
  }
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

const questionPrime = a => `${a}`;

const prime = () => {
  const number = randomNum(1, 100);
  const func = isPrime(number) ? 'yes' : 'no';
  const ask = questionPrime(number);
  game(func, ask);
};

const gamePrime = () => {
  makeGame(prime, description);
};

export default gamePrime;
