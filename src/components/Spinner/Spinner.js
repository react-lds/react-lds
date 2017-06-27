import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const Spinner = (props) => {
  const { className, size, container, fixed, ...rest } = props;

  const sldsClasses = [
    'slds-spinner',
    { [`slds-spinner--${size}`]: !!size },
    className
  ];

  const renderSpinner = () =>
    (
      <div {...rest} className={cx(sldsClasses)} role="status">
        <span className="slds-assistive-text">Loading</span>
        <div className="slds-spinner__dot-a" />
        <div className="slds-spinner__dot-b" />
      </div>
    );

  if (container) {
    const containerClasses = [
      'slds-spinner_container',
      { 'slds-is-fixed': fixed },
    ];
    return (
      <div className={cx(containerClasses)}>
        {renderSpinner()}
      </div>
    );
  }

  return renderSpinner();
};

Spinner.flavors = [
  'brand',
  'inverse',
];

Spinner.defaultProps = {
  className: null,
  size: 'medium',
  container: false,
  fixed: false,
};

Spinner.propTypes = {

  className: PropTypes.string,
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  container: PropTypes.bool,
  fixed: PropTypes.bool,
};

export default flavorable(Spinner, 'spinner');
