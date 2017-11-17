import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Avatar = (props) => {
  const { alt, circle, className, src, size, title, ...rest } = props;

  const sldsClasses = [
    'slds-avatar',
    { [`slds-avatar_${size}`]: !!size },
    { 'slds-avatar_empty': !src },
    { 'slds-avatar_circle': circle },
    className
  ];

  return (
    <span {...rest} className={cx(sldsClasses)}>
      {src ? <img src={src} alt={alt} title={title} /> : null}
    </span>
  );
};

Avatar.defaultProps = {
  alt: null,
  circle: false,
  className: null,
  size: null,
  src: null,
  title: null,
};

Avatar.propTypes = {
  /**
   * img alt
   */
  alt: PropTypes.string,
  /**
   * renders a round avatar
   */
  circle: PropTypes.bool,
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
  /**
   * title
   */
  title: PropTypes.string,
};

export default Avatar;
