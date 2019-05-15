import { game, makeGame } from '..';

const progressionRules = 'What number is missing in the progression?';

const brainProgression = (p, n, s) => p[n - 1] + s;

const questionProgression = (p, n) => {
  const newP = p;
  newP[n] = '..';
  return `${newP[0]} ${newP[1]} ${newP[2]} ${newP[3]} ${newP[4]} ${newP[5]} ${newP[6]} ${newP[7]} ${newP[8]} ${newP[9]}`;
};

const progression = () => {
  const step = (Math.floor(Math.random() * 5) + 1);
  let firstNum = (Math.floor(Math.random() * 100) + 1);
  const prog = [firstNum];
  for (let j = 0; j < 9; j += 1) {
    prog.push(firstNum += step);
  }
  const num = Math.floor(Math.random() * 10);

  game(brainProgression(prog, num, step), questionProgression(prog, num));
};

const gameProgression = () => {
  makeGame(progression, progressionRules);
};

export default gameProgression;
