import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Spinner = (props) => {
  const { brand, className, inverse, size, ...rest } = props;

  const sldsClasses = [
    'slds-spinner',
    { [`slds-spinner_${size}`]: !!size },
    { 'slds-spinner_brand': brand },
    { 'slds-spinner_inverse': inverse },
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
  brand: null,
  className: null,
  inverse: null,
  size: 'medium'
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
  /**
   * brand flavor
   */
  brand: PropTypes.bool,
  /**
   * inverse flavor
   */
  inverse: PropTypes.bool,
};

export default Spinner;
