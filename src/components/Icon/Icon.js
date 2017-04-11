import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';
import { IconSVG } from '../../';

const iconClass = (sprite, icon) => icon.replace(/_/g, '-');

const Icon = (props, { cssPrefix }) => {
  const { background, circle, className, div, icon, size, sprite, title, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);
  const backgroundClass = !background ? `icon-${sprite}-${iconClass(sprite, icon)}` : `icon-${background}`;

  const sldsClasses = [
    { icon_container: true },
    { 'icon_container--circle': circle },
    { [`${backgroundClass}`]: true },
  ];

  const WrapperElement = div ? 'div' : 'span';

  return (
    <WrapperElement {...rest} className={prefix(sldsClasses, className)} title={title}>
      <IconSVG sprite={sprite} icon={icon} size={size} background={background} />
      <span className={prefix('assistive-text')}>{title}</span>
    </WrapperElement>
  );
};

Icon.contextTypes = { cssPrefix: PropTypes.string };

Icon.propTypes = {
  /**
  * optional, set this if you want to override the default background class. set to false to not set a background
   */
  background: PropTypes.string,
  /**
   * renders a circular icon
   */
  circle: PropTypes.bool,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * renders the icon in a div instead of a span
   */
  div: PropTypes.bool,
  /**
   * icon name
   */
  icon: PropTypes.string.isRequired,
  /**
   * icon size
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  /**
   * icon sprite name
   */
  sprite: PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
  /**
   * icon title
   */
  title: PropTypes.string,
};

export default Icon;
