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
   * options & optgroups of the select
   */
  children: React.PropTypes.node.isRequired,
  /**
   * adds disabled attribute to the select
   */
  disabled: React.PropTypes.bool,
  /**
  * renders an error for the select
   */
  error: React.PropTypes.string,
  /**
   * id of the select
   */
  id: React.PropTypes.string.isRequired,
  /**
   * label for the select
   */
  label: React.PropTypes.string.isRequired,
  /**
   * adds the multiple attribute to the select
   */
  multiple: React.PropTypes.bool,
  /**
   * onChange handler for the select
   */
  onChange: React.PropTypes.func,
  /**
   * adds required attribute to the select field and label
   */
  required: React.PropTypes.bool,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(Select);
