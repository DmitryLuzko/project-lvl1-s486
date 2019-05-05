#!/usr/bin/env node

import { greeting, calcRules, game } from '..';
import { brainCalc, questionCalc } from '../games/calc';

greeting(calcRules);
game(brainCalc, questionCalc);
