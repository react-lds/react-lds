import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const IconSVG = (props, { assetBasePath }) => {
  const { className, icon, size, pathPrefix, sprite, isButton, ...rest } = props;

  const sldsClasses = [
    { 'slds-icon': !isButton },
    { [`slds-icon_${size}`]: !!size },
    className
  ];

  return (
    <svg {...rest} aria-hidden="true" className={cx(sldsClasses)}>
      <use xlinkHref={`${assetBasePath}${pathPrefix}${sprite}-sprite/svg/symbols.svg#${icon}`} />
    </svg>
  );
};

IconSVG.contextTypes = { assetBasePath: PropTypes.string };

IconSVG.defaultProps = {
  className: null,
  pathPrefix: '/icons/',
  size: null,
  isButton: false,
};

IconSVG.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * icon name
   */
  icon: PropTypes.string.isRequired,
  /**
   * Path between assetBasePath and the corresponding sprite.
   * This changed for <apex:slds /> between some SF apiVersions and is set to support 42.0
   */
  pathPrefix: PropTypes.string,
  /**
   * icon size
   */
  size: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  /**
   * icon sprite name
   */
  sprite: PropTypes.string.isRequired,
  /**
   * removes slds_icon class (done internally by ButtonIcon)
   */
  isButton: PropTypes.bool,
};

export default IconSVG;
