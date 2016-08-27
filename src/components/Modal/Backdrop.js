import React from 'react';
import { prefixClasses } from '../../utils';
import { flavorable } from '../../decorators';

export const Backdrop = (props, { cssPrefix }) => {
  const { className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (<div {...rest} className={prefix('backdrop', className)} />);
};

Backdrop.flavors = [
  'open',
];

Backdrop.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

Backdrop.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
};


export default flavorable(Backdrop, 'backdrop');
