import React from 'react';
import cx from 'classnames';

import { Cell } from '../..';

/* eslint-disable react/prop-types */
export default ({
  dataKey,
  isScrolled,
  isSticky,
  onSort,
  sortable,
  sortBy,
  sortDirection,
  title,
}) => {
  const onClick = sortable ? () => onSort(dataKey) : null;
  const classNames = cx('slds-text-title--caps', { 'slds-is-sorted': sortBy === dataKey });

  return (
    <Cell
      className={classNames}
      isScrolled={isScrolled}
      isSticky={isSticky}
      key={dataKey}
      onClick={onClick}
      scope="col"
      sortable={sortable}
      sortDirection={sortDirection}
    >
      {title}
    </Cell>
  );
};
