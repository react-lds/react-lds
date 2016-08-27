import React from 'react';
import { themeable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Badge = (props, { cssPrefix }) => {
  const { className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (<span {...rest} className={prefix('badge', className)}>{props.label}</span>);
};

Badge.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

Badge.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * badge label
   */
  label: React.PropTypes.string.isRequired,
};

export default themeable(Badge);
