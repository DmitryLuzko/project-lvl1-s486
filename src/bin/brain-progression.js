#!/usr/bin/env node

import { greeting, progressionRules, game } from '..';
import { brainProgression, questionProgression } from '../games/progression';

greeting(progressionRules);
game(brainProgression, questionProgression);
