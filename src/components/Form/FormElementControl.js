import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormElementControl = (props) => {
  const {
    children, className, hasIconLeft, hasIconRight, ...rest
  } = props;

  const sldsClasses = [
    'slds-form-element__control',
    { 'slds-input-has-icon': hasIconLeft || hasIconRight },
    { 'slds-input-has-icon_right': hasIconRight && !hasIconLeft },
    { 'slds-input-has-icon_left': hasIconLeft && !hasIconRight },
    { 'slds-input-has-icon_left-right': hasIconLeft && hasIconRight },
    className
  ];

  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

FormElementControl.defaultProps = {
  className: null,
  hasIconLeft: false,
  hasIconRight: false,
};

FormElementControl.propTypes = {
  /**
   * control element(s)
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * set this to true if the form element has a left icon
   */
  hasIconLeft: PropTypes.bool,
  /**
   * set this to true if the form element has a right icon
   */
  hasIconRight: PropTypes.bool,
};

export default FormElementControl;
