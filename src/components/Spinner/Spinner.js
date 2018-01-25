import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { applyDecorators, decoratorProp } from '../../utils';

const Spinner = (props) => {
  const { className, flavor, size, ...rest } = props;

  const sldsClasses = [
    'slds-spinner',
    { [`slds-spinner_${size}`]: !!size },
    applyDecorators(flavor, 'spinner'),
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
   * Spinner flavor: array of flavors, you can also provide a single flavor string. Flavors: neutral,
   brand, inverse, delayed
   */
  flavor: decoratorProp(['brand', 'delayed', 'inverse']),
  /**
   * spinner sizes: xx-small, x-small, small, medium, large
   */
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
};

export default Spinner;
