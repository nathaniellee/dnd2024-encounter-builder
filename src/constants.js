export const CHARACTER_LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export const PRESETS = {
  L1: 1,
  L5: 5,
  L11: 11,
  L17: 17,
  L20: 20,
};

const lowBudget = [50, 100, 150, 250, 500, 600, 750, 1000, 1300, 1600, 1900, 2200, 2600, 2900, 3300, 3800, 4500, 5000, 5500, 6400];
const moderateBudget = [75, 150, 225, 375, 750, 1000, 1300, 1700, 2000, 2300, 2900, 3700, 4200, 4900, 5400, 6100, 7200, 8700, 10700, 13200];
const highBudget = [100, 200, 400, 500, 1100, 1400, 1700, 2100, 2600, 3100, 4100, 4700, 5400, 6200, 7800, 9800, 11700, 14200, 17200, 22000];

export const XP_BUDGET = {
  LOW: lowBudget.reduce((acc, val, i) => ({
    ...acc,
    [i + 1]: val,
  }), {}),
  MODERATE: moderateBudget.reduce((acc, val, i) => ({
    ...acc,
    [i + 1]: val,
  }), {}),
  HIGH: highBudget.reduce((acc, val, i) => ({
    ...acc,
    [i + 1]: val,
  }), {}),
};
