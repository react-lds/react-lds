
import React from 'react';
import { prefixClasses } from '../../utils';

const FormElement = (props, { cssPrefix }) => {
  const { children, className, error, required, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'form-element',
    { 'has-error': !!error },
    { 'is-required': required },
  ];

  return (<div {...rest} className={prefix(classes, className)}>{children}</div>);
};

FormElement.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

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
   * adds required-attribute to the form element
   */
  required: React.PropTypes.bool,
};

export default FormElement;
