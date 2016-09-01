import React from 'react';

import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
  InputRaw,
} from '../../';

const Input = props => {
  const {
    error,
    errorIcon,
    iconLeft,
    iconRight,
    id,
    label,
    required,
  } = props;

  const hasIconLeft = !!iconLeft || (error && errorIcon);
  const hasIconRight = !!iconRight;

  return (
    <FormElement required={required} error={error}>
      <FormElementLabel label={label} id={id} required={required} />
      <FormElementControl hasIconLeft={hasIconLeft} hasIconRight={hasIconRight}>
        <InputRaw {...props} />
      </FormElementControl>
      <FormElementError error={error} />
    </FormElement>
  );
};

Input.contextTypes = { cssPrefix: React.PropTypes.string };

Input.propDefaults = {
  type: 'text',
};

Input.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * adds disabled attribute to the input field
   */
  disabled: React.PropTypes.bool,
  /**
   * renders an error for the input
   */
  error: React.PropTypes.string,
  /**
   * renders an additional error icon if an error is set
   */
  errorIcon: React.PropTypes.bool,
  /**
   * icon rendered on the left side of the input (from utility sprite)
   */
  iconLeft: React.PropTypes.string,
  /**
   * icon rendered on the right side of the input (from utility sprite)
   */
  iconRight: React.PropTypes.string,
  /**
   * onClick handler for the right icon
   */
  iconRightOnClick: React.PropTypes.func,
  /**
   * id of the input field
   */
  id: React.PropTypes.string.isRequired,
  /**
   * focuses the input field
   */
  isFocused: React.PropTypes.bool,
  /**
   * label for the input
   */
  label: React.PropTypes.string,
  /**
   * onChange handler for input
   */
  onChange: React.PropTypes.func,
  /**
   * onFocus handler for input
   */
  onFocus: React.PropTypes.func,
  /**
   * onKeyPress handler
   */
  onKeyPress: React.PropTypes.func,
  /**
   * placeholder for the input
   */
  placeholder: React.PropTypes.string,
  /**
   * adds required attribute to input and label
   */
  required: React.PropTypes.bool,
  /**
   * role of the input field
   */
  role: React.PropTypes.string,
  /**
   * input type. all HTML5 types are allowed, defaults to "text"
   * text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color
   */
  type: React.PropTypes.string,
  /**
   * value of the input field
   */
  value: React.PropTypes.string,
};

export default Input;
