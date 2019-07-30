import { ALL, ANY, CUSTOM } from './constants';

export const getOperator = (option, index) => {
  if (option === ALL && index !== 0) return 'AND';
  if (option === ANY && index !== 0) return 'OR';
  if (option === CUSTOM) return String(index + 1);
  return null;
};
