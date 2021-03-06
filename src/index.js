import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const gameProcess = (gameAnswer, gameQuestion) => {
  console.log(`Question: ${gameQuestion}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === String(gameAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${gameAnswer}`);
  return false;
};

export default (myGame, description) => {
  console.log('Welcome to the Brain Games');
  console.log(description);
  console.log('');
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');
  for (let i = 0; i < numberOfRounds; i += 1) {
    myGame();
    const [correctAnswer, question] = myGame();
    const accuracy = gameProcess(correctAnswer, question);
    if (!accuracy) {
      console.log(`Let's try again, ${askName}`);
      return;
    }
  }
  console.log(`Congratulations, ${askName}!`);
};
