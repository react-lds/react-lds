import React from 'react';
import cx from 'classnames';

import { Cell } from '../..';

/* eslint-disable react/prop-types */
export default ({
  dataKey,
  fixed,
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
      fixed={fixed}
      key={dataKey}
      scope="col"
      sortable={sortable}
      sortDirection={sortDirection}
      onClick={onClick}
    >
      {title}
    </Cell>
  );
};
