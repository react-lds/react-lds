
import React from 'react';
import { prefixable, flavorable } from '../../decorators';

export const Avatar = (props, { assetBasePath }) => {
  const { alt, prefix, src, size } = props;
  const sldsClasses = [
    'avatar',
    { [`avatar--${size}`]: !!size },
    { 'avatar--empty': !src },
  ];

  return (
    <span className={prefix(sldsClasses, props)}>
      {!!src ? <img src={`${assetBasePath}/${src}`} alt={alt} /> : null}
    </span>
  );
};

Avatar.flavors = [
  'circle',
];

Avatar.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * the img alt (required when src is specified)
   */
  alt: React.PropTypes.string,
  /**
   * the img src (prepended with context.assetBasePath)
   */
  src: React.PropTypes.string,
  /**
   * the image size
   */
  size: React.PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

Avatar.contextTypes = {
  assetBasePath: React.PropTypes.string.isRequired,
};

export default prefixable(
  flavorable(Avatar, 'avatar')
);
