export const brainGcd = (z, x, c, a, b) => {
  if (b === 0) {
    return a;
  }
  return brainGcd(z, x, c, b, a % b);
};

export const questionGcd = (z, x, c, a, b) => {
  console.log(`Question: ${a} ${b}`);
};
