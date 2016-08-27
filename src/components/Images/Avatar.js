
import React from 'react';
import { prefixClasses } from '../../utils';
import { flavorable } from '../../decorators';

export const Avatar = (props, { assetBasePath, cssPrefix }) => {
  const { alt, className, src, size, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = [
    'avatar',
    { [`avatar--${size}`]: !!size },
    { 'avatar--empty': !src },
  ];

  return (
    <span {...rest} className={prefix(classes, className)}>
      {src ? <img src={`${assetBasePath}/${src}`} alt={alt} /> : null}
    </span>
  );
};

Avatar.flavors = [
  'circle',
];

Avatar.contextTypes = {
  /**
   * the asset base path
   */
  assetBasePath: React.PropTypes.string,
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

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
