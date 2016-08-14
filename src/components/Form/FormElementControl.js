
import React from 'react';
import { prefixable } from '../../decorators';

export const FormElementControl = (props) => {
  const { children, hasIconLeft, hasIconRight, prefix } = props;

  const sldsClasses = [
    'form-element__control',
    { 'input-has-icon': hasIconLeft || hasIconRight },
    { 'input-has-icon--right': hasIconRight && !hasIconLeft },
    { 'input-has-icon--left': hasIconLeft && !hasIconRight },
    { 'input-has-icon--left-right': hasIconLeft && hasIconRight },
  ];

  return (
    <div className={prefix(sldsClasses, props)}>{children}</div>
  );
};

FormElementControl.propTypes = {
  /**
   * control element(s)
   */
  children: React.PropTypes.node,
  /**
   * set this to true if the form element has a left icon
   */
  hasIconLeft: React.PropTypes.bool,
  /**
   * set this to true if the form element has a right icon
   */
  hasIconRight: React.PropTypes.bool,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(FormElementControl);
