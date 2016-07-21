
import React from 'react';
import { prefixable } from '../../decorators';

export const FormElement = (props) => {
  const { children, error, prefix, required } = props;

  const sldsClasses = [
    'form-element',
    { 'has-error': !!error },
    { 'is-required': required },
  ];

  return (
    <div className={prefix(sldsClasses, props)}>{children}</div>
  );
};

FormElement.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * form-element children
   */
  children: React.PropTypes.node.isRequired,
  /**
   * the form-element error
   */
  error: React.PropTypes.string,
  /**
   * sets the form-element required
   */
  required: React.PropTypes.bool,
};

export default prefixable(FormElement);
