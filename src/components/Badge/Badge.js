import React from 'react';

import classNames from 'classnames';

const Badge = ({ variation, label }) => {
  const classes = {
    'slds-badge': true,
    [`slds-theme--${variation}`]: variation,
  };

  return (
    <span className={classNames(classes)}>{label}</span>
  );
};

Badge.propTypes = {
  variation: React.PropTypes.oneOf(['default', 'shade', 'inverse']),
  label: React.PropTypes.string.isRequired,
};

export default Badge;
