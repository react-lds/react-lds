import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const IconSVG = (props, { assetBasePath }) => {
  const { className, icon, size, sprite, isButton, ...rest } = props;

  const sldsClasses = [
    { 'slds-icon': !isButton },
    { [`slds-icon_${size}`]: !!size },
    className
  ];

  return (
    <svg {...rest} aria-hidden="true" className={cx(sldsClasses)}>
      <use xlinkHref={`${assetBasePath}assets/icons/${sprite}-sprite/svg/symbols.svg#${icon}`} />
    </svg>
  );
};

IconSVG.contextTypes = { assetBasePath: PropTypes.string };

IconSVG.defaultProps = {
  className: null,
  size: null,
  isButton: false,
};

IconSVG.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * icon name
   */
  icon: PropTypes.string.isRequired,
  /**
   * icon size
   */
  size: PropTypes.oneOf(['x-small', 'small', 'large']),
  /**
   * icon sprite name
   */
  sprite: PropTypes.string.isRequired,
  /**
   * removes slds_icon class (done internally by ButtonIcon)
   */
  isButton: PropTypes.bool,
};

export default IconSVG;
