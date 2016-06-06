import React from 'react';

import classNames from 'classnames';
import { iconName } from './util';

const IconSVG = ({ sprite, icon, background, size, cssClasses }, { assetBasePath }) => {
  let classes = {
    'slds-icon': true,
    [`slds-icon-${background}`]: !!background,
    [`slds-icon--${size}`]: !!size,
  };

  if (cssClasses) {
    classes = cssClasses;
  } else {
    classes = classNames(classes);
  }

  return (
    <svg aria-hidden="true" className={classes}>
      <use xlinkHref={`${assetBasePath}/assets/icons/${sprite}-sprite/svg/symbols.svg#${iconName(sprite, icon)}`} />
    </svg>
  );
};

IconSVG.propTypes = {
  sprite: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  background: React.PropTypes.string,
  size: React.PropTypes.string,
  cssClasses: React.PropTypes.string,
};

IconSVG.contextTypes = {
  assetBasePath: React.PropTypes.string.isRequired,
};

export default IconSVG;
