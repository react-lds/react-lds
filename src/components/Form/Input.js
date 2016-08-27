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
import { prefixClasses } from '../../utils';

export const InputRaw = (props, { cssPrefix }) => {
  const {
    className,
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
    required,
    role,
    type,
    value,
    isFocused,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderIconLeft = () => {
    let iconName = iconLeft;
    if (error && errorIcon) {
      iconName = 'warning';
    }

    if (iconName) {
      const iconClasses = [
        'input__icon',
        'icon-text-default',
        { 'input__icon--left': iconLeft && iconRight },
      ];

      return (
        <IconSVG
          className={prefix(iconClasses)}
          icon={iconName}
          sprite="utility"
        />
      );
    }

    return null;
  };

  const renderIconRight = () => {
    if (iconRight && iconRightOnClick) {
      const iconClasses = [
        'input__icon',
        { 'input__icon--right': iconLeft && iconRight },
      ];

      return (
        <Button
          className={prefix(iconClasses)}
          icon
          onClick={iconRightOnClick}
        >
          <ButtonIcon sprite="utility" icon={iconRight} />
        </Button>
      );
    }

    if (iconRight) {
      const iconClasses = [
        'input__icon',
        'icon-text-default',
        { 'input__icon--right': iconLeft && iconRight },
      ];

      return (
        <IconSVG
          className={prefix(iconClasses)}
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
        {...rest}
        className={prefix('input', className)}
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

const propDefaults = {
  type: 'text',
};

const contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

const propTypes = {
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

InputRaw.contextTypes = contextTypes;
InputRaw.propDefaults = propDefaults;
InputRaw.propTypes = propTypes;

Input.contextTypes = contextTypes;
Input.propDefaults = propDefaults;
Input.propTypes = propTypes;

export default Input;
