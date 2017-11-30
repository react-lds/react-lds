import React from 'react';

export default ({ dataKey, rowId, selected, onSelect, tableId }) => { // eslint-disable-line react/prop-types
  const checkboxId = `${tableId}-${dataKey}-${rowId}`;

  return (
    <td
      className="slds-text-align--right"
      key={dataKey}
      role="gridcell"
      style={{ width: '3.25rem' }}
    >
      <span className="slds-checkbox">
        <input
          checked={selected}
          id={checkboxId}
          name="options"
          onChange={() => onSelect(rowId)}
          type="checkbox"
        />
        <label className="slds-checkbox__label" htmlFor={checkboxId}>
          <span className="slds-checkbox--faux" />
          <span className="slds-form-element__label slds-assistive-text">
            Select item {rowId}
          </span>
        </label>
      </span>
    </td>
  );
};
