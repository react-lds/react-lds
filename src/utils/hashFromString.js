export const hashFromString = (str) => {
  if (!str || typeof str !== 'string' || str.length === 0) { return null; }

  let hash = 0;

  for (let i = 0; i < str.length; i += 1) {
    const char = str.charCodeAt(i);
    /* eslint-disable no-bitwise */
    hash = ((hash << 5) - hash) + char;
    hash &= hash; // Convert to 32bit integer
  }

  return hash;
};

const getUniqueHash = (str, id) => `${id}-${hashFromString(str)}`;

export default getUniqueHash;
