
function clamp(num, min = 0, max = 100) {
  return Math.min(Math.max(num, min), max);
}

function fraction(num, min = 0, max = 100) {
  return ((num - min) / (max - min));
}

export function getClampedProgress(progress, min, max) {
  return Math.round(fraction(clamp(progress, min, max), min, max) * 100);
}
