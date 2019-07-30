import React from 'react';
import { CheckboxRaw } from '../Form';

/* eslint-disable react/prop-types */
export default ({
  allSelected,
  dataKey,
  onSelectAll,
  tableId,
}) => {
  const checkboxId = `${tableId}-${dataKey}`;

  return (
    <th
      className="slds-text-align--right"
      key={dataKey}
      scope="col"
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
