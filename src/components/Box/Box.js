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
  size: React.PropTypes.oneOf(['x-small', 'small']),
  prefix: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default prefixable(themeable(Box));
