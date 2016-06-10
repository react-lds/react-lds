let idCounter = 0;

export default function uniqueId(prefix = '') {
  const id = ++idCounter;
  return `${prefix}${id}`;
}
