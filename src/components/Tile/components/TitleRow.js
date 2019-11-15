import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '../../Grid';

const TitleRow = ({ children, action }) => {
  if (!action) return children;

  return (
    <Grid className="slds-has-flexi-truncate" align="spread">
      {children}
      <div className="slds-shrink-none">
        {action}
      </div>
    </Grid>
  );
};

TitleRow.defaultProps = {
  action: null,
};

TitleRow.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.node,
};

export default TitleRow;
