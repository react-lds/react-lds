import React from 'react';
import { themeable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Box = (props, { cssPrefix }) => {
  const { className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'box',
    { [`box--${props.size}`]: !!props.size },
  ];

  return (
    <div {...rest} className={prefix(classes, className)}>{props.children}</div>
  );
};

Box.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

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
