import React from 'react';

import { prefixClasses } from '../../utils';

const FormElementControl = (props, { cssPrefix }) => {
  const { children, className, hasIconLeft, hasIconRight, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'form-element__control',
    { 'input-has-icon': hasIconLeft || hasIconRight },
    { 'input-has-icon--right': hasIconRight && !hasIconLeft },
    { 'input-has-icon--left': hasIconLeft && !hasIconRight },
    { 'input-has-icon--left-right': hasIconLeft && hasIconRight },
  ];

  return (<div {...rest} className={prefix(classes, className)}>{children}</div>);
};

FormElementControl.contextTypes = { cssPrefix: React.PropTypes.string };

FormElementControl.propTypes = {
  /**
   * control element(s)
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * set this to true if the form element has a left icon
   */
  hasIconLeft: React.PropTypes.bool,
  /**
   * set this to true if the form element has a right icon
   */
  hasIconRight: React.PropTypes.bool,
};

export default FormElementControl;
