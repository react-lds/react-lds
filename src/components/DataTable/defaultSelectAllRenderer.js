import React from 'react';
import { CheckboxRaw, Cell } from '../..';

/* eslint-disable react/prop-types */
export default ({
  allSelected,
  dataKey,
  isScrolled,
  isSticky,
  onSelectAll,
  tableId,
}) => {
  const checkboxId = `${tableId}-${dataKey}`;

  let style = null;
  if (isSticky) {
    style = isScrolled ? Cell.STICKY_SCROLLED_STYLE : Cell.STICKY_TOP_STYLE;
  }

  return (
    <th
      className="slds-text-align--right"
      key={dataKey}
      scope="col"
      style={style}
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
