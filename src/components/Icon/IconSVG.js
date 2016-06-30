import React from 'react';

import prefixable from './../../decorators/prefixable';
import { iconName } from './util';

const IconSVG = (props, { assetBasePath }) => {
  const { prefix, sprite, icon, background, size, fill } = props;
  let backgroundClass = background;
  if (!backgroundClass) {
    backgroundClass = `${sprite}-${icon}`;
  }
  const sldsClasses = [
    { icon: fill },
    `icon-${backgroundClass}`,
    { [`icon--${size}`]: !!size },
  ];

  return (
    <svg aria-hidden="true" className={prefix(sldsClasses, props)}>
      <use xlinkHref={`${assetBasePath}/assets/icons/${sprite}-sprite/svg/symbols.svg#${iconName(sprite, icon)}`} />
    </svg>
  );
};

IconSVG.propTypes = {
  /**
   * prefix from HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * the icon sprite collection
   */
  sprite: React.PropTypes.string.isRequired,
  /**
   * the icon name
   */
  icon: React.PropTypes.string.isRequired,
  /**
   * optional, set this if you want to override the default background class
   */
  background: React.PropTypes.string,
  /**
   * size of the icon
  */
  size: React.PropTypes.oneOf(['x-small', 'small', 'large']),
  /**
   * sets the slds-icon class, on by default
   */
  fill: React.PropTypes.bool,
};

IconSVG.defaultProps = {
  fill: true,
};

IconSVG.contextTypes = {
  assetBasePath: React.PropTypes.string.isRequired,
};

export default prefixable(IconSVG);
