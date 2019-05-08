export const brainPrime = (a) => {
  if (a < 2) {
    return 'no';
  }
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const questionPrime = (a) => {
  console.log(`Question: ${a}`);
};
