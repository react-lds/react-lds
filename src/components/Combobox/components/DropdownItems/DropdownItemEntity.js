import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DropdownItem } from './DropdownItem';
import { Icon } from '../../../Icon';
import { defaultHighlighter } from '../../utils/helpers';

export const DropdownItemEntity = ({
  className,
  highlight,
  icon,
  isMultiSelect,
  isSelected,
  isSelectedAssistiveLabel,
  label,
  meta,
  ...rest,
}) => {
  const sprite = isSelected ? 'utility' : icon.sprite;
  const isUtilIcon = sprite === 'utility';

  const iconEl = (
    <span className="slds-media__figure slds-listbox__option-icon">
      <Icon
        className={isUtilIcon ? 'slds-current-color' : null}
        icon={isSelected ? 'check' : icon.icon}
        sprite={sprite}
        size={isUtilIcon && !isSelected ? 'x-small' : 'small'}
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
        {isMultiSelect && isSelected && (
          <span className="slds-assistive-text">{isSelectedAssistiveLabel}</span>
        )}
        {highlight.length > 0 ? defaultHighlighter(label, highlight) : label}
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
  highlight: PropTypes.string,
  icon: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
  }).isRequired,
  isMultiSelect: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectedAssistiveLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  meta: PropTypes.node,
};

DropdownItemEntity.defaultProps = {
  className: null,
  highlight: '',
  isMultiSelect: false,
  isSelected: false,
  isSelectedAssistiveLabel: 'Current Selection: ',
  meta: null,
};
