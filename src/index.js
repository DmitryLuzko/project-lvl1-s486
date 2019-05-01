import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games');
console.log('Answer "yes" if number even otherwise answer "no"');
console.log('');

const brainEven = () => {
  const askName = readlineSync.question('May I have your names? ');
  console.log(`Hello, ${askName}!`);
  console.log('');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const correctAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && correctAnswer === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (number % 2 === 0 && correctAnswer === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "yes"');
      console.log(`Let's try again, ${askName}`);
      break;
    } else if (number % 2 !== 0 && correctAnswer === 'no') {
      console.log('Correct!');
      count += 1;
    } else if (number % 2 !== 0 && correctAnswer === 'yes') {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      console.log(`Let's try again, ${askName}`);
      break;
    } else {
      console.log('Incorrect answer');
      console.log(`Let's try again, ${askName}`);
      break;
    }
  } if (count === 3) {
    console.log(`Congratulations, ${askName}`);
  }
};


export default brainEven;
