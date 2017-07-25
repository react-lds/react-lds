import React from 'react';
import PropTypes from 'prop-types';

import { IconSVG } from '../../';
import { prefixClasses } from '../../utils';

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

ButtonIcon.contextTypes = { cssPrefix: PropTypes.string };

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
