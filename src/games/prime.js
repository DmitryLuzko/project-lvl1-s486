import { greeting, game } from '..';

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

const questionPrime = (a) => {
  console.log(`Question: ${a}`);
};

const primeRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const gamePrime = () => {
  greeting(primeRules);
  game(brainPrime, questionPrime);
};

export default gamePrime;
