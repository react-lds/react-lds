import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';

const Button = (props) => {
  const {
    children,
    className,
    flavor,
    href,
    icon,
    sprite,
    ...rest
  } = props;

  const sldsClasses = cx(
    'slds-button',
    { [`slds-button_${flavor}`]: !!flavor },
    className,
  );

  const ButtonEl = href ? 'a' : 'button';

  const isShortcut = !!icon && !!sprite;

  return (
    <ButtonEl
      {...rest}
      className={sldsClasses}
      href={href}
    >
      {isShortcut && (
        <ButtonIcon
          position="left"
          icon={icon}
          sprite={sprite}
        />
      )}
      {children}
    </ButtonEl>
  );
};

Button.defaultProps = {
  className: null,
  flavor: 'neutral',
  href: null,
  icon: null,
  sprite: null,
};

Button.propTypes = {
  /**
   * Shortcut to render a left-positioned icon. Used together with `sprite`
   */
  icon: PropTypes.string,
  /**
   * Shortcut to render a left-positioned icon. Used together with `icon`
   */
  sprite: PropTypes.string,
  /**
   * Used to set content. Can be a string, a `ButtonIcon` or a combination of those
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional additional className
   */
  className: PropTypes.string,
  /**
   * Can be either `neutral`, `brand`, `destructive`, `success` or `inverse`
   * Default to `neutral`, set to `null` explicitely to render a plain button
   */
  flavor: PropTypes.oneOf(['neutral', 'brand', 'destructive', 'success', 'inverse']),
  /**
   * Optional href, renders as `a` when set.
   */
  href: PropTypes.string,
};

export default Button;
