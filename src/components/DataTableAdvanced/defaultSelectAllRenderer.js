import React from 'react';

export default ({ allSelected, dataKey, onSelectAll, tableId }) => { // eslint-disable-line react/prop-types
  const checkboxId = `${tableId}-${dataKey}`;

  return (
    <th
      className="slds-text-align--right"
      key={dataKey}
      scope="col"
      style={{ width: '3.25rem' }}
    >
      <div>
        <span className="slds-checkbox">
          <input
            checked={allSelected}
            id={checkboxId}
            name="options"
            onChange={onSelectAll}
            type="checkbox"
          />
          <label className="slds-checkbox__label" htmlFor={checkboxId}>
            <span className="slds-checkbox--faux" />
            <span className="slds-form-element__label slds-assistive-text">
              Select All
            </span>
          </label>
        </span>
      </div>
    </th>
  );
};
