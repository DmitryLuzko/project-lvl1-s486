import readlineSync from 'readline-sync';

const brainCalc = () => {
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;

    const oper = ['+', '-', '*'];
    const rand = Math.floor(Math.random() * 3);
    const randomOper = oper[rand];

    const func = (a, b) => {
      if (randomOper === '+') {
        return a + b;
      }
      if (randomOper === '-') {
        return a - b;
      }
      return a * b;
    };

    console.log(`Question: ${number1} ${randomOper} ${number2}`);
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


export default brainCalc;
