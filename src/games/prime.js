import { game, makeGame } from '..';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = (a) => {
  if (a < 2) {
    return 'no';
  }
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionPrime = a => `${a}`;

const prime = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  game(brainPrime(num), questionPrime(num));
};

const gamePrime = () => {
  makeGame(prime, primeRules);
};

export default gamePrime;
