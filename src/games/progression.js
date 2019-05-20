import makeGame from '..';
import randomNum from '../utils';

const description = 'What number is missing in the progression?';

const brainProgression = (p, n) => p[n];

const progressionLength = 10;


const progressionQuestion = (formerProgression, hiddenElement) => {
  const newProgression = formerProgression.map((element, index) => (index === hiddenElement ? '..' : element));
  return `${newProgression.join(' ')}`;
};

const progression = () => {
  const step = randomNum(1, 5);
  const firstNum = randomNum(1, 100);
  let progressionNumber = firstNum;
  const gameProgression = [firstNum];
  for (let j = 0; j < progressionLength - 1; j += 1) {
    gameProgression.push(progressionNumber += step);
  }
  const hiddenElementPosition = randomNum(0, progressionLength);
  const answer = brainProgression(gameProgression, hiddenElementPosition);
  const question = progressionQuestion(gameProgression, hiddenElementPosition);
  return [answer, question];
};

export default () => {
  makeGame(progression, description);
};
