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
      <IconSVG sprite={sprite} icon={icon} size={size} background={background} />
      <span className={prefix(['assistive-text'])}>{title}</span>
    </WrapperElement>
  );
};

Icon.propTypes = {
  /**
  * optional, set this if you want to override the default background class. set to false to not set a background
   */
  background: React.PropTypes.string,
  /**
   * renders a circular icon
   */
  circle: React.PropTypes.bool,
  /**
   * renders the icon in a div instead of a span
   */
  div: React.PropTypes.bool,
  /**
   * icon name
   */
  icon: React.PropTypes.string.isRequired,
  /**
   * icon size
   */
  size: React.PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  /**
   * icon sprite name
   */
  sprite: React.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
  /**
   * icon title
   */
  title: React.PropTypes.string,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(Icon);
