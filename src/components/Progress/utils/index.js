
export function clamp(num, min = 0, max = 100) {
  return Math.min(Math.max(num, min), max);
}

export function fraction(num, min = 0, max = 100) {
  return ((num - min) / (max - min));
}
