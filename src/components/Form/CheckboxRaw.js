import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getUniqueHash } from '../../utils';

const CheckboxRaw = (props) => {
  const {
    checked,
    className,
    disabled,
    error,
    hideErrorMessage,
    hideLabel,
    id,
    label,
    onChange,
    required,
    ...rest
  } = props;

  const renderCheckbox = () => (
    <input
      aria-describedby={error && !hideErrorMessage ? getUniqueHash(error, id) : null}
      {...rest}
      checked={checked}
      className={className}
      disabled={disabled}
      id={id}
      name="options"
      onChange={onChange}
      type="checkbox"
    />
  );

  const labelClasses = [
    'slds-form-element__label',
    { 'slds-assistive-text': hideLabel },
  ];

  const renderLabel = () => (
    <label className="slds-checkbox__label" htmlFor={id}>
      <span className="slds-checkbox_faux" />
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
    <span className="slds-checkbox">
      {renderRequired()}
      {renderCheckbox()}
      {renderLabel()}
    </span>
  );
};

CheckboxRaw.defaultProps = {
  checked: null,
  className: null,
  disabled: false,
  error: null,
  hideErrorMessage: false,
  hideLabel: false,
  onChange: () => {},
  required: false,
};

CheckboxRaw.propTypes = {
  /**
   * checks the checkbox
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
  * renders an error for the checkbox
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
   * id of the checkbox
   */
  id: PropTypes.string.isRequired,
  /**
   * label
   */
  label: PropTypes.string.isRequired,
  /**
   * onChange handler
   */
  onChange: PropTypes.func,
  /**
   * adds required attribute to the checkbox
   */
  required: PropTypes.bool,
};

export default CheckboxRaw;
