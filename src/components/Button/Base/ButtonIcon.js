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
  size: null,
};

ButtonIcon.propTypes = {
  /**
   * Icon that will be rendered
   */
  icon: PropTypes.string.isRequired,
  /**
   * Sprite containing `icon`
   */
  sprite: PropTypes.string.isRequired,
  /**
   * Optional size. Either `x-small`, `small` or `large`
   */
  size: PropTypes.oneOf(['x-small', 'small', 'large']),
  /**
   * Position in `Button`. Either left or right, can also be `null`
   */
  position: PropTypes.oneOf(['left', 'right']),
  /**
   * Optional additional className
   */
  className: PropTypes.string,
};

export default ButtonIcon;
