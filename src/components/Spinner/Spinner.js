import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Spinner = (props) => {
  const {
    assistiveLabel,
    className,
    delayed,
    flavor,
    size,
    ...rest
  } = props;

  const baseClass = 'slds-spinner';

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_${size}`]: !!size },
    { [`${baseClass}_${flavor}`]: !!flavor },
    { [`${baseClass}_delayed`]: !!delayed },
    className
  ];

  return (
    <div {...rest} role="status" className={cx(sldsClasses)}>
      <span className="slds-assistive-text">{assistiveLabel}</span>
      <div className="slds-spinner__dot-a" />
      <div className="slds-spinner__dot-b" />
    </div>
  );
};

Spinner.defaultProps = {
  assistiveLabel: 'Loading',
  className: null,
  delayed: false,
  flavor: null,
  size: 'medium'
};

Spinner.propTypes = {
  /**
   * Label that will be shown on hover
   */
  assistiveLabel: PropTypes.string,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * Adds a 300ms start delay
   */
  delayed: PropTypes.bool,
  /**
   * Flavor. Can be either 'brand' or 'inverse'
   */
  flavor: PropTypes.oneOf(['brand', 'inverse']),
  /**
   * spinner sizes: xx-small, x-small, small, medium, large
   */
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
};

export default Spinner;
