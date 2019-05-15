import readlineSync from 'readline-sync';

let count = 0;
let accept = true;

export const game = (g, q) => {
  console.log(`Question: ${q}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === String(g)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${g}`);
    accept = false;
  }
};

export const makeGame = (func, rules) => {
  console.log('Welcome to the Brain Games');
  console.log(rules);
  console.log('');
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');

  while (count < 3) {
    func();
    if (accept === false) {
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${askName}!`);
  } else {
    console.log(`Let's try again, ${askName}`);
  }
};
