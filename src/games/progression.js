
export const brainProgression = (a, b, c, d, z, p, num, s) => p[num - 1] + s;

export const questionProgression = (a, b, c, d, z, p, num) => {
  const newP = p;
  newP[num] = '..';
  console.log(`Question: ${newP[0]} ${newP[1]} ${newP[2]} ${newP[3]} ${newP[4]} ${newP[5]} ${newP[6]} ${newP[7]} ${newP[8]} ${newP[9]}`);
};
