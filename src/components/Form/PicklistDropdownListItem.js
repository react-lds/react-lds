import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG } from '../../';

const PicklistDropdownListItem = (props) => {
  const {
    children,
    className,
    onClick,
    selected,
    id,
    isHeader,
    icon,
  } = props;

  const renderIcon = () => {
    if (icon) {
      const iconClasses = [
        { 'slds-listbox__icon-selected': !icon.alwaysDisplay },
        { 'slds-icon_x-small': !icon.alwaysDisplay },
        { 'slds-icon': icon.alwaysDisplay },
      ];

      return (
        <div className="slds-media__figure">
          <IconSVG
            className={cx(iconClasses)}
            icon={icon.icon}
            size={icon.alwaysDisplay ? 'small' : 'x-small'}
            sprite={icon.sprite}
          />
        </div>
      );
    }

    return null;
  };

  const sldsClasses = [
    'slds-listbox__item',
    className,
  ];

  const itemClasses = [
    'slds-media',
    'slds-listbox__option',
    'slds-listbox__option_plain',
    'slds-media_small',
    'slds-media_center',
    { 'slds-is-selected': selected },
    className,
  ];

  const renderHeader = () => (
    <li className="slds-listbox__item" role="presentation">
      <span
        className="slds-media slds-listbox__option slds-listbox__option_plain"
        id={id}
        role="presentation"
      >
        <h3 className="slds-text-title_caps" role="presentation">
          {children}
        </h3>
      </span>
    </li>
  );

  const renderItem = () => (
    <li className={cx(sldsClasses)} role="presentation">
      <span id={id} className={cx(itemClasses)} role="option" onClick={onClick}>
        {renderIcon()}
        <div className="slds-media__body">
          <div className="slds-truncate" title={children}>
            {children}
          </div>
        </div>
      </span>
    </li>
  );

  return isHeader
    ? renderHeader()
    : renderItem();
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
   * unique id
   */
  id: PropTypes.string.isRequired,
  /**
   * left icon that is only shown when selected is true
   */
  icon: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    alwaysDisplay: PropTypes.bool,
  }),
  /**
   * onClick handler
   */
  onClick: PropTypes.func,
  /**
   * sets this item into a selection state that displays the icon
   */
  selected: PropTypes.bool,
};

PicklistDropdownListItem.defaultProps = {
  className: null,
  icon: null,
  isHeader: false,
  onClick: () => {},
  selected: false,
};

export default PicklistDropdownListItem;
