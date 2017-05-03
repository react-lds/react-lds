import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueHash, prefixClasses } from '../../utils';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../';

const Select = (props, { cssPrefix }) => {
  const {
    children,
    className,
    disabled,
    error,
    hideLabel,
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
        aria-describedby={error ? getUniqueHash(error, id) : null}
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
      <FormElementLabel label={label} id={id} hideLabel={hideLabel} required={required} />
      <FormElementControl>
        {renderSelect()}
      </FormElementControl>
      <FormElementError error={error} id={id} />
    </FormElement>
  );
};

Select.contextTypes = { cssPrefix: PropTypes.string };


Select.propTypes = {
  /**
   * options & optgroups of the select
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * adds disabled attribute to the select
   */
  disabled: PropTypes.bool,
  /**
  * renders an error for the select
   */
  error: PropTypes.string,
  /**
   * sets the label to render as assistive text
   */
  hideLabel: PropTypes.bool,
  /**
   * id of the select
   */
  id: PropTypes.string.isRequired,
  /**
   * label for the select
   */
  label: PropTypes.string.isRequired,
  /**
   * adds the multiple attribute to the select
   */
  multiple: PropTypes.bool,
  /**
   * onChange handler for the select
   */
  onChange: PropTypes.func,
  /**
   * adds required attribute to the select field and label
   */
  required: PropTypes.bool,
};

export default Select;
