import { round } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { PRESETS } from './constants';

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
  const totalPartyLevel = party.reduce((sum, { level }) => sum + level, 0);
  return round(totalPartyLevel / party.length, 1);
};

export const noop = () => {};
