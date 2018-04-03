import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG, MediaObject } from '../../';

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
      return (
        <IconSVG
          icon={icon.icon}
          size="small"
          sprite={icon.sprite}
        />
      );
    }

    if (selected) {
      return (
        <IconSVG
          className="slds-listbox__icon-selected"
          icon="check"
          size="x-small"
          sprite="utility"
        />
      );
    }

    return null;
  };

  const sldsClasses = [
    'slds-listbox__item',
    className,
  ];

  const itemClasses = [
    'slds-listbox__option',
    'slds-listbox__option_plain',
    { 'slds-is-selected': selected },
    className,
  ];

  const renderHeader = () => (
    <li className="slds-listbox__item" role="presentation">
      <MediaObject
        center
        className={cx(itemClasses)}
        figureLeft={renderIcon()}
        id={id}
        onClick={onClick}
        role="presentation"
        truncate
      >
        <h3 className="slds-text-title_caps" role="presentation">
          {children}
        </h3>
      </MediaObject>
    </li>
  );

  const renderItem = () => (
    <li className={cx(sldsClasses)} role="presentation">
      <MediaObject
        center
        className={cx(itemClasses)}
        figureLeft={renderIcon()}
        id={id}
        onClick={onClick}
        role="option"
        size="small"
        truncate
      >
        {children}
      </MediaObject>
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
