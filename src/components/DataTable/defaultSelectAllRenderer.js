import React from 'react';

import { CheckboxRaw, Cell } from '../../';

/* eslint-disable react/prop-types */
export default ({
  allSelected,
  dataKey,
  fixed,
  onSelectAll,
  tableId,
}) => {
  const checkboxId = `${tableId}-${dataKey}`;

  return (
    <th
      className="slds-text-align--right"
      key={dataKey}
      scope="col"
      style={fixed ? Cell.FIXED_STYLE : null}
    >
      <div>
        <CheckboxRaw
          checked={allSelected}
          hideLabel
          id={checkboxId}
          label="Select All"
          name="options"
          onChange={onSelectAll}
        />
      </div>
    </th>
  );
};
/* eslint-enable react/prop-types */
