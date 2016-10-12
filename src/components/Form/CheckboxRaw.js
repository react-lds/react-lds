import React from 'react';

import { prefixClasses, getUniqueHash } from '../../utils';

const CheckboxRaw = (props, { cssPrefix }) => {
  const {
    checked,
    className,
    disabled,
    error,
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

  const renderLabel = () => (
    <label className={prefix('checkbox__label')} htmlFor={id}>
      <span className={prefix('checkbox--faux')} />
      <span className={prefix('form-element__label')}>{label}</span>
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

CheckboxRaw.contextTypes = { cssPrefix: React.PropTypes.string };

CheckboxRaw.propTypes = {
  /**
   * checks the checkbox
   */
  checked: React.PropTypes.bool,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
  * adds disabled attribute
   */
  disabled: React.PropTypes.bool,
  /**
  * renders an error for the checkbox
   */
  error: React.PropTypes.string,
  /**
   * id of the checkbox
   */
  id: React.PropTypes.string.isRequired,
  /**
   * label
   */
  label: React.PropTypes.string.isRequired,
  /**
   * onChange handler
   */
  onChange: React.PropTypes.func,
  /**
   * adds required attribute to the checkbox
   */
  required: React.PropTypes.bool,
};

export default CheckboxRaw;
