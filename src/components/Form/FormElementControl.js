
import React from 'react';
import { prefixable } from '../../decorators';

export const FormElementControl = (props) => {
  const { children, prefix } = props;

  const sldsClasses = [
    'form-element__control',
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
};

export default prefixable(FormElementControl);
