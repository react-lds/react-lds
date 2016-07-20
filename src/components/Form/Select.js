
import React from 'react';
import { prefixable } from '../../decorators';

export const Select = (props) => {
  const {
    children,
    disabled,
    error,
    id,
    label,
    multiple,
    onChange,
    prefix,
    required,
  } = props;

  const formElementClasses = [
    'form-element',
    { 'is-required': required },
    { 'has-error': !!error },
  ];

  const renderError = () => {
    if (error) {
      return (
        <div className={prefix(['form-element__help'])}>{error}</div>
      );
    }

    return null;
  };

  const renderRequired = () => {
    if (required) {
      return (
        <abbr className={prefix(['required'])} title="required">*</abbr>
      );
    }

    return null;
  };

  const renderSelect = () => {
    const select = (
      <select
        id={id}
        className={prefix(['select'])}
        onChange={onChange}
        multiple={multiple}
        required={required}
        disabled={disabled}
      >
        {children}
      </select>
    );

    if (multiple) {
      return select;
    }

    return (<div className={prefix(['select_container'])}>{select}</div>);
  };

  return (
    <div className={prefix(formElementClasses)}>
      <label className={prefix(['form-element__label'])} htmlFor={id}>
        {renderRequired()}
        {label}
      </label>
      <div className={prefix(['form-element__control'])}>
        {renderSelect()}
      </div>
      {renderError()}
    </div>
  );
};

Select.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * select onChange handler
   */
  onChange: React.PropTypes.func,
  /**
   * id of the select tag element
   */
  id: React.PropTypes.string.isRequired,
  /**
   * options & optgroups of the select tag element
   */
  children: React.PropTypes.node.isRequired,
  /**
   * label
   */
  label: React.PropTypes.string.isRequired,
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
   * sets the field to multiple mode
   */
  multiple: React.PropTypes.bool,
};

export default prefixable(Select);
