import React from 'react';
import cx from 'classnames';

import { Cell } from '../Table';

/* eslint-disable react/prop-types */
export default ({
  dataKey,
  onSort,
  sortable,
  sortBy,
  sortDirection,
  title,
}) => {
  const onClick = sortable ? () => onSort(dataKey) : null;
  const classNames = cx({ 'slds-is-sorted': sortBy === dataKey });

  return (
    <Cell
      className={classNames}
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
