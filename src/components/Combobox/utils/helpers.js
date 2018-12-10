import React from 'react';

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

export const preventDefault = evt => evt.preventDefault();

const makeHighlighter = highlighter => (str = '', search = '') => {
  let result = str;
  const searchLen = search.length;
  if (searchLen === 0) return str;

  const splitLabel = str.toLowerCase().split(search.toLowerCase());
  const splitLen = splitLabel.length;

  if (splitLen < 2) return str;

  let startIndex = 0;

  result = splitLabel.map((strPortion, i) => {
    const len = strPortion.length;
    const origIndex = startIndex + len;
    const origStr = str.slice(startIndex, origIndex);
    startIndex = origIndex;

    let highlightEl = null;
    let highlightStr = '';

    if (i !== splitLen - 1) {
      const searchIndex = startIndex + searchLen;
      highlightStr = str.slice(startIndex, searchIndex);
      highlightEl = highlighter(highlightStr);
      startIndex = searchIndex;
    }

    return (
      <React.Fragment key={`${origStr}${highlightStr}`}>
        {origStr}
        {highlightEl}
      </React.Fragment>
    );
  });

  return result;
};

export const defaultHighlighter = makeHighlighter(str => <mark>{str}</mark>);
