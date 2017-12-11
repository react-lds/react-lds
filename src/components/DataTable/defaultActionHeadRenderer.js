import React from 'react';

export default ({ dataKey }) => ( // eslint-disable-line react/prop-types
  <th key={dataKey} scope="col">
    <div className="slds-th__action">
      <span className="slds-assistive-text">Actions</span>
    </div>
  </th>
);
