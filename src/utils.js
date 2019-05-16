export const randomNum = (min, max) => Math.floor(Math.random() * max) + min;

const oper = ['+', '-', '*'];
export const count = oper.length;
export const randomOperator = num => oper[num];
