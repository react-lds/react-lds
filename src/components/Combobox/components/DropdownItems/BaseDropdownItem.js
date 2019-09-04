import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from '../../../Icon';
import { DropdownItemCore } from './DropdownItemCore';
import { defaultHighlighter } from '../../utils/helpers';

export const BaseDropdownItem = (props) => {
  const {
    highlight,
    icon,
    id,
    isDisabled,
    isMultiSelect,
    isSelected,
    isSelectedAssistiveLabel,
    label,
    meta,
    ...rest
  } = props;

  let iconEl;

  if (isSelected || icon) {
    const iconClassNames = cx([
      { 'slds-icon_disabled': !!isDisabled },
      'slds-current-color',
    ]);

    iconEl = (
      <Icon
        className={iconClassNames}
        icon={isSelected ? 'check' : icon.icon}
        sprite={isSelected ? 'utility' : icon.sprite}
        size="x-small"
      />
    );
  }

  return (
    <DropdownItemCore
      {...rest}
      className="slds-listbox__option_plain"
      isDisabled={isDisabled}
      isSelected={isSelected}
      icon={(
        <span className="slds-media__figure slds-listbox__option-icon">
          {iconEl}
        </span>
      )}
    >
      <span className="slds-truncate" title={label}>
        {isMultiSelect && isSelected && (
          <span className="slds-assistive-text">{isSelectedAssistiveLabel}</span>
        )}
        {highlight.length > 0 ? defaultHighlighter(label, highlight) : label}
      </span>
      {meta && (
      <span className="slds-listbox__option-meta">
        {meta}
      </span>
      )}
    </DropdownItemCore>
  );
};

BaseDropdownItem.propTypes = {
  highlight: PropTypes.string,
  icon: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
  }),
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isMultiSelect: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectedAssistiveLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  meta: PropTypes.node,
};

BaseDropdownItem.defaultProps = {
  highlight: '',
  icon: null,
  isDisabled: false,
  isMultiSelect: false,
  isSelected: false,
  isSelectedAssistiveLabel: 'Current Selection: ',
  meta: null,
};
