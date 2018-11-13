import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormElement = (props) => {
  const {
    children,
    className,
    error,
    fieldset,
    isStatic,
    required,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-form-element',
    { 'slds-has-error': !!error },
    { 'slds-is-required': required },
    { 'slds-form-element_readonly': isStatic },
    className
  ];

  const Tag = fieldset ? 'fieldset' : 'div';

  return (<Tag {...rest} className={cx(sldsClasses)}>{children}</Tag>);
};

FormElement.defaultProps = {
  className: null,
  error: null,
  fieldset: false,
  isStatic: false,
  required: false,
};

FormElement.propTypes = {
  /**
   * form content
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * can render errors for the given form element
   */
  error: PropTypes.string,
  /**
   * renders as a fieldset instead
   */
  fieldset: PropTypes.bool,
  /**
   * Renders in a static, "view" mode
   */
  isStatic: PropTypes.bool,
  /**
   * adds required-attribute to the form element
   */
  required: PropTypes.bool,
};


export default FormElement;
