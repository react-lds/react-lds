import React from 'react';
import { prefixClasses } from '../../utils';
import { flavorable } from '../../decorators';

export const PillContainer = (props, { cssPrefix }) => {
  const { children, className, onClick, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (
    <div {...rest} className={prefix('pill_container', className)} onClick={onClick}>
      {children}
    </div>
  );
};

PillContainer.flavors = [
  'bare',
];

PillContainer.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

PillContainer.propTypes = {
  /**
   * the pill(s) passed into the component
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * onClick handler for the pill container
   */
  onClick: React.PropTypes.func,
};

export default flavorable(PillContainer, 'pill_container');
