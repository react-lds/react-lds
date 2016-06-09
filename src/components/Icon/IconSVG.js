import React from 'react';

import prefixable from './../../decorators/prefixable';
import { iconName } from './util';

const IconSVG = ({ prefix, sprite, icon, background, size, cssClasses }, { assetBasePath }) => {
  let classes = [
    'icon',
    { [`icon-${background}`]: !!background },
    { [`icon--${size}`]: !!size },
  ];

  if (cssClasses) {
    classes = cssClasses;
  }

  return (
    <svg aria-hidden="true" className={prefix(classes)}>
      <use xlinkHref={`${assetBasePath}/assets/icons/${sprite}-sprite/svg/symbols.svg#${iconName(sprite, icon)}`} />
    </svg>
  );
};

IconSVG.propTypes = {
  prefix: React.PropTypes.func.isRequired,
  sprite: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  background: React.PropTypes.string,
  size: React.PropTypes.string,
  cssClasses: React.PropTypes.array,
};

IconSVG.contextTypes = {
  assetBasePath: React.PropTypes.string.isRequired,
};

export default prefixable(IconSVG);
