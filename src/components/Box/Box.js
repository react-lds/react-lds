import React from 'react';
import { themeable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Box = (props, { cssPrefix }) => {
  const { children, className, size, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = [
    'box',
    { [`box--${size}`]: !!size },
  ];

  return (
    <div {...rest} className={prefix(sldsClasses, className)}>{children}</div>
  );
};

Box.contextTypes = { cssPrefix: React.PropTypes.string };

Box.propTypes = {
  /**
   * box content
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * box size
   */
  size: React.PropTypes.oneOf(['x-small', 'small']),
};

export default themeable(Box);
