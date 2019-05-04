import readlineSync from 'readline-sync';

const brainEven = () => {
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);

    const func = (a) => {
      if (a % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };

    const correctAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === func(number)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${correctAnswer} is wrong answer ;(. Correct answer was ${func(number)}`);
      console.log(`Let's try again, ${askName}`);
      break;
    }
  } if (count === 3) {
    console.log(`Congratulations, ${askName}!`);
  }
};

export default brainEven;
