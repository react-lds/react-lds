import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';

const FormElement = (props, { cssPrefix }) => {
  const { children, className, error, required, fieldset, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'form-element',
    { 'has-error': !!error },
    { 'is-required': required },
  ];

  const Tag = fieldset ? 'fieldset' : 'div';

  return (<Tag {...rest} className={prefix(classes, className)}>{children}</Tag>);
};

FormElement.contextTypes = { cssPrefix: PropTypes.string };

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
