import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const Spinner = (props) => {
  const { className, size, ...rest } = props;

  const sldsClasses = [
    'slds-spinner',
    { [`slds-spinner--${size}`]: !!size },
    className
  ];

  return (
    <div className="slds-spinner_container">
      <div {...rest} className={cx(sldsClasses)} aria-hidden="false" role="alert">
        <div className="slds-spinner__dot-a" />
        <div className="slds-spinner__dot-b" />
      </div>
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
   * size
   */
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
};

export default flavorable(Spinner, 'spinner');
