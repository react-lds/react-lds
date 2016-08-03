import React from 'react';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../';
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
    <FormElement required={required} error={error}>
      <FormElementLabel label={label} id={id} required={required} />
      <FormElementControl>
        {renderSelect()}
      </FormElementControl>
      <FormElementError error={error} />
    </FormElement>
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
