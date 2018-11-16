export const scrollDropdown = (parentNode, childNode) => {
  const viewPortTop = parentNode.scrollTop;
  const viewPortBottom = viewPortTop + parentNode.offsetHeight;
  const selectedTop = childNode.offsetTop;
  const selectedBottom = selectedTop + childNode.offsetHeight;

  /* eslint-disable no-param-reassign */
  if (selectedBottom > viewPortBottom) {
    parentNode.scrollTop += selectedBottom - viewPortBottom;
  } else if (selectedTop < viewPortTop) {
    parentNode.scrollTop += selectedTop - viewPortTop;
  }
  /* eslint-enable no-param-reassign */
};

export const handleIndexChange = (items, prevIndex, direction = 'desc') => {
  if (prevIndex == null) return handleIndexChange(items, -1, direction);
  const len = items.length;
  const getWrappedIndex = nextIndex => ((nextIndex % len) + len) % len;
  const nextIndex = getWrappedIndex(direction === 'desc' ? prevIndex + 1 : prevIndex - 1);
  const nextItem = items[nextIndex];
  return nextItem.isHeader
    ? handleIndexChange(items, nextIndex, direction)
    : nextIndex;
};

/** TODO: This should probably be memoized */
export const getSelectedItems = (items, selectedIds) => selectedIds
  .map(str => items.find(({ id }) => id === str));
