#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games');
console.log('');
const askName = readlineSync.question('May I have your names? ');
console.log(`Hello, ${askName}`);
