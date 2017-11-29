import React from 'react';

export default ({ cellData, defaultProps }) => ( // eslint-disable-line react/prop-types
  <td {...defaultProps}>
    <div className="slds-truncate" title={cellData}>
      {cellData}
    </div>
  </td>
);
