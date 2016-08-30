import React from 'react';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../';
import { prefixClasses } from '../../utils';

const Select = (props, { cssPrefix }) => {
  const {
    children,
    className,
    disabled,
    error,
    id,
    label,
    multiple,
    onChange,
    required,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderSelect = () => {
    const select = (
      <select
        {...rest}
        id={id}
        className={prefix('select', className)}
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

    return (<div className={prefix('select_container')}>{select}</div>);
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

Select.contextTypes = { cssPrefix: React.PropTypes.string };


Select.propTypes = {
  /**
   * options & optgroups of the select
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
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
};

export default Select;
