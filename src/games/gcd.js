import readlineSync from 'readline-sync';

const brainGcd = () => {
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 50) + 1;
    const number1 = (Math.floor(Math.random() * 10) + 1) * number;
    const number2 = (Math.floor(Math.random() * 10) + 1) * number;

    const func = (number1, number2) => {
      if (number2 === 0) {
        return number1;
      }
      return func(number2, number1 % number2);
    };

    console.log(`Question: ${number1} ${number2}`);
    const correctAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === String(func(number1, number2))) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${correctAnswer} is wrong answer ;(. Correct answer was ${func(number1, number2)}`);
      console.log(`Let's try again, ${askName}`);
      break;
    }
  } if (count === 3) {
    console.log(`Congratulations, ${askName}!`);
  }
};

export default brainGcd;
