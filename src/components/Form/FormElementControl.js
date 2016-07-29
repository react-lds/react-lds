
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
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * the control element(s)
   */
  children: React.PropTypes.node.isRequired,
  /**
   * whether the input has an left icon
   */
  hasIconLeft: React.PropTypes.bool,
  /**
   * whether the input has a right icon
   */
  hasIconRight: React.PropTypes.bool,
};

export default prefixable(FormElementControl);
