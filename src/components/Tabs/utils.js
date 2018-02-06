
export const getTabsClass = (str, scoped = false) => {
  const postfix = str || '';
  const modifier = scoped ? 'scoped' : 'default';
  return `slds-tabs_${modifier}${postfix}`;
};

export const getAriaLabel = id => `${id}__item`;
