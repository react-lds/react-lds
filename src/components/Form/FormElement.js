import React from 'react';

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

FormElement.contextTypes = { cssPrefix: React.PropTypes.string };

FormElement.propTypes = {
  /**
   * form content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * can render errors for the given form element
   */
  error: React.PropTypes.string,
  /**
   * renders as a fieldset instead
   */
  fieldset: React.PropTypes.bool,
  /**
   * adds required-attribute to the form element
   */
  required: React.PropTypes.bool,
};


export default FormElement;
