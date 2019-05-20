import makeGame from '..';
import randomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  if (a < 2) {
    return false;
  }
  for (let i = 2; i < a / 2; i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

const primeQuestion = a => String(a);

const prime = () => {
  const number = randomNum(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = primeQuestion(number);
  return [answer, question];
};

export default () => {
  makeGame(prime, description);
};
