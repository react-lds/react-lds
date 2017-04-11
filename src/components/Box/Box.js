import React from 'react';
import PropTypes from 'prop-types';

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

Box.contextTypes = { cssPrefix: PropTypes.string };

Box.propTypes = {
  /**
   * box content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * box size
   */
  size: PropTypes.oneOf(['x-small', 'small']),
};

export default themeable(Box);
