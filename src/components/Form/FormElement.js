
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
    <div
      className={prefix(sldsClasses, props)}
      data-scope={props['data-scope']}
      data-select={props['data-select']}
    >
      {children}
    </div>
  );
};

FormElement.propTypes = {
  /**
   * form content
   */
  children: React.PropTypes.node.isRequired,
  /**
   * can render errors for the given form element
   */
  error: React.PropTypes.string,
  /**
   * adds required-attribute to the form element
   */
  required: React.PropTypes.bool,
  /**
   * sets the data-scope attribute
   */
  'data-scope': React.PropTypes.string,
  /**
   * sets the data-select attribute
   */
  'data-select': React.PropTypes.string,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(FormElement);
