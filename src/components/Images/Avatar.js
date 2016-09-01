import React from 'react';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Avatar = (props, { cssPrefix }) => {
  const { alt, className, src, size, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'avatar',
    { [`avatar--${size}`]: !!size },
    { 'avatar--empty': !src },
  ];

  return (
    <span {...rest} className={prefix(classes, className)}>
      {src ? <img src={src} alt={alt} /> : null}
    </span>
  );
};

Avatar.flavors = [
  'circle',
];

Avatar.contextTypes = { cssPrefix: React.PropTypes.string };

Avatar.propTypes = {
  /**
   * img alt
   */
  alt: React.PropTypes.string,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * img src (prepended with context.assetBasePath)
   */
  src: React.PropTypes.string,
  /**
   * image size
   */
  size: React.PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

export default flavorable(Avatar, 'avatar');
