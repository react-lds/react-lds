import React from 'react';
import { Row } from '../..';

/* eslint-disable react/prop-types */
export default ({
  cells, isSelected, rowId, tableId
}) => {
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
