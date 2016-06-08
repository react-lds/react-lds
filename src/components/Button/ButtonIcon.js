import React from 'react';
import IconSVG from '../Icon/IconSVG';

const ButtonIcon = ({ sprite, icon, position, size }) => {
  const classes = [
    'button__icon',
    { [`button__icon--${position}`]: !!position },
    { [`button__icon--${size}`]: size },
  ];

  return (
    <IconSVG sprite={sprite} icon={icon} sldsClasses={classes} fill={false} />
  );
};

ButtonIcon.propTypes = {
  sprite: React.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
  icon: React.PropTypes.string.isRequired,
  position: React.PropTypes.oneOf(['left', 'right']),
  size: React.PropTypes.oneOf(['x-small', 'small', 'large']),
};

export default ButtonIcon;
