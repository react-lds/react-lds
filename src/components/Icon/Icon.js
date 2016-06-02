import React from 'react';
import IconSVG from './IconSVG';

import classNames from 'classnames';
import { iconName } from './util';

const Icon = ({ sprite, icon, title, circle, background, size, div }) => {
  const backgroundClass = !background ? `slds-icon-${sprite}-${iconName(sprite, icon)}` : `slds-icon-${background}`;

  const classes = {
    'slds-icon_container': true,
    'slds-icon_container--circle': circle,
    [`${backgroundClass}`]: true,
  };

  const WrapperElement = div ? 'div' : 'span';

  return (
    <WrapperElement className={classNames(classes)} title={title}>
      <IconSVG sprite={sprite} icon={icon} size={size} />
      <span className="slds-assistive-text">{title}</span>
    </WrapperElement>
  );
};

Icon.propTypes = {
  sprite: React.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  circle: React.PropTypes.bool,
  div: React.PropTypes.bool,
  background: React.PropTypes.string,
  size: React.PropTypes.oneOf(['x-small', 'small', 'large']),
};

export default Icon;
