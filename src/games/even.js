import { greeting, game } from '..';

const brainEven = (a) => {
  if (a % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionEven = (a) => {
  console.log(`Question: ${a}`);
};

const evenRules = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
};

const gameEven = () => {
  greeting(evenRules);
  game(brainEven, questionEven);
};

export default gameEven;
