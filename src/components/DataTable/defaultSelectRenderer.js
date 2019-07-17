import React from 'react';

import { CheckboxRaw } from '../Form';

/* eslint-disable react/prop-types */
export default ({
  dataKey, rowId, selected, onSelect, tableId
}) => {
  const checkboxId = `${tableId}-${dataKey}-${rowId}`;

  return (
    <td
      className="slds-text-align--right"
      key={dataKey}
      role="gridcell"
      style={{ width: '3.25rem' }}
    >
      <CheckboxRaw
        checked={selected}
        hideLabel
        id={checkboxId}
        label={`Select item ${rowId}`}
        name="options"
        onChange={() => onSelect(rowId)}
      />
    </td>
  );
};
