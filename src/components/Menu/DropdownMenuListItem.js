import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG } from '../../';

const DropdownMenuListItem = (props) => {
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

  return (
    <li {...rest} className={cx(sldsClasses)} role="presentation">
      <a role="menuitem" onClick={onClick}>
        <span className="slds-truncate">
          {leftIconElem()}
          {children}
        </span>
        {rightIconElem()}
      </a>
    </li>
  );
};

DropdownMenuListItem.defaultProps = {
  className: null,
  divider: false,
  leftIcon: null,
  onClick: () => {},
  rightIcon: null,
  selected: false,
};

DropdownMenuListItem.propTypes = {
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

export default DropdownMenuListItem;
