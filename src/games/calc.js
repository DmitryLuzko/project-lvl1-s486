

export const brainCalc = (a, b, c) => {
  if (c === '+') {
    return a + b;
  }
  if (c === '-') {
    return a - b;
  }
  return a * b;
};

export const questionCalc = (a, b, c) => {
  console.log(`Question: ${a} ${c} ${b}`);
};
