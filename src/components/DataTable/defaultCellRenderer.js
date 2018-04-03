import React from 'react';

export default ({ cellData, defaultProps }) => ( // eslint-disable-line react/prop-types
  <td {...defaultProps}>
    <div className="slds-truncate" title={cellData} data-value={cellData}>
      {cellData}
    </div>
  </td>
);
