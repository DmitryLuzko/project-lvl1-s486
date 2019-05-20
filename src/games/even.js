import makeGame from '..';
import randomNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = a => a % 2 === 0;

const evenQuestion = a => String(a);

const even = () => {
  const number = randomNum(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = evenQuestion(number);
  return [answer, question];
};

export default () => makeGame(even, description);
