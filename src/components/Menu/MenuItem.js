import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import isString from 'lodash-es/isString';
import { IconSVG } from '../..';

const nonCapturing = { pointerEvents: 'none' };

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
      style={nonCapturing}
    />
  );
};
/* eslint-enable */

const MenuItem = (props) => {
  const {
    children,
    className,
    'data-value': dataValue,
    divider,
    id,
    leftIcon,
    rightIcon,
    selected,
    title,
    ...rest
  } = props;

  const sldsClasses = [
    'slds-dropdown__item',
    { 'slds-has-divider_top-space': divider },
    { 'slds-is-selected': selected },
    className,
  ];

  const assistiveTitle = title || (isString(children) && children);

  const role = (selected === null) ? 'menuitem' : 'menuitemcheckbox';
  // if selected true or false, it's a menuitemcheckbox, else it's a menuitem

  return (
    <li
      {...rest}
      className={cx(sldsClasses)}
      role="presentation"
    >
      <a
        aria-checked={selected}
        data-value={dataValue}
        role={role}
      >
        <span
          className="slds-truncate"
          style={nonCapturing}
          title={assistiveTitle}
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
   * data-value is required when using onSelect on parent
   */
  'data-value': PropTypes.string,
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
  /**
   * Assistive title. Falls back to `children` if children is a string
   */
  title: PropTypes.string,
};

MenuItem.defaultProps = {
  className: null,
  'data-value': null,
  divider: false,
  leftIcon: null,
  rightIcon: null,
  selected: null,
  title: null,
  id: null,
};

export default MenuItem;
