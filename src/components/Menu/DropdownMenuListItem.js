import React from 'react';

import prefixable from './../../decorators/prefixable';
import { IconSVG } from '../../index';

export const DropdownMenuListItem = ({
  prefix,
  children,
  onClick,
  isSelected,
  leftIcon,
  rightIcon,
  divider,
}) => {
  const classes = ['dropdown__item'];
  if (divider) {
    classes.push('has-divider--top-space');
  }
  if (isSelected) {
    classes.push('is-selected');
  }

  const leftIconElem = () => {
    if (leftIcon) {
      return (
        <IconSVG
          sprite={leftIcon.sprite}
          icon={leftIcon.icon}
          size={leftIcon.alwaysDisplay ? 'small' : 'x-small'}
          background={leftIcon.background}
          sldsClasses={[
            { 'icon--selected': !leftIcon.alwaysDisplay },
            { 'm-right--x-small': !leftIcon.alwaysDisplay },
            { 'm-right--small': leftIcon.alwaysDisplay },
            { icon: leftIcon.alwaysDisplay },
          ]}
        />);
    }

    return '';
  };

  const rightIconElem = () => {
    if (rightIcon) {
      return (
        <IconSVG
          sprite={rightIcon.sprite}
          icon={rightIcon.icon}
          size="x-small"
          background={rightIcon.background}
          sldsClasses={['icon-selected', 'icon-text-default', 'm-left--small', 'shrink-none']}
        />);
    }

    return '';
  };

  return (
    <li className={prefix(classes)} onClick={onClick}>
      <a role="menuitem">
        <p className={prefix(['truncate'])}>
          {leftIconElem()}
          {children}
        </p>
        {rightIconElem()}
      </a>
    </li>
  );
};

DropdownMenuListItem.propTypes = {
  /**
   * The content of a menu item, this is just a string
   */
  children: React.PropTypes.string.isRequired,
  /**
   * set to true if a divider should appear above this list item
   */
  divider: React.PropTypes.bool,
  /**
   * sets this item into a selection state that displays the leftIcon
   */
  isSelected: React.PropTypes.bool,
  /**
   * left icon that is only shown when isSelected is true
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
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(DropdownMenuListItem);
