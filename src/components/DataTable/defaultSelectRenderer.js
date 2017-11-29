import React from 'react';

export default ({ dataKey, rowIndex, selected, onSelect, tableId }) => { // eslint-disable-line react/prop-types
  const checkboxId = `${tableId}-${dataKey}-${rowIndex}`;

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
          onChange={() => onSelect(rowIndex)}
          type="checkbox"
        />
        <label className="slds-checkbox__label" htmlFor={checkboxId}>
          <span className="slds-checkbox--faux" />
          <span className="slds-form-element__label slds-assistive-text">
            Select item {rowIndex}
          </span>
        </label>
      </span>
    </td>
  );
};
