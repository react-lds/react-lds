import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropdownItem } from './DropdownItem';
import { Icon } from '../../../Icon';

export const DropdownItemEntity = ({
  className,
  icon,
  isSelected,
  label,
  meta,
  ...rest,
}) => {
  const iconEl = (
    <span className="slds-media__figure slds-listbox__option-icon">
      <Icon
        className={isSelected ? 'slds-current-color' : null}
        icon={isSelected ? 'check' : icon.icon}
        sprite={isSelected ? 'utility' : icon.sprite}
        size="small"
      />
    </span>
  );

  const itemClasses = [
    'slds-listbox__option_entity',
    { 'slds-listbox__option_has-meta': meta },
    className,
  ];

  return (
    <DropdownItem
      {...rest}
      icon={iconEl}
      isSelected={isSelected}
      className={cx(itemClasses)}
    >
      <span className="slds-listbox__option-text slds-listbox__option-text_entity">
        {label}
      </span>
      {meta && (
        <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">
          {meta}
        </span>
      )}
    </DropdownItem>
  );
};

DropdownItemEntity.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  meta: PropTypes.node,
};

DropdownItemEntity.defaultProps = {
  className: null,
  isSelected: false,
  meta: null,
};
