import makeGame from '..';
import randomNum from '../utils';

const description = 'What number is missing in the progression?';

const isProgression = (p, n) => p[n];

const questionProgression = (p, n) => {
  let newP = '';
  for (let i = 0; i < p.length; i += 1) {
    if (i === n) {
      newP += ' ..';
    } else {
      newP += ` ${p[i]}`;
    }
  }
  return `${newP}`;
};

const progression = () => {
  const step = randomNum(1, 5);
  let firstNum = randomNum(1, 100);
  const progr = [firstNum];
  const progressionLength = 10;
  for (let j = 0; j < progressionLength - 1; j += 1) {
    progr.push(firstNum += step);
  }
  const position = randomNum(0, 10);
  const game = isProgression(progr, position);
  const question = questionProgression(progr, position);
  return [game, question];
};

export default () => {
  makeGame(progression, description);
};
