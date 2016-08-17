import React from 'react';
import {
  Button,
  ButtonIcon,
  IconSVG,
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../';

import { prefixable } from '../../decorators';

const InputEl = (props) => {
  const {
    disabled,
    error,
    errorIcon,
    iconLeft,
    iconRight,
    iconRightOnClick,
    id,
    onChange,
    onFocus,
    placeholder,
    prefix,
    required,
    role,
    type,
    value,
    isFocused,
  } = props;

  const renderIconLeft = () => {
    let iconName = iconLeft;
    if (error && errorIcon) {
      iconName = 'warning';
    }

    if (iconName) {
      return (
        <IconSVG
          sldsClasses={['input__icon', 'icon-text-default', { 'input__icon--left': iconLeft && iconRight }]}
          sprite="utility"
          icon={iconName}
        />
      );
    }

    return null;
  };

  const renderIconRight = () => {
    if (iconRight && iconRightOnClick) {
      return (
        <Button
          icon
          onClick={iconRightOnClick}
          sldsClasses={['input__icon', { 'input__icon--right': iconLeft && iconRight }]}
        >
          <ButtonIcon sprite="utility" icon={iconRight} />
        </Button>
      );
    }

    if (iconRight) {
      return (
        <IconSVG
          sldsClasses={['input__icon', 'icon-text-default', { 'input__icon--right': iconLeft && iconRight }]}
          sprite="utility"
          icon={iconRight}
        />
      );
    }

    return null;
  };

  return (
    <span>
      {renderIconLeft()}
      {renderIconRight()}
      <input
        aria-expanded={props['aria-expanded']}
        aria-activedescendant={props['aria-activedescendant']}
        className={prefix(['input'])}
        disabled={disabled}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        required={required}
        role={role}
        type={type}
        value={value}
        ref={(input) => { if (input && isFocused) { input.focus(); } }}
      />
    </span>
  );
};

export const InputRaw = prefixable(InputEl);

export const Input = (props) => {
  const {
    id,
    label,
    iconLeft,
    iconRight,
    required,
    error,
    errorIcon,
  } = props;

  const hasIconLeft = !!iconLeft || (error && errorIcon);
  const hasIconRight = !!iconRight;

  return (
    <FormElement required={required} error={error}>
      <FormElementLabel label={label} id={id} required={required} />
      <FormElementControl hasIconLeft={hasIconLeft} hasIconRight={hasIconRight}>
        <InputEl {...props} />
      </FormElementControl>
      <FormElementError error={error} />
    </FormElement>
  );
};

const propDefaults = {
  type: 'text',
};

const propTypes = {
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
  /**
   * adds the aria-expanded label
   */
  'aria-expanded': React.PropTypes.bool,
  /**
   * adds the aria-activedescendant label
   */
  'aria-activedescendant': React.PropTypes.string,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

InputEl.propDefaults = propDefaults;
InputEl.propTypes = propTypes;

Input.propDefaults = propDefaults;
Input.propTypes = propTypes;

export default prefixable(Input);
