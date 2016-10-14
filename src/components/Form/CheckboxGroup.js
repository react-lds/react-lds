import React from 'react';

import {
  FormElement,
  FormElementControl,
  FormElementError,
  FormElementLabel,
} from '../../';

import { getUniqueHash } from '../../utils';

const CheckboxGroup = (props) => {
  const {
    children,
    className,
    error,
    id,
    label,
    onChange,
    required,
    ...rest,
  } = props;


  const wrapChildrenWithError = () => {
    if (!error) {
      return children;
    }

    return React.Children.map(children, child =>
      React.cloneElement(child, { 'aria-describedby': getUniqueHash(error, id) })
    );
  };

  return (
    <FormElement
      {...rest}
      className={className}
      error={error}
      fieldset
      id={id}
      onChange={onChange}
      required={required}
    >
      <FormElementLabel legend required={required} label={label} />
      <FormElementControl>
        {wrapChildrenWithError()}
      </FormElementControl>
      <FormElementError error={error} id={id} />
    </FormElement>
  );
};

CheckboxGroup.propTypes = {
  /**
   * The checkboxes to render
   */
  children: React.PropTypes.node.isRequired,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * renders an error for the fieldset
   */
  error: React.PropTypes.string,
  /**
   * id of the fieldset
   */
  id: React.PropTypes.string.isRequired,
  /**
   * label
   */
  label: React.PropTypes.string.isRequired,
  /**
   * onchange handler
   */
  onChange: React.PropTypes.func,
  /**
   * adds required attribute to the fieldset
   */
  required: React.PropTypes.bool,
};

export default CheckboxGroup;
