#!/usr/bin/env node

import { greeting, evenRules, game } from '..';
import { brainEven, questionEven } from '../games/even';

greeting(evenRules);
game(brainEven, questionEven);
