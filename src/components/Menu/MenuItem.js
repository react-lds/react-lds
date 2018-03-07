import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconSVG } from '../../';

const MenuItem = (props) => {
  const {
    children,
    className,
    dataValue,
    divider,
    id,
    leftIcon,
    onClick,
    rightIcon,
    selected,
    ...rest
  } = props;

  const leftIconElem = () => {
    if (leftIcon) {
      const iconClasses = [
        { 'slds-icon_selected': !leftIcon.alwaysDisplay },
        { 'slds-icon-text-default': !leftIcon.alwaysDisplay },
        { 'slds-m-right_x-small': !leftIcon.alwaysDisplay },
        { 'slds-m-right_small': leftIcon.alwaysDisplay },
        { 'slds-icon': leftIcon.alwaysDisplay },
      ];

      return (
        <IconSVG
          className={cx(iconClasses)}
          icon={leftIcon.icon}
          size={leftIcon.alwaysDisplay ? 'small' : 'x-small'}
          sprite={leftIcon.sprite}
        />);
    }

    return null;
  };

  const rightIconElem = () => {
    if (rightIcon) {
      const iconClasses = [
        'slds-icon-selected',
        'slds-icon-text-default',
        'slds-m-left_small',
        'slds-shrink-none',
      ];

      return (
        <IconSVG
          className={cx(iconClasses)}
          icon={rightIcon.icon}
          size="x-small"
          sprite={rightIcon.sprite}
        />);
    }

    return null;
  };

  const sldsClasses = [
    'slds-dropdown__item',
    { 'slds-has-divider_top-space': divider },
    { 'slds-is-selected': selected },
    className,
  ];

  const role = (selected === null) ? 'menuitem' : 'menuitemcheckbox';
  // if selected true or false, it's a menuitemcheckbox, else it's a menuitem

  return (
    <li
      className={cx(sldsClasses)}
      role="presentation"
      onClick={onClick}
      {...rest}
    >
      <a
        aria-checked={selected}
        role={role}
        data-value={dataValue}
      >
        <span
          className="slds-truncate"
          title={children}
          data-value={dataValue}
        >
          {leftIconElem()}
          {children}
        </span>
        {rightIconElem()}
      </a>
    </li>
  );
};

MenuItem.propTypes = {
  /**
   * The content of a menu item
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * dataValue is required when using onSelect on parent
   */
  dataValue: PropTypes.string,
  /**
   * set to true if a divider should appear above this list item
   */
  divider: PropTypes.bool,
  /**
   * left icon that is only shown when selected is true
   */
  leftIcon: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    alwaysDisplay: PropTypes.bool,
  }),
  /**
   * optional onClick handler
   */
  onClick: PropTypes.func,
  /**
   * right icon that is always shown
   */
  rightIcon: PropTypes.shape({
    icon: PropTypes.string,
    sprite: PropTypes.string.isRequired,
  }),
  /**
   * sets this item into a selection state that displays the leftIcon
   */
  selected: PropTypes.bool,
  /**
   * id should be set by parent element
   */
  id: PropTypes.string,
};

MenuItem.defaultProps = {
  className: null,
  dataValue: null,
  divider: false,
  leftIcon: null,
  onClick: () => {},
  rightIcon: null,
  selected: null,
  id: null,
};

export default MenuItem;
