import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const IconSVG = (props, { assetBasePath }) => {
  const { background, className, fill, icon, size, sprite, ...rest } = props;

  let backgroundClass = background;
  if (backgroundClass === undefined || backgroundClass === true) {
    backgroundClass = `slds-${sprite}-${icon}`;
  }
  const sldsClasses = [
    { 'slds-icon': fill },
    { [`slds-icon-${backgroundClass}`]: !!backgroundClass },
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
  background: false,
  className: null,
  fill: true,
  size: null,
};

IconSVG.propTypes = {
  /**
   * optional, set this if you want to override the default background class. set to false to not set a background
   */
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * adds the slds-icon class, on by default
   */
  fill: PropTypes.bool,
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
};

export default IconSVG;
