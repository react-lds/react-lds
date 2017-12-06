let idCounter = 0;

function uniqueId(prefix = '') {
  idCounter += 1;
  return `${prefix}${idCounter}`;
}

export default uniqueId;
