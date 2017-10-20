import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG } from '../../';

const ButtonIcon = (props) => {
  const { className, sprite, icon, position, size, ...rest } = props;

  const sldsClasses = [
    'slds-button__icon',
    { [`slds-button__icon_${position}`]: !!position },
    { [`slds-button__icon_${size}`]: !!size },
    className
  ];

  return (
    <IconSVG
      {...rest}
      className={cx(sldsClasses)}
      fill={false}
      icon={icon}
      sprite={sprite}
      isButton
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
   * class name
   *
   */
  className: PropTypes.string,
  /**
   * icon name
   */
  icon: PropTypes.string.isRequired,
  /**
   * icon position
   */
  position: PropTypes.oneOf(['left', 'right']),
  /**
   * icon size
   */
  size: PropTypes.oneOf(['x-small', 'small', 'large']),
  /**
   * icon sprite name
   */
  sprite: PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
};

export default ButtonIcon;
