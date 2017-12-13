import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Spinner = (props) => {
  const { className, flavor, size, ...rest } = props;

  const sldsClasses = [
    'slds-spinner',
    { [`slds-spinner_${size}`]: !!size },
    { [`slds-spinner_${flavor}`]: !!flavor },
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

Spinner.defaultProps = {
  className: null,
  flavor: null,
  size: 'medium'
};

Spinner.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * flavor
   */
  flavor: PropTypes.oneOf(['brand', 'inverse']),
  /**
   * spinner sizes: xx-small, x-small, small, medium, large
   */
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
};

export default Spinner;
