import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';
import { IconSVG } from '../../';

const DropdownMenuListItem = (props, { cssPrefix }) => {
  const { children, className, onClick, selected, leftIcon, rightIcon, divider, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const classes = ['dropdown__item'];

  if (divider) {
    classes.push('has-divider--top-space');
  }
  if (selected) {
    classes.push('is-selected');
  }

  const leftIconElem = () => {
    if (leftIcon) {
      const iconClasses = [
        { 'icon--selected': !leftIcon.alwaysDisplay },
        { 'icon-text-default': !leftIcon.alwaysDisplay },
        { 'm-right--x-small': !leftIcon.alwaysDisplay },
        { 'm-right--small': leftIcon.alwaysDisplay },
        { icon: leftIcon.alwaysDisplay },
      ];

      return (
        <IconSVG
          background={leftIcon.background}
          className={prefix(iconClasses)}
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
        'icon-selected',
        'icon-text-default',
        'm-left--small',
        'shrink-none',
      ];

      return (
        <IconSVG
          background={rightIcon.background}
          className={prefix(iconClasses)}
          icon={rightIcon.icon}
          size="x-small"
          sprite={rightIcon.sprite}
        />);
    }

    return null;
  };

  return (
    <li {...rest} className={prefix(classes, className)} role="presentation">
      <a role="menuitem" onClick={onClick}>
        <div className={prefix('truncate')}>
          {leftIconElem()}
          {children}
        </div>
        {rightIconElem()}
      </a>
    </li>
  );
};

DropdownMenuListItem.contextTypes = { cssPrefix: PropTypes.string };

DropdownMenuListItem.propTypes = {
  /**
   * The content of a menu item
   */
  children: PropTypes.node.isRequired,
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
