import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const SpinnerContainer = (props) => {
  const { className, fixed, children, ...rest } = props;

  const sldsClasses = [
    'slds-spinner_container',
    { 'slds-is-fixed': fixed },
    className,
  ];

  return (
    <div {...rest} className={cx(sldsClasses)}>
      {children}
    </div>
  );
};

SpinnerContainer.defaultProps = {
  className: null,
  fixed: false,
};

SpinnerContainer.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * fixed positioning by adding the .slds-is-fixed class to the container,
   * needed if dynamically loading portions of component after spinner is showing
   */
  fixed: PropTypes.bool,
  /**
   * children should be one instance of Spinner
   */
  children: PropTypes.node.isRequired,
};

export default SpinnerContainer;
