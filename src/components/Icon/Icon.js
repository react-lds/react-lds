import React from 'react';
import IconSVG from './IconSVG';

import { iconClass } from './util';
import { prefixable } from '../../decorators';

export const Icon = (props) => {
  const { sprite, icon, title, circle, background, size, div, prefix } = props;
  const backgroundClass = !background ? `icon-${sprite}-${iconClass(sprite, icon)}` : `icon-${background}`;

  const sldsClasses = [
    { icon_container: true },
    { 'icon_container--circle': circle },
    { [`${backgroundClass}`]: true },
  ];

  const WrapperElement = div ? 'div' : 'span';

  return (
    <WrapperElement className={prefix(sldsClasses, props)} title={title}>
      <IconSVG sprite={sprite} icon={icon} size={size} />
      <span className={prefix(['assistive-text'])}>{title}</span>
    </WrapperElement>
  );
};

Icon.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  sprite: React.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  circle: React.PropTypes.bool,
  div: React.PropTypes.bool,
  background: React.PropTypes.string,
  size: React.PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

export default prefixable(Icon);
