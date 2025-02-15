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

export const noop = () => {};
