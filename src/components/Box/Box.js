import React from 'react';
import classNames from 'classnames';
import { prefix, getThemeClassName, CustomPropTypes } from '../../util';

const Box = (props, context) => {
  const classes = [
    'box',
    getThemeClassName(props.theme),
    { [`box--${props.size}`]: !!props.size },
  ];

  return (
    <div className={prefix(classNames(classes), context.cssPrefix)}>
      {props.children}
    </div>
  );
};

Box.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

Box.propTypes = Object.assign(
  {
    size: React.PropTypes.oneOf(['x-small', 'small']),
    theme: CustomPropTypes.theme,
    children: React.PropTypes.node,
  }
);

export default Box;
