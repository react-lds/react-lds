import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getUniqueHash } from '../../utils';

const RadioRaw = (props) => {
  const {
    checked,
    className,
    disabled,
    error,
    hideErrorMessage,
    hideLabel,
    id,
    label,
    name,
    onChange,
    required,
    ...rest
  } = props;

  const renderRadio = () => (
    <input
      aria-describedby={error && !hideErrorMessage ? getUniqueHash(error, id) : null}
      {...rest}
      checked={checked}
      className={className}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      type="radio"
    />
  );

  const labelClasses = [
    'slds-form-element__label',
    { 'slds-assistive-text': hideLabel },
  ];

  const renderLabel = () => (
    <label className="slds-radio__label" htmlFor={id}>
      <span className="slds-radio_faux" />
      <span className={cx(labelClasses)}>{label}</span>
    </label>
  );

  const renderRequired = () => {
    if (!required) {
      return null;
    }

    return (<abbr className="slds-required" title="required">*</abbr>);
  };

  return (
    <span className="slds-radio">
      {renderRequired()}
      {renderRadio()}
      {renderLabel()}
    </span>
  );
};

RadioRaw.defaultProps = {
  checked: null,
  className: null,
  disabled: false,
  error: null,
  hideErrorMessage: false,
  hideLabel: false,
  onChange: () => {},
  required: false,
};

RadioRaw.propTypes = {
  /**
   * checks the radio button
   */
  checked: PropTypes.bool,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
  * adds disabled attribute
   */
  disabled: PropTypes.bool,
  /**
  * renders an error for the radio
   */
  error: PropTypes.string,
  /**
   * hides the error message
   */
  hideErrorMessage: PropTypes.bool,
  /**
   * sets the label to render as assistive text
   */
  hideLabel: PropTypes.bool,
  /**
   * id of the radio
   */
  id: PropTypes.string.isRequired,
  /**
   * label
   */
  label: PropTypes.node.isRequired,
  /**
   * radio group name
   */
  name: PropTypes.string.isRequired,
  /**
   * onChange handler
   */
  onChange: PropTypes.func,
  /**
   * adds required attribute to the radio
   */
  required: PropTypes.bool,
};

export default RadioRaw;
