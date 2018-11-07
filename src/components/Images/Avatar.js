import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  isString,
  startCase,
  upperCase,
  words,
} from 'lodash-es';
import { Icon } from '../Icon';

export const BaseAvatar = ({
  className,
  image,
  round,
  size,
  renderFallback,
  ...rest
}) => (
  <span
    {...rest}
    className={cx([
      'slds-avatar',
      { 'slds-avatar_circle': round },
      { [`slds-avatar_${size}`]: size },
      className,
    ])}
  >
    {image || renderFallback()}
  </span>
);

BaseAvatar.defaultProps = {
  className: null,
  image: null,
  renderFallback: () => null,
  round: false,
  size: null,
};

BaseAvatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.element,
  renderFallback: PropTypes.func,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

export const getInitials = (str = '') => {
  if (!isString(str) || str.length === 0) return '';
  const strWords = words(str);
  const [first, second] = strWords;
  if (!first) return '';
  if (!second) return startCase(first.substring(0, 2));
  return upperCase(`${first[0]}${second[0]}`);
};

export const EntityAvatar = ({
  displayType,
  icon: { icon, sprite },
  name,
  ...rest
}) => {
  const fallbackRenderer = displayType === 'icon'
    ? () => <Icon icon={icon} sprite={sprite} title={name} />
    : () => (
      <abbr className={cx(['slds-avatar__initials', `slds-icon-${sprite}-${icon}`])} title={name}>
        {getInitials(name)}
      </abbr>
    );

  return <BaseAvatar {...rest} image={null} renderFallback={fallbackRenderer} />;
};

EntityAvatar.defaultProps = {
  className: null,
  displayType: 'icon',
  round: false,
  size: null,
  title: null,
};

EntityAvatar.propTypes = {
  /**
   * Additional classnames
   */
  className: PropTypes.string,
  /**
   * Display Types:
   * `icon`: icon set via `icon`
   * `initials`: initials (computed from `name`) in `icon` coloring
   */
  displayType: PropTypes.oneOf(['icon', 'initials']),
  /**
   * Combination of icon and sprite corresponding to the entity type
   */
  icon: PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * Entity name
   */
  name: PropTypes.string.isRequired,
  /**
   * Avatar size
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  /**
   * `title` attribute, defaults to the value of `name` if not set
   */
  title: PropTypes.string,
};

export const UserAvatar = ({
  className,
  fallbackType,
  imageSrc,
  name,
  round,
  title,
  ...rest
}) => {
  const tooltip = title || name;

  if (imageSrc) {
    return (
      <BaseAvatar
        {...rest}
        className={className}
        round={round}
        image={<img src={imageSrc} alt={name} title={tooltip} />}
      />
    );
  }

  const sldsClasses = [
    { 'slds-avatar_profile-image-large': fallbackType === 'profile-image' },
    { 'slds-avatar_group-image-large': fallbackType === 'group-image' },
    className,
  ];

  const isCssImageFallback = fallbackType === 'profile-image' || fallbackType === 'group-image';

  let fallbackRenderer;

  if (isCssImageFallback) {
    fallbackRenderer = () => <span className="slds-assistive-text">{name}</span>;
  } else if (fallbackType === 'icon') {
    fallbackRenderer = () => <Icon sprite="standard" icon="user" title={tooltip} />;
  } else {
    const classes = [
      'slds-avatar__initials',
      { 'slds-icon-standard-user': fallbackType === 'initials' },
      { 'slds-avatar__initials_inverse': fallbackType === 'initials-inverse' }
    ];

    fallbackRenderer = () => <abbr className={cx(classes)} title={tooltip}>{getInitials(name)}</abbr>;
  }

  return (
    <BaseAvatar
      {...rest}
      className={cx(sldsClasses)}
      round={round || !isCssImageFallback}
      renderFallback={fallbackRenderer}
      title={isCssImageFallback ? tooltip : null}
    />
  );
};

UserAvatar.defaultProps = {
  className: null,
  fallbackType: 'icon',
  imageSrc: null,
  round: false,
  size: null,
  title: null,
};

UserAvatar.propTypes = {
  /**
   * Additional classnames
   */
  className: PropTypes.string,
  /**
   * Fallback Types:
   * `icon`: icon of the User object
   * `initials`: initials (computed from `name`) in User object standard coloring
   * `initials-inverse`: initials in inverse coloring
   * `profile-image`: LDS profile image placeholder
   * `group-image`: LDS group image placeholder
   */
  fallbackType: PropTypes.oneOf([
    'icon',
    'initials',
    'initials-inverse',
    'profile-image',
    'group-image',

  ]),
  /**
   * `src` attribute of the avatar image. If not set, a fallback of `fallbackType` will be rendered
   */
  imageSrc: PropTypes.string,
  /**
   * User Name or identifier
   */
  name: PropTypes.string.isRequired,
  /**
   * Renders as a round image / fallback
   */
  round: PropTypes.bool,
  /**
   * Avatar size
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  /**
   * `title` attribute, defaults to the value of `name` if not set
   */
  title: PropTypes.string,
};

// Deprecated
export const Avatar = (props) => {
  const {
    alt,
    circle,
    className,
    src,
    size,
    title,
    ...rest
  } = props;
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

// Deprecated
Avatar.defaultProps = {
  alt: null,
  circle: false,
  className: null,
  size: null,
  src: null,
  title: null,
};

// Deprecated
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
