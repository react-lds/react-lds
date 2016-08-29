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
    onKeyPress,
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
        onKeyPress={onKeyPress}
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
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * input onChange handler
   */
  onChange: React.PropTypes.func,
  /**
   * onKeyPress handler
   */
  onKeyPress: React.PropTypes.func,
  /**
   * input onFocus handler
   */
  onFocus: React.PropTypes.func,
  /**
   * id of the input tag element
   */
  id: React.PropTypes.string.isRequired,
  /**
   * input field value
   */
  value: React.PropTypes.string,
  /**
   * label
   */
  label: React.PropTypes.string,
  /**
   * placeholder for the input
   */
  placeholder: React.PropTypes.string,
  /**
   * sets the field required
   */
  required: React.PropTypes.bool,
  /**
   * sets the input field role
   */
  role: React.PropTypes.string,
  /**
   * disables the field
   */
  disabled: React.PropTypes.bool,
  /**
   * if set, this error message will be shown
   */
  error: React.PropTypes.string,
  /**
   * if set, will display an error icon when error is set
   */
  errorIcon: React.PropTypes.bool,
  /**
   * All HTML5 types are allowed, defaults to "text"
   * text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color
   */
  type: React.PropTypes.string,
  /**
   * icon from the utility sprite for the left side
   */
  iconLeft: React.PropTypes.string,
  /**
   * icon form the utility sprite for the right side
   */
  iconRight: React.PropTypes.string,
  /**
   * onClick handler for the right icon
   */
  iconRightOnClick: React.PropTypes.func,
  /**
   * adds the aria-expanded label
   */
  'aria-expanded': React.PropTypes.bool,
  /**
   * adds the aria-activedescendant label
   */
  'aria-activedescendant': React.PropTypes.string,
  /**
   * set focus after rendering
   */
  isFocused: React.PropTypes.bool,
};

InputEl.propDefaults = propDefaults;
InputEl.propTypes = propTypes;

Input.propDefaults = propDefaults;
Input.propTypes = propTypes;

export default prefixable(Input);
