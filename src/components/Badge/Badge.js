import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { themeable } from '../../decorators';

export const Badge = (props) => {
  const { className, label, ...rest } = props;

  const sldsClasses = [
    'slds-badge',
    className,
  ];

  return (<span {...rest} className={cx(sldsClasses)}>{label}</span>);
};

Badge.defaultProps = {
  className: null,
};

Badge.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * badge label
   */
  label: PropTypes.string.isRequired,
};

export default themeable(Badge);
