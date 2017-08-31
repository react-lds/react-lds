import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG } from '../../';

const MenuDropdownListItem = (props) => {
  const { children, className, onClick, selected, leftIcon, rightIcon, divider, ...rest } = props;

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
          background={leftIcon.background}
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
          background={rightIcon.background}
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
    <li {...rest} className={cx(sldsClasses)} role="presentation">
      <a role={role} onClick={onClick} aria-checked={selected}>
        <span className="slds-truncate" title={children}>
          {leftIconElem()}
          {children}
        </span>
        {rightIconElem()}
      </a>
    </li>
  );
};

MenuDropdownListItem.defaultProps = {
  className: null,
  divider: false,
  leftIcon: null,
  onClick: () => {},
  rightIcon: null,
  selected: null,
};

MenuDropdownListItem.propTypes = {
  /**
   * The content of a menu item
   */
  children: PropTypes.string.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
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
    background: PropTypes.string,
    alwaysDisplay: PropTypes.bool,
  }),
  /**
   * onClick handler
   */
  onClick: PropTypes.func,
  /**
   * right icon that is always shown
   */
  rightIcon: PropTypes.shape({
    icon: PropTypes.string,
    sprite: PropTypes.string.isRequired,
    background: PropTypes.string,
  }),
  /**
   * sets this item into a selection state that displays the leftIcon
   */
  selected: PropTypes.bool,
};

export default MenuDropdownListItem;
