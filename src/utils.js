import { round } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import {
  DIFFICULTY,
  PRESETS,
  XP_BUDGET,
} from './constants';

export const createPlayerCharacter = (level = PRESETS.L1) => {
  return {
    id: uuidv4(),
    level,
  };
};

export const createParty = (count = 4, level = PRESETS.L1) => {
  const party = [];

  for (let i = 0; i < count; i++) {
    party.push(createPlayerCharacter(level));
  }

  return party;
};

export const getAveragePartyLevel = (party) => {
  if (party.length === 0) {
    return 0;
  }

  const totalPartyLevel = party.reduce((sum, { level }) => sum + level, 0);

  return round(totalPartyLevel / party.length, 1);
};

export const getBudget = (party, difficulty = DIFFICULTY.LOW) => {
  const budgetByLevel = XP_BUDGET[difficulty];
  return party.reduce((sum, { level }) => sum + budgetByLevel[level], 0);
};
export const getLowBudget = party => getBudget(party, DIFFICULTY.LOW);
export const getModerateBudget = party => getBudget(party, DIFFICULTY.MODERATE);
export const getHighBudget = party => getBudget(party, DIFFICULTY.HIGH);

export const noop = () => {};
