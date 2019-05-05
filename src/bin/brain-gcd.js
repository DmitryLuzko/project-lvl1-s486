#!/usr/bin/env node

import { greeting, gcdRules, game } from '..';
import { brainGcd, questionGcd } from '../games/gcd';

greeting(gcdRules);
game(brainGcd, questionGcd);
