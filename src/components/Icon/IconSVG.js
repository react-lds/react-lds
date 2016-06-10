import React from 'react';

import prefixable from './../../decorators/prefixable';
import { iconName } from './util';

const IconSVG = (props, { assetBasePath }) => {
  const { prefix, sprite, icon, background, size, fill = true } = props;
  const sldsClasses = [
    { icon: fill },
    { [`icon-${background}`]: !!background },
    { [`icon--${size}`]: !!size },
  ];

  return (
    <svg aria-hidden="true" className={prefix(sldsClasses, props)}>
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
  fill: React.PropTypes.bool,
};

IconSVG.contextTypes = {
  assetBasePath: React.PropTypes.string.isRequired,
};

export default prefixable(IconSVG);
