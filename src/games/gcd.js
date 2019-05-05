export const brainGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return brainGcd(b, a % b);
};

export const questionGcd = (a, b) => {
  console.log(`Question: ${a} ${b}`);
};
