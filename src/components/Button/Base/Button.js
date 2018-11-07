import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';

const Button = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    flavor,
    href,
    icon,
    iconPosition,
    sprite,
    title,
    ...rest
  } = props;

  const hasFlavor = flavor != null && flavor !== 'none';

  const sldsClasses = cx(
    'slds-button',
    { [`slds-button_${flavor}`]: hasFlavor },
    className,
  );

  const ButtonEl = href ? 'a' : 'button';
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

Button.defaultProps = {
  children: null,
  className: null,
  flavor: 'neutral',
  href: null,
  icon: null,
  iconPosition: null,
  sprite: null,
  title: null,
};

Button.propTypes = {
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
  ]),
  /**
   * Optional href, renders as `a` when set
   */
  href: PropTypes.string,
};

export default Button;
