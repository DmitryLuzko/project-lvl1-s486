import readlineSync from 'readline-sync';

let accuracy = true;

export const game = (func, ask) => {
  console.log(`Question: ${ask}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === String(func)) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${func}`);
    accuracy = false;
  }
};

export const makeGame = (myGame, description) => {
  console.log('Welcome to the Brain Games');
  console.log(description);
  console.log('');
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');
  const numberOfRounds = 3;
  let count = 0;
  for (let i = 0; i < numberOfRounds; i += 1) {
    myGame();
    if (!accuracy) {
      break;
    }
    count += 1;
  }
  if (count === numberOfRounds) {
    console.log(`Congratulations, ${askName}!`);
  } else {
    console.log(`Let's try again, ${askName}`);
  }
};
