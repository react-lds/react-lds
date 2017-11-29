import React from 'react';
import { Row } from '../../';

export default ({ cells, isSelected, rowIndex, tableId }) => { // eslint-disable-line react/prop-types
  const variation = isSelected ? 'is-selected' : undefined;

  return (
    <Row
      className="slds-hint-parent"
      key={`${tableId}-${rowIndex}`}
      variation={variation}
    >
      {cells}
    </Row>
  );
};
