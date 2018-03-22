import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconSVG } from '../../';

/* eslint-disable react/prop-types */
const leftIconElem = ({ alwaysDisplay, sprite, icon }) => {
  const iconClasses = [
    { 'slds-icon_selected': !alwaysDisplay },
    { 'slds-icon-text-default': !alwaysDisplay },
    { 'slds-m-right_x-small': !alwaysDisplay },
    { 'slds-m-right_small': alwaysDisplay },
    { 'slds-icon': alwaysDisplay },
  ];

  return (
    <IconSVG
      className={cx(iconClasses)}
      icon={icon}
      size={alwaysDisplay ? 'small' : 'x-small'}
      sprite={sprite}
    />
  );
};

const rightIconElem = ({ icon, sprite }) => {
  const iconClasses = [
    'slds-icon-selected',
    'slds-icon-text-default',
    'slds-m-left_small',
    'slds-shrink-none',
  ];

  return (
    <IconSVG
      className={cx(iconClasses)}
      icon={icon}
      size="x-small"
      sprite={sprite}
    />
  );
};
/* eslint-enable */

const MenuItem = (props) => {
  const {
    children,
    className,
    dataValue,
    divider,
    id,
    leftIcon,
    rightIcon,
    selected,
    ...rest
  } = props;

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
          {leftIcon && leftIconElem(leftIcon)}
          {children}
        </span>
        {rightIcon && rightIconElem(rightIcon)}
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
  rightIcon: null,
  selected: null,
  id: null,
};

export default MenuItem;
