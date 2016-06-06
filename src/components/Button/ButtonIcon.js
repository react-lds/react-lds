import React from 'react';
import IconSVG from '../Icon/IconSVG';

import classNames from 'classnames';

const ButtonIcon = ({ sprite, icon, position, size }) => {
  const classes = {
    'slds-button__icon': true,
    [`slds-button__icon--${position}`]: !!position,
    [`slds-button__icon--${size}`]: size,
  };

  return (
    <IconSVG sprite={sprite} icon={icon} cssClasses={classNames(classes)} />
  );
};

ButtonIcon.propTypes = {
  sprite: React.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
  icon: React.PropTypes.string.isRequired,
  position: React.PropTypes.oneOf(['left', 'right']),
  size: React.PropTypes.oneOf(['x-small', 'small', 'large']),
};

export default ButtonIcon;
