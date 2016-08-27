import React from 'react';
import { prefixClasses } from '../../utils';
import IconSVG from '../Icon/IconSVG';

const ButtonIcon = (props, { cssPrefix }) => {
  const { className, sprite, icon, position, size, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'button__icon',
    { [`button__icon--${position}`]: !!position },
    { [`button__icon--${size}`]: !!size },
  ];

  return (
    <IconSVG
      {...rest}
      background={false}
      className={prefix(classes, className)}
      fill={false}
      icon={icon}
      sprite={sprite}
    />
  );
};

ButtonIcon.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

ButtonIcon.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * icon name
   */
  icon: React.PropTypes.string.isRequired,
  /**
   * icon position
   */
  position: React.PropTypes.oneOf(['left', 'right']),
  /**
   * icon size
   */
  size: React.PropTypes.oneOf(['x-small', 'small', 'large']),
  /**
   * icon sprite name
   */
  sprite: React.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
};

export default ButtonIcon;
