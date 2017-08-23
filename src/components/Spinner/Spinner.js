import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const Spinner = (props) => {
  const { className, size, ...rest } = props;

  const sldsClasses = [
    'slds-spinner',
    { [`slds-spinner_${size}`]: !!size },
    className
  ];

  return (
    <div {...rest} className={cx(sldsClasses)} role="status">
      <span className="slds-assistive-text">Loading</span>
      <div className="slds-spinner__dot-a" />
      <div className="slds-spinner__dot-b" />
    </div>
  );
};

Spinner.flavors = [
  'brand',
  'inverse',
];

Spinner.defaultProps = {
  className: null,
  size: 'medium',
};

Spinner.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * spinner size
   */
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
};

export default flavorable(Spinner, 'spinner');
