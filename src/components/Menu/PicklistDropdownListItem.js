import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG } from '../../';

const PicklistDropdownListItem = (props) => {
  const { children, className, onClick, selected, leftIcon, rightIcon, divider, ...rest } = props;

  const leftIconElem = () => {
    if (leftIcon) {
      const iconClasses = [
        { 'slds-listbox__icon-selected': !leftIcon.alwaysDisplay },
        { 'slds-icon_x-small': !leftIcon.alwaysDisplay },
        { 'slds-icon': leftIcon.alwaysDisplay },
      ];

      return (
        <div className="slds-media__figure">
          <IconSVG
            background={leftIcon.background}
            className={cx(iconClasses)}
            icon={leftIcon.icon}
            size={leftIcon.alwaysDisplay ? 'small' : 'x-small'}
            sprite={leftIcon.sprite}
          />
        </div>
      );
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
        <div className="slds-media__figure">
          <IconSVG
            background={rightIcon.background}
            className={cx(iconClasses)}
            icon={rightIcon.icon}
            size="x-small"
            sprite={rightIcon.sprite}
          />
        </div>
      );
    }

    return null;
  };

  const sldsClasses = [
    'slds-listbox__item',
    { 'slds-has-divider_top-space': divider },
    className,
  ];

  const itemClasses = [
    'slds-media',
    'slds-listbox__option',
    'slds-listbox__option_plain',
    'slds-media_small',
    'slds-media_center',
    // { 'slds-has-focus': selected },
    { 'slds-is-selected': selected },
    className,
  ];

  return (
    <li {...rest} className={cx(sldsClasses)} role="presentation">
      <span id={new Date()} className={cx(itemClasses)} role="option" onClick={onClick}>
        {leftIconElem()}
        <div className="slds-media__body">
          <div className="slds-truncate" title={children}>
            {children}
          </div>
        </div>
        {rightIconElem()}
      </span>
    </li>
  );
};

PicklistDropdownListItem.defaultProps = {
  className: null,
  divider: false,
  leftIcon: null,
  onClick: () => {},
  rightIcon: null,
  selected: false,
};

PicklistDropdownListItem.propTypes = {
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

export default PicklistDropdownListItem;
