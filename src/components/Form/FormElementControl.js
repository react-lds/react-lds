import React from 'react';
import PropTypes from 'prop-types';

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

FormElementControl.contextTypes = { cssPrefix: PropTypes.string };

FormElementControl.propTypes = {
  /**
   * control element(s)
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * set this to true if the form element has a left icon
   */
  hasIconLeft: PropTypes.bool,
  /**
   * set this to true if the form element has a right icon
   */
  hasIconRight: PropTypes.bool,
};

export default FormElementControl;
