import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { prefixClasses, getUniqueHash } from '../../utils';

const CheckboxRaw = (props, { cssPrefix }) => {
  const {
    checked,
    className,
    disabled,
    error,
    hideLabel,
    id,
    label,
    onChange,
    required,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderCheckbox = () => (
    <input
      aria-describedby={error ? getUniqueHash(error, id) : null}
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

  const labelClassNames = classnames(
    'form-element__label',
    { 'assistive-text': hideLabel },
  ).split(' ');

  const renderLabel = () => (
    <label className={prefix('checkbox__label')} htmlFor={id}>
      <span className={prefix('checkbox--faux')} />
      <span className={prefix(labelClassNames)}>{label}</span>
    </label>
  );

  const renderRequired = () => {
    if (!required) {
      return null;
    }

    return (<abbr className={prefix('required')} title="required">*</abbr>);
  };

  return (
    <span className={prefix('checkbox')}>
      {renderRequired()}
      {renderCheckbox()}
      {renderLabel()}
    </span>
  );
};

CheckboxRaw.contextTypes = { cssPrefix: PropTypes.string };

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
