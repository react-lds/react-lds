import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Base/Button';
import ButtonIcon from '../Base/ButtonIcon';

const prefix = 'slds-button_icon';

const IconButton = (props) => {
  const {
    border,
    children,
    className,
    iconClassName,
    container,
    flavor,
    icon,
    more,
    size,
    sprite,
    title,
    ...rest
  } = props;

  const isInverse = flavor === 'inverse';

  /* eslint-disable no-nested-ternary */
  const borderSuffix = isInverse && border
    ? 'border-inverse'
    : border === 'filled' ? 'border-filled' : 'border';
  /* eslint-enable */

  const sldsClasses = cx(
    prefix,
    { [`${prefix}-${size}`]: !!size },
    { [`${prefix}-${borderSuffix}`]: !!border },
    { [`${prefix}-container`]: container },
    { [`${prefix}-inverse`]: isInverse && !border },
    { [`${prefix}-more`]: more },
    { [`${prefix}-${flavor}`]: flavor && !isInverse },
    className
  );

  const isShortcut = !!icon && !!sprite;

  return (
    <Button
      {...rest}
      className={sldsClasses}
      flavor={null}
      title={title}
    >
      {!isShortcut ? children : (
        <ButtonIcon
          icon={icon}
          sprite={sprite}
          className={iconClassName}
        />
      )}
      {more && (
        <ButtonIcon
          icon="down"
          size="x-small"
          sprite="utility"
          className={iconClassName}
        />
      )}
      {title && <span className="slds-assistive-text">{title}</span>}
    </Button>
  );
};

IconButton.defaultProps = {
  border: null,
  children: null,
  className: null,
  iconClassName: null,
  container: false,
  icon: null,
  sprite: null,
  more: false,
  flavor: null,
  title: null,
  size: null,
};

IconButton.propTypes = {
  /**
   * Shortcut to render a ButtonIcon. Used in combination with `sprite`
   */
  icon: PropTypes.string,
  /**
   * Shortcut to render a ButtonIcon. Used in combination with `icon`
   */
  sprite: PropTypes.string,
  /**
   * If shortcut does not suffice (e.g. you need more control over ButtonIcon), you can add a ButtonIcon as child
   */
  children: PropTypes.node,
  /**
   * Renders a border. Can be `true` to render a transparent border or filled to render a visible border
   */
  border: PropTypes.oneOf([true, 'filled']),
  /**
   * Adjust icon sizes. Used to render transparent icons with padding
   */
  container: PropTypes.bool,
  /**
   * Optional additional classNames
   */
  className: PropTypes.string,
  /**
   * Optional additional classNames for the icon svg
   */
  iconClassName: PropTypes.string,
  /**
   * Renders a small down chevron besides the main icon. Used for example in IconButton groups
   */
  more: PropTypes.bool,
  /**
   * Can be either `brand`, `error` or `inverse`
   */
  flavor: PropTypes.oneOf([
    'brand',
    'error',
    'inverse',
  ]),
  /**
   * Adjusts icon size. Can be `xx-small`, `x-small` or `small`
   */
  size: PropTypes.oneOf([
    'xx-small',
    'x-small',
    'small',
  ]),
  /**
   * Title for hover and screenreaders
   */
  title: PropTypes.string
};

export default IconButton;
