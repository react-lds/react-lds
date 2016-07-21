import React from 'react';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
  IconSVG,
  Button,
  ButtonIcon,
} from '../../';
import { prefixable } from '../../decorators';

export const Input = (props) => {
  const {
    prefix,
    id,
    value,
    label,
    placeholder,
    type,
    iconLeft,
    iconRight,
    iconRightOnClick,
    onChange,
    required,
    disabled,
    error,
    errorIcon,
  } = props;

  const formElementControlClasses = [
    { 'input-has-icon': iconLeft || iconRight || (error && errorIcon) },
    { 'input-has-icon--right': iconRight && !iconLeft },
    { 'input-has-icon--left': ((error && errorIcon) || iconLeft) && !iconRight },
    { 'input-has-icon--left-right': iconLeft && iconRight },
  ];

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
    <FormElement required={required} error={error}>
      <FormElementLabel label={label} id={id} required={required} />
      <FormElementControl sldsClasses={formElementControlClasses}>
        {renderIconLeft()}
        {renderIconRight()}
        <input
          id={id}
          value={value}
          className={prefix(['input'])}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
      </FormElementControl>
      <FormElementError error={error} />
    </FormElement>
  );
};

Input.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * input onChange handler
   */
  onChange: React.PropTypes.func,
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
  label: React.PropTypes.string.isRequired,
  /**
   * placeholder for the input
   */
  placeholder: React.PropTypes.string,
  /**
   * sets the field required
   */
  required: React.PropTypes.bool,
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
};

Input.propDefaults = {
  type: 'text',
};

export default prefixable(Input);
