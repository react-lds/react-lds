import React from 'react';

import { CheckboxRaw } from '../../';

export default ({ allSelected, dataKey, onSelectAll, tableId }) => { // eslint-disable-line react/prop-types
  const checkboxId = `${tableId}-${dataKey}`;

  return (
    <th
      className="slds-text-align--right"
      key={dataKey}
      scope="col"
      style={{ width: '3.25rem' }}
    >
      <CheckboxRaw
        checked={allSelected}
        hideLabel
        id={checkboxId}
        label="Select All"
        name="options"
        onChange={onSelectAll}
      />
    </th>
  );
};
