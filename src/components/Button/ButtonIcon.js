import React from 'react';
import IconSVG from '../Icon/IconSVG';

const ButtonIcon = ({ sprite, icon, position, size }) => {
  const classes = [
    'button__icon',
    { [`button__icon--${position}`]: !!position },
    { [`button__icon--${size}`]: size },
  ];

  return (
    <IconSVG sprite={sprite} icon={icon} sldsClasses={classes} fill={false} background={false} />
  );
};

ButtonIcon.propTypes = {
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
