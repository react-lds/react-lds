import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormElement = (props) => {
  const {
    children, className, error, required, fieldset, ...rest
  } = props;

  const sldsClasses = [
    'slds-form-element',
    { 'slds-has-error': !!error },
    { 'slds-is-required': required },
    className
  ];

  const Tag = fieldset ? 'fieldset' : 'div';

  return (<Tag {...rest} className={cx(sldsClasses)}>{children}</Tag>);
};

FormElement.defaultProps = {
  className: null,
  error: null,
  fieldset: false,
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
   * adds required-attribute to the form element
   */
  required: PropTypes.bool,
};


export default FormElement;
