import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  FormElement,
  FormElementError,
  FormElementControl,
  FormElementLabel,
} from '../../';

const ComboboxDropdown = (props) => {
  const {
    children,
    className,
    email,
    error,
    hideErrorMessage,
    hideLabel,
    id,
    inlineListbox,
    input,
    labelInput,
    open,
    pills,
    required,
    size,
  } = props;

  const containerClasses = [
    className,
    'slds-combobox_container',
    { 'slds-has-inline-listbox': !!inlineListbox },
    { [`slds-size_${size}`]: !!size },
  ];

  const comboboxClasses = [
    'slds-combobox',
    'slds-dropdown-trigger',
    'slds-combobox-picklist',
    'slds-dropdown-trigger_click',
    { 'slds-is-open': !!open },
  ];

  const formElementClasses = [
    'slds-combobox__form-element',
    'slds-input-has-icon',
    'slds-input-has-icon_right',
  ];

  return (
    <FormElement
      className={email ? 'slds-email-composer__combobox' : null}
      error={error}
      required={required}
    >
      <FormElementLabel
        hideLabel={hideLabel}
        id={id}
        label={labelInput}
        required={required}
      />
      <FormElementControl>
        <div className={cx(containerClasses)}>
          {inlineListbox}
          <div
            aria-expanded={open}
            aria-haspopup
            className={cx(comboboxClasses)}
            role="combobox"
          >
            <div className={cx(formElementClasses)} role="none">
              {input}
            </div>
            {children}
            {pills}
          </div>
        </div>
      </FormElementControl>
      {!hideErrorMessage && <FormElementError error={error} id={`error-${id}`} />}
    </FormElement>
  );
};

ComboboxDropdown.propTypes = {
  /**
   * one ComboboxDropdownList or many of them
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * add class for email composer mode
   */
  email: PropTypes.bool,
  /**
   * input error
   */
  error: PropTypes.string,
  /**
  * indicates if the error message is hidden
  */
  hideErrorMessage: PropTypes.bool,
  /**
  * indicates if the label for the input is hidden
  */
  hideLabel: PropTypes.bool,
  /**
  * id of the input
  */
  id: PropTypes.string.isRequired,
  /**
   * optional inline listbox node
   */
  inlineListbox: PropTypes.node,
  /**
   * input field
   */
  input: PropTypes.element.isRequired,
  /**
   * label for the input
   */
  labelInput: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * forces open or closed state, is needed when using a custom button
   */
  open: PropTypes.bool,
  /**
   * optional pills node
   */
  pills: PropTypes.node,
  /**
   * indicates if the input is required
   */
  required: PropTypes.bool,
  /**
   * Picklist sizes: small, medium, large
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ComboboxDropdown.defaultProps = {
  className: null,
  email: false,
  error: null,
  hideErrorMessage: false,
  hideLabel: false,
  inlineListbox: null,
  labelInput: '',
  open: false,
  pills: null,
  required: false,
  size: 'medium',
};

export default ComboboxDropdown;
