import React from 'react';
import cx from 'classnames';

import { CheckboxRaw } from '../../';

const FIXED_STYLE = { marginLeft: '-0.25rem' };

export default ({ allSelected, dataKey, fixed, onSelectAll, tableId, truncate }) => { // eslint-disable-line react/prop-types
  const checkboxId = `${tableId}-${dataKey}`;
  const wrapperClassName = cx([
    { 'slds-truncate': truncate },
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
