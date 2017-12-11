import React from 'react';
import { Row } from '../../';

export default ({ cells, isSelected, rowId, tableId }) => { // eslint-disable-line react/prop-types
  const variation = isSelected ? 'is-selected' : undefined;

  return (
    <Row
      className="slds-hint-parent"
      key={`${tableId}-${rowId}`}
      variation={variation}
    >
      {cells}
    </Row>
  );
};
