#!/usr/bin/env node

import { greeting, primeRules, game } from '..';
import { brainPrime, questionPrime } from '../games/prime';

greeting(primeRules);
game(brainPrime, questionPrime);
