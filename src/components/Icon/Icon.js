import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG } from '../../';

const iconClass = (sprite, icon) => icon.replace(/_/g, '-');

const Icon = (props) => {
  const {
    background,
    circle,
    className,
    div,
    icon,
    size,
    sprite,
    svgClassName,
    title,
    ...rest
  } = props;

  const backgroundClass = !background
    ? `slds-icon-${sprite}-${iconClass(sprite, icon)}`
    : `slds-icon-${background}`;

  const sldsClasses = [
    { 'slds-icon_container': true },
    { 'slds-icon_container_circle': circle },
    { [`${backgroundClass}`]: true },
    className
  ];

  const WrapperElement = div ? 'div' : 'span';

  return (
    <WrapperElement {...rest} className={cx(sldsClasses)} title={title}>
      <IconSVG
        background={background}
        className={svgClassName}
        icon={icon}
        size={size}
        sprite={sprite}
      />
      <span className="slds-assistive-text">{title}</span>
    </WrapperElement>
  );
};

Icon.defaultProps = {
  background: null,
  circle: false,
  className: null,
  div: false,
  size: null,
  svgClassName: null,
  title: null,
};

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
   * iconSvg className
   */
  svgClassName: PropTypes.string,
  /**
   * icon title
   */
  title: PropTypes.string,
};

export default Icon;
