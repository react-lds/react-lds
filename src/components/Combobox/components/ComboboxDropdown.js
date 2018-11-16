import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  FormElement,
  FormElementControl,
  FormElementLabel,
} from '../../Form';

const ComboboxDropdown = React.forwardRef((props, ref) => {
  const {
    children,
    className,
    comboboxClassName,
    height,
    id,
    label,
    listboxId,
    open,
    renderInput,
    renderResultListbox,
  } = props;

  const comboboxContainerClasses = ['slds-combobox_container'];

  const comboboxClasses = [
    'slds-combobox',
    'slds-dropdown-trigger',
    'slds-dropdown-trigger_click',
    { 'slds-is-open': open },
    comboboxClassName
  ];

  const comboboxFormElementClasses = [
    'slds-combobox__form-element',
    'slds-input-has-icon',
    'slds-input-has-icon_right'
  ];

  const dropdownClasses = [
    { [`slds-dropdown_length-with-icon-${height}`]: height },
    'slds-dropdown',
    'slds-dropdown_fluid',
    'slds-listbox',
    'slds-listbox_vertical',
  ];

  return (
    <FormElement className={className}>
      <FormElementLabel id={id} label={label} />
      <FormElementControl>
        <div className={cx(comboboxContainerClasses)}>
          <div
            className={cx(comboboxClasses)}
            aria-expanded={open}
            aria-haspopup="listbox"
            role="combobox"
          >
            <div className={cx(comboboxFormElementClasses)} role="none">
              {renderInput({
                'aria-controls': listboxId,
                autoComplete: 'off',
                id,
                role: 'textbox'
              })}
            </div>
            <div
              className={cx(dropdownClasses)}
              id={`listbox-${id}`}
              ref={ref}
              role="listbox"
            >
              {children}
            </div>
            {renderResultListbox && renderResultListbox()}
          </div>
        </div>
      </FormElementControl>
    </FormElement>
  );
});

ComboboxDropdown.displayName = 'ComboboxDropdown';

ComboboxDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  comboboxClassName: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  listboxId: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  renderInput: PropTypes.func.isRequired,
};

ComboboxDropdown.defaultProps = {
  children: null,
  className: null,
  comboboxClassName: null,
};

export default ComboboxDropdown;
