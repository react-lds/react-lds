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

export const getNextIndex = (items, prevIndex, direction = 'desc') => {
  if (prevIndex == null) return getNextIndex(items, direction === 'desc' ? -1 : 0, direction);
  const len = items.length;
  const getIndexInBounds = nextIndex => ((nextIndex % len) + len) % len;
  const nextIndex = getIndexInBounds(direction === 'desc' ? prevIndex + 1 : prevIndex - 1);
  const nextItem = items[nextIndex];
  return nextItem.isHeader
    ? getNextIndex(items, nextIndex, direction)
    : nextIndex;
};

export const preventDefault = evt => evt.preventDefault();

const makeHighlighter = highlighter => (str = '', search = '') => {
  const searchLen = search.length;
  if (searchLen === 0) return str;

  const splitLabel = str.toLowerCase().split(search.toLowerCase());
  const splitLen = splitLabel.length;

  if (splitLen < 2) return str;

  let startIndex = 0;
  const result = [];

  splitLabel.forEach((strPos, i) => {
    const len = strPos.length;
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

    result.push((
      <React.Fragment key={`${origStr}${highlightStr}`}>
        {origStr}
        {highlightEl}
      </React.Fragment>
    ));
  });

  return result;
};

export const defaultHighlighter = makeHighlighter(str => <mark>{str}</mark>);

export const byItemId = value => ({ id }) => id === value;

export const isSelectionReplace = (opts) => {
  const { isMultiSelect, selectedItems } = opts;
  return !isMultiSelect && selectedItems.length > 0;
};

export const makeInputAddHandler = (originalHandler, opts) => {
  const {
    isOpen,
    keyboardSelection,
    onToggle,
    rawOnSelect: onSelect,
    search,
  } = opts;

  return (evt) => {
    const { key } = evt;

    const isKeyboardAdd = isOpen
      && search !== ''
      && !keyboardSelection
      && key === 'Enter';

    if (isKeyboardAdd) {
      onSelect(search, {
        isAdd: true,
        isReplace: isSelectionReplace(opts),
        isRemove: false,
      });

      onToggle(false);
      return true;
    }

    return originalHandler(evt);
  };
};
