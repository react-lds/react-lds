import React from 'react';

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
    <li {...rest} className={prefix(classes, className)} onClick={onClick}>
      <a role="menuitem">
        <p className={prefix('truncate')}>
          {leftIconElem()}
          {children}
        </p>
        {rightIconElem()}
      </a>
    </li>
  );
};

DropdownMenuListItem.contextTypes = { cssPrefix: React.PropTypes.string };

DropdownMenuListItem.propTypes = {
  /**
   * The content of a menu item, this is just a string
   */
  children: React.PropTypes.string.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * set to true if a divider should appear above this list item
   */
  divider: React.PropTypes.bool,
  /**
   * left icon that is only shown when selected is true
   */
  leftIcon: React.PropTypes.shape({
    icon: React.PropTypes.string.isRequired,
    sprite: React.PropTypes.string.isRequired,
    background: React.PropTypes.string,
    alwaysDisplay: React.PropTypes.bool,
  }),
  /**
   * onClick handler
   */
  onClick: React.PropTypes.func,
  /**
   * right icon that is always shown
   */
  rightIcon: React.PropTypes.shape({
    icon: React.PropTypes.string,
    sprite: React.PropTypes.string.isRequired,
    background: React.PropTypes.string,
  }),
  /**
   * sets this item into a selection state that displays the leftIcon
   */
  selected: React.PropTypes.bool,
};

export default DropdownMenuListItem;
