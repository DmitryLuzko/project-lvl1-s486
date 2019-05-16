import { game, makeGame } from '..';
import { randomNum } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = a => a % 2 === 0;

const questionEven = a => `${a}`;

const even = () => {
  const number = randomNum(1, 100);
  const func = isEven(number) ? 'yes' : 'no';
  const ask = questionEven(number);
  game(func, ask);
};

const gameEven = () => {
  makeGame(even, description);
};

export default gameEven;
