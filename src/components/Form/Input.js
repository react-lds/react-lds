import React from 'react';
import PropTypes from 'prop-types';

import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
  InputRaw,
} from '../../';

const Input = (props) => {
  const {
    error,
    errorIcon,
    hideLabel,
    iconLeft,
    iconRight,
    id,
    inlineHelp,
    label,
    placeholder,
    readOnly,
    required,
    showSpinner,
    value,
    ...rest,
  } = props;

  const hasIconLeft = !!iconLeft || (error && errorIcon);
  const hasIconRight = !!iconRight || !!showSpinner;

  const inputRaw = (
    <InputRaw
      error={error}
      errorIcon={errorIcon}
      iconLeft={iconLeft}
      iconRight={iconRight}
      id={id}
      label={label}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      showSpinner={showSpinner}
      value={value}
      {...rest}
    />
  );

  return (
    <FormElement required={required} error={error}>
      <FormElementLabel
        hideLabel={hideLabel}
        id={id}
        label={label}
        required={required}
      />
      <FormElementControl
        hasIconLeft={hasIconLeft}
        hasIconRight={hasIconRight}
      >
        {inputRaw}
      </FormElementControl>
      <FormElementError error={error} id={id} />
      {!!inlineHelp && <div className="slds-form-element__help">{inlineHelp}</div>}
    </FormElement>
  );
};

Input.defaultProps = {
  bare: false,
  className: null,
  disabled: false,
  error: null,
  errorIcon: false,
  hideLabel: false,
  iconLeft: null,
  iconRight: null,
  iconRightOnClick: () => {},
  inlineHelp: null,
  isFocused: false,
  label: null,
  onChange: () => {},
  onFocus: () => {},
  onKeyPress: () => {},
  placeholder: null,
  readOnly: null,
  role: null,
  required: false,
  showSpinner: false,
  type: 'text',
  value: undefined,
};

Input.propTypes = {
  /**
   * renders a bare input
   */
  bare: PropTypes.bool,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * adds disabled attribute to the input field
   */
  disabled: PropTypes.bool,
  /**
   * renders an error for the input
   */
  error: PropTypes.string,
  /**
   * renders an additional error icon if an error is set
   */
  errorIcon: PropTypes.bool,
  /**
   * sets the label to render as assistive text
   */
  hideLabel: PropTypes.bool,
  /**
   * icon rendered on the left side of the input (from utility sprite)
   */
  iconLeft: PropTypes.string,
  /**
   * icon rendered on the right side of the input (from utility sprite)
   */
  iconRight: PropTypes.string,
  /**
   * onClick handler for the right icon
   */
  iconRightOnClick: PropTypes.func,
  /**
   * id of the input field
   */
  id: PropTypes.string.isRequired,
  /**
   * inline Help, string or node
   */
  inlineHelp: PropTypes.node,
  /**
   * focuses the input field
   */
  isFocused: PropTypes.bool,
  /**
   * label for the input
   */
  label: PropTypes.string,
  /**
   * onChange handler for input
   */
  onChange: PropTypes.func,
  /**
   * onFocus handler for input
   */
  onFocus: PropTypes.func,
  /**
   * onKeyPress handler
   */
  onKeyPress: PropTypes.func,
  /**
   * placeholder for the input
   */
  placeholder: PropTypes.string,
  /**
   * makes Input readOnly
   */
  readOnly: PropTypes.bool,
  /**
   * adds required attribute to input and label
   */
  required: PropTypes.bool,
  /**
   * role of the input field
   */
  role: PropTypes.string,
  /**
   * whether to show a spinner element inside the field, on the right end
   */
  showSpinner: PropTypes.bool,
  /**
   * input type. all HTML5 types are allowed, defaults to "text"
   * text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color
   */
  type: PropTypes.string,
  /**
   * value of the input field
   */
  value: PropTypes.string,
};

export default Input;
