import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';

const IconSVG = (props, { assetBasePath, cssPrefix }) => {
  const { background, className, fill, icon, size, sprite, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  let backgroundClass = background;
  if (backgroundClass === undefined || backgroundClass === true) {
    backgroundClass = `${sprite}-${icon}`;
  }
  const sldsClasses = [
    { icon: fill },
    { [`icon-${backgroundClass}`]: !!backgroundClass },
    { [`icon--${size}`]: !!size },
  ];

  return (
    <svg {...rest} aria-hidden="true" className={prefix(sldsClasses, className)}>
      <use xlinkHref={`${assetBasePath}assets/icons/${sprite}-sprite/svg/symbols.svg#${icon}`} />
    </svg>
  );
};

IconSVG.contextTypes = { assetBasePath: PropTypes.string, cssPrefix: PropTypes.string };

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

IconSVG.defaultProps = {
  fill: true,
};

export default IconSVG;
