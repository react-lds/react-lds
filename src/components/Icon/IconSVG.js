import React from 'react';

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

IconSVG.contextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };

IconSVG.propTypes = {
  /**
   * optional, set this if you want to override the default background class. set to false to not set a background
   */
  background: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * adds the slds-icon class, on by default
   */
  fill: React.PropTypes.bool,
  /**
   * icon name
   */
  icon: React.PropTypes.string.isRequired,
  /**
   * icon size
   */
  size: React.PropTypes.oneOf(['x-small', 'small', 'large']),
  /**
   * icon sprite name
   */
  sprite: React.PropTypes.string.isRequired,
};

IconSVG.defaultProps = {
  fill: true,
};

export default IconSVG;
