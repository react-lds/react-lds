import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG, MediaObject } from '../../';

const renderIcon = (icon, selected) => {
  if (!icon && !selected) return null;

  if (selected && (!icon || !icon.alwaysDisplay)) {
    return (
      <IconSVG
        className="slds-listbox__icon-selected"
        icon="check"
        size="x-small"
        sprite="utility"
      />
    );
  }

  const { alwaysDisplay, ...iconProps } = icon;
  return <IconSVG {...iconProps} size="x-small" />;
};

const ComboboxDropdownListItem = (props) => {
  const {
    children,
    className,
    icon,
    id,
    isHeader,
    onClick,
    selected,
  } = props;

  const iconEl = renderIcon(icon, selected);
  const isIconOption = iconEl || (icon && !selected);

  const sldsClasses = [
    'slds-listbox__item',
    { [className]: !isHeader },
  ];

  const itemClasses = [
    'slds-listbox__option',
    { 'slds-listbox__option_plain': !isIconOption },
    { 'slds-listbox__option_icon': isIconOption },
    { 'slds-is-selected': selected },
  ];

  return (
    <li className={cx(sldsClasses)} role="presentation">
      <MediaObject
        center
        className={cx(itemClasses)}
        figureLeft={iconEl}
        id={id}
        onClick={isHeader ? undefined : onClick}
        role={isHeader ? 'presentation' : 'option'}
        truncate
      >
        {isHeader ? (
          <h3 className="slds-text-title_caps" role="presentation">
            {children}
          </h3>
        ) : children}
      </MediaObject>
    </li>
  );
};

ComboboxDropdownListItem.propTypes = {
  /**
   * The content of a menu item
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * indicates whether this is a header row.
   */
  isHeader: PropTypes.bool,
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

ComboboxDropdownListItem.defaultProps = {
  className: null,
  icon: null,
  isHeader: false,
  onClick: () => {},
  selected: false,
};

export default ComboboxDropdownListItem;
