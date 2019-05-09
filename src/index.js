import readlineSync from 'readline-sync';

export const greeting = (rules) => {
  console.log('Welcome to the Brain Games');
  rules();
  console.log('');
};

export const evenRules = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
};

export const calcRules = () => {
  console.log('What is the result of the expression?');
};

export const gcdRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const progressionRules = () => {
  console.log('What number is missing in the progression?');
};

export const primeRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const game = (brainGame, question) => {
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const num1 = (Math.floor(Math.random() * 100) + 1);
    const num2 = (Math.floor(Math.random() * 100) + 1);

    // НОД
    const numNod = (Math.floor(Math.random() * 30) + 1);
    const numNod1 = (Math.floor(Math.random() * 30) + 1) * numNod;
    const numNod2 = (Math.floor(Math.random() * 30) + 1) * numNod;
    const oper = ['+', '-', '*'];
    const rand = Math.floor(Math.random() * 3);
    const randomOper = oper[rand];
    // НОД

    // прогрессия
    const step = (Math.floor(Math.random() * 5) + 1);
    let firstNum = num1;
    const prog = [firstNum];
    for (let j = 0; j < 9; j += 1) {
      prog.push(firstNum += step);
    }
    const n = Math.floor(Math.random() * 10);
    // прогрессия

    question(num1, num2, randomOper, numNod1, numNod2, prog, n);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(brainGame(num1, num2, randomOper, numNod1, numNod2, prog, n, step))) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${brainGame(num1, num2, randomOper, numNod1, numNod2, prog, n, step)}`);
      console.log(`Let's try again, ${askName}`);
      break;
    }
  } if (count === 3) {
    console.log(`Congratulations, ${askName}!`);
  }
};
