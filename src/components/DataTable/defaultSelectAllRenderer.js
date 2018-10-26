import React from 'react';
import cx from 'classnames';

import { CheckboxRaw } from '../../';

const FIXED_STYLE = { marginLeft: '-0.25rem' };

/* eslint-disable react/prop-types */
export default ({
  allSelected,
  dataKey,
  fixed,
  onSelectAll,
  tableId,
}) => {
  const checkboxId = `${tableId}-${dataKey}`;
  const wrapperClassName = cx([
    { 'slds-cell-fixed': fixed },
  ]);

  return (
    <th
      className="slds-text-align--right"
      key={dataKey}
      scope="col"
      style={{ width: '3.25rem' }}
    >
      <div className={wrapperClassName} style={fixed ? FIXED_STYLE : null}>
        <CheckboxRaw
          checked={allSelected}
          hideLabel
          id={checkboxId}
          label="Select All"
          name="options"
          onChange={onSelectAll}
          wrapperClassName={fixed ? 'slds-th__action' : null}
        />
      </div>
    </th>
  );
};
/* eslint-enable react/prop-types */
