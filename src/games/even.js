import { game, makeGame } from '..';

const evenRules = 'Answer "yes" if number even otherwise answer "no"';

const brainEven = (a) => {
  if (a % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionEven = a => `${a}`;

const even = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  game(brainEven(num), questionEven(num));
};

const gameEven = () => {
  makeGame(even, evenRules);
};

export default gameEven;
