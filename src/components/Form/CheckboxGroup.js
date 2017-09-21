import React from 'react';
import PropTypes from 'prop-types';

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
    inlineHelp,
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
      <FormElementLabel legend required={required} label={label} id={id} />
      <FormElementControl>
        {wrapChildrenWithError()}
      </FormElementControl>
      <FormElementError error={error} id={id} />
      {!!inlineHelp && <div className="slds-form-element__help">{inlineHelp}</div>}
    </FormElement>
  );
};

CheckboxGroup.defaultProps = {
  className: null,
  error: null,
  onChange: () => {},
  required: false,
  inlineHelp: null,
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
   * id of the fieldset
   */
  id: PropTypes.string.isRequired,
  /**
   * inline Help, node or string
   */
  inlineHelp: PropTypes.node,
  /**
   * label
   */
  label: PropTypes.string.isRequired,
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
