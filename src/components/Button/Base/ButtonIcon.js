import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconSVG } from '../../Icon';

const ButtonIcon = (props) => {
  const {
    className,
    icon,
    size,
    sprite,
    position,
    ...rest
  } = props;

  const sldsClasses = cx(
    'slds-button__icon',
    { [`slds-button__icon_${size}`]: !!size },
    { [`slds-button__icon_${position}`]: !!position },
    className,
  );

  return (
    <IconSVG
      {...rest}
      className={sldsClasses}
      isButton
      icon={icon}
      sprite={sprite}
    />
  );
};

ButtonIcon.defaultProps = {
  className: null,
  position: null,
};

ButtonIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'x-small']),
  sprite: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
};

export default ButtonIcon;
