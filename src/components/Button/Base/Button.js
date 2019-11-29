import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';

const Button = React.forwardRef((props, ref) => {
  const {
    buttonEl,
    children,
    className,
    flavor,
    href,
    icon,
    iconPosition,
    sprite,
    stretch,
    title,
    ...rest
  } = props;

  const hasFlavor = flavor != null && flavor !== 'none';

  const sldsClasses = cx(
    'slds-button',
    { [`slds-button_${flavor}`]: hasFlavor },
    { 'slds-button_stretch': stretch && flavor !== 'stretch' },
    className,
  );

  const ButtonEl = href
    ? 'a'
    : buttonEl || 'button';

  const position = iconPosition || 'left';
  const content = children || title;

  const isShortcut = !!icon && !!sprite;
  const isRightShortcut = isShortcut && position !== 'left';

  return (
    <ButtonEl
      {...rest}
      className={sldsClasses}
      href={href}
      ref={ref}
      title={title}
    >
      {isRightShortcut ? content : null}
      {isShortcut && (
        <ButtonIcon
          position={position}
          icon={icon}
          sprite={sprite}
        />
      )}
      {!isRightShortcut ? content : null}
    </ButtonEl>
  );
});

Button.displayName = 'Button';

Button.defaultProps = {
  buttonEl: null,
  children: null,
  className: null,
  flavor: 'neutral',
  href: null,
  icon: null,
  iconPosition: null,
  sprite: null,
  stretch: false,
  title: null,
};

Button.propTypes = {
  /**
   * Custom element (default is `button` or `a` when `href` is present)
   */
  buttonEl: PropTypes.string,
  /**
   * Used to set content in advanced use cases
   */
  children: PropTypes.node,
  /**
   * Title attribute. Will be button content if no children are set
   */
  title: PropTypes.string,
  /**
   * Shortcut to render a button with an icon. Used together with `sprite`
   */
  icon: PropTypes.string,
  /**
   * Shortcut to render a button with an icon. Used together with `icon`
   */
  sprite: PropTypes.string,
  /**
   *  Shortcut to render a button with an icon. Can be "left" or "right". Used together with `icon`
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Optional additional className
   */
  className: PropTypes.string,
  /**
   * Can be either `neutral`, `brand`, `outline-brand`, `destructive`, `text-destructive`, `success` or `inverse`
   * Default to `neutral`, set to "none" or `null` explicitely to render a plain button
   * [DEPRECATED] `prop.stretch` should be used instd. of `flavor="stretch"`
   */
  flavor: PropTypes.oneOf([
    'brand',
    'destructive',
    'inverse',
    'neutral',
    'none',
    'outline-brand',
    'success',
    'text-destructive',
    'stretch',
  ]),
  /**
   * Optional href, renders as `a` when set
   */
  href: PropTypes.string,
  /**
   * Renders a full-width button
   */
  stretch: PropTypes.bool,
};

export default Button;
