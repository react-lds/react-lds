import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const Avatar = (props) => {
  const { alt, className, src, size, ...rest } = props;

  const sldsClasses = [
    'slds-avatar',
    { [`slds-avatar--${size}`]: !!size },
    { 'slds-avatar--empty': !src },
    className
  ];

  return (
    <span {...rest} className={cx(sldsClasses)}>
      {src ? <img src={src} alt={alt} /> : null}
    </span>
  );
};

Avatar.flavors = [
  'circle',
];

Avatar.defaultProps = {
  alt: null,
  className: null,
  size: null,
  src: null,
};

Avatar.propTypes = {
  /**
   * img alt
   */
  alt: PropTypes.string,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * img src (prepended with context.assetBasePath)
   */
  src: PropTypes.string,
  /**
   * image size
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

export default flavorable(Avatar, 'avatar');
