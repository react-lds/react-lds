import React from 'react';
import { prefixClasses } from '../../utils';

const ButtonGroup = (props, { cssPrefix }) => {
  const { children, className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (<div {...rest} className={prefix(['button-group'], className)} role="group">{children}</div>);
};

ButtonGroup.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

ButtonGroup.propTypes = {
  /**
   * children shoule be instances of button
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
};

export default ButtonGroup;
