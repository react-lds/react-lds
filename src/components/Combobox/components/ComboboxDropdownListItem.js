import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Spinner } from '../../Spinner';
import { Icon } from '../../Icon';

const ComboboxDropdownListItem = (props) => {
  const {
    children,
    className,
    icon,
    id,
    isFocus,
    isHeader,
    isSelected,
    onSelect,
  } = props;

  const optionClasses = [
    'slds-media',
    'slds-listbox__option',
    'slds-media__small',
    className,
    { 'slds-is-selected': isSelected },
    { 'slds-has-focus': isFocus },
  ];

  return (
    <li
      className="slds-listbox__item"
      role="presentation"
    >
      <div
        id={id}
        className={cx(optionClasses)}
        onMouseDown={onSelect}
        role={isHeader ? 'presentation' : 'option'}
      >
        {icon}
        {isHeader ? children : (
          <span className="slds-media__body">
            {children}
          </span>
        )}
      </div>
    </li>
  );
};

ComboboxDropdownListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  id: PropTypes.string,
  isFocus: PropTypes.bool,
  isHeader: PropTypes.bool,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

ComboboxDropdownListItem.defaultProps = {
  className: null,
  icon: null,
  id: null,
  isFocus: false,
  isHeader: false,
  isSelected: false,
  onSelect: null,
};

export const BaseComboboxDropdownItem = (props) => {
  const {
    icon,
    id,
    isMultiSelect,
    isSelected,
    isSelectedAssistiveLabel,
    label,
    meta,
    ...rest
  } = props;

  let iconEl;

  if (isSelected || icon) {
    iconEl = (
      <Icon
        className="slds-current-color"
        icon={isSelected ? 'check' : icon.icon}
        sprite={isSelected ? 'utility' : icon.sprite}
        size="x-small"
      />
    );
  }

  return (
    <ComboboxDropdownListItem
      {...rest}
      className="slds-listbox__option_plain"
      icon={(
        <span className="slds-media__figure slds-listbox__option-icon">
          {iconEl}
        </span>
      )}
      isSelected={isSelected}
    >
      <span className="slds-truncate" title={label}>
        {isMultiSelect && isSelected && (
          <span className="slds-assistive-text">{isSelectedAssistiveLabel}</span>
        )}
        {label}
      </span>
      {meta}
    </ComboboxDropdownListItem>
  );
};

BaseComboboxDropdownItem.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
  }),
  id: PropTypes.string.isRequired,
  isMultiSelect: PropTypes.bool,
  isSelectedAssistiveLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  meta: PropTypes.node,
};

BaseComboboxDropdownItem.defaultProps = {
  icon: null,
  isMultiSelect: false,
  isSelectedAssistiveLabel: 'Current Selection: ',
  meta: null,
};

export const EntityComboboxDropdownItem = () => {};

export const HeaderComboboxDropdownItem = ({ id, label }) => (
  <ComboboxDropdownListItem
    className="slds-listbox__option_plain"
    id={id}
    isHeader
  >
    <h3 className="slds-text-title_caps">{label}</h3>
  </ComboboxDropdownListItem>
);

HeaderComboboxDropdownItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export const LoadingComboboxDropdownItem = () => (
  <li className="slds-listbox__item" role="presentation">
    <div className="slds-align_absolute-center slds-p-top_medium">
      <Spinner size="x-small" inline />
    </div>
  </li>
);
