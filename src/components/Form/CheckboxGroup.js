import React from 'react';
import PropTypes from 'prop-types';

import {
  FormElement,
  FormElementControl,
  FormElementError,
  FormElementLabel,
} from '../..';

import { getUniqueHash } from '../../utils';

const CheckboxGroup = (props) => {
  const {
    children,
    className,
    error,
    hideErrorMessage,
    id,
    label,
    onChange,
    required,
    ...rest
  } = props;


  const wrapChildrenWithError = () => {
    if (!error || hideErrorMessage) {
      return children;
    }

    return React.Children.map(children, child => (
      React.cloneElement(child, { 'aria-describedby': getUniqueHash(error, id) })
    ));
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
      <FormElementLabel legend required={required} label={label} id={id} />
      <FormElementControl>
        {wrapChildrenWithError()}
      </FormElementControl>
      {!hideErrorMessage && <FormElementError error={error} id={id} />}
    </FormElement>
  );
};

CheckboxGroup.defaultProps = {
  className: null,
  error: null,
  hideErrorMessage: false,
  onChange: () => {},
  required: false,
};

CheckboxGroup.propTypes = {
  /**
   * The checkboxes to render
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * renders an error for the fieldset
   */
  error: PropTypes.string,
  /**
   * hides the error message
   */
  hideErrorMessage: PropTypes.bool,
  /**
   * id of the fieldset
   */
  id: PropTypes.string.isRequired,
  /**
   * label
   */
  label: PropTypes.node.isRequired,
  /**
   * onchange handler
   */
  onChange: PropTypes.func,
  /**
   * adds required attribute to the fieldset
   */
  required: PropTypes.bool,
};

export default CheckboxGroup;
