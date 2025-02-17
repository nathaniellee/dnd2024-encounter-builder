import { round } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import {
  CHALLENGE_RATINGS,
  DIFFICULTY,
  PRESETS,
  XP_BUDGET,
  XP_BY_CHALLENGE_RATING,
} from './constants';

export const createMonster = (cr = CHALLENGE_RATINGS[0]) => {
  return {
    cr,
    id: uuidv4(),
  };
};

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

export const getCRTextFromValue = (cr) => {
  if (cr === 0.125) {
    return '1/8';
  }
  if (cr === 0.25) {
    return '1/4';
  }
  if (cr === 0.5) {
    return '1/2';
  }
  return cr;
};

export const getCRValueFromText = (cr) => {
  if (cr === '1/8') {
    return 0.125;
  }
  if (cr === '1/4') {
    return 0.25;
  }
  if (cr === '1/2') {
    return 0.5;
  }
  return Number(cr);
};

export const getEncounterXP = monsters => monsters.reduce((sum, { cr }) => sum + XP_BY_CHALLENGE_RATING[cr], 0);

export const noop = () => {};
