import React from 'react';
import { prefixable, themeable } from '../../decorators';

const Box = (props) => {
  const sldsClasses = [
    'box',
    { [`box--${props.size}`]: !!props.size },
  ];

  return (
    <div className={props.prefix(sldsClasses, props)}>{props.children}</div>
  );
};

Box.propTypes = {
  /**
   * box content
   */
  children: React.PropTypes.node,
  /**
   * box size
   */
  size: React.PropTypes.oneOf(['x-small', 'small']),
  /**
   * prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(themeable(Box));
