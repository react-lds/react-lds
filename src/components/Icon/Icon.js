import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG } from '../../';

const iconClass = (sprite, icon) => icon.replace(/_/g, '-');

const Icon = (props) => {
  const {
    background,
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
    { 'slds-icon_container_circle': sprite === 'action' },
    { [`${backgroundClass}`]: background !== false },
    className
  ];

  const WrapperElement = div ? 'div' : 'span';

  return (
    <WrapperElement {...rest} className={cx(sldsClasses)} title={title}>
      <IconSVG
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
  className: null,
  div: false,
  size: null,
  svgClassName: null,
  title: null,
};

Icon.propTypes = {
  /** Set this if you want to override the default background class. set to false to not set a background */
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** class name */
  className: PropTypes.string,
  /** <div>-container instead of a <span>-container */
  div: PropTypes.bool,
  /** Name of the icon */
  icon: PropTypes.string.isRequired,
  /** Size */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  /** Name of the sprite containing the icon */
  sprite: PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']).isRequired,
  /** ClassName that will be handed over to the <svg /> */
  svgClassName: PropTypes.string,
  /** Descriptive Title */
  title: PropTypes.string,
};

export default Icon;
