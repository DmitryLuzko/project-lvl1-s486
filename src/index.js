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

export const game = (brainGame, question) => {
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const number1 = (Math.floor(Math.random() * 100) + 1);
    const number2 = (Math.floor(Math.random() * 100) + 1);

    const oper = ['+', '-', '*'];
    const rand = Math.floor(Math.random() * 3);
    const randomOper = oper[rand];

    question(number1, number2, randomOper);
    const correctAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === String(brainGame(number1, number2, randomOper))) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${correctAnswer} is wrong answer ;(. Correct answer was ${brainGame(number1, number2, randomOper)}`);
      console.log(`Let's try again, ${askName}`);
      break;
    }
  } if (count === 3) {
    console.log(`Congratulations, ${askName}!`);
  }
};
