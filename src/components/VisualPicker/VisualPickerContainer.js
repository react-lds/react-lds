import React from 'react';
import PropTypes from 'prop-types';
import { FormElement, FormElementLabel, FormElementControl } from '../Form';

const VisualPickerContainer = ({ children, label, ...rest }) => (
  <FormElement {...rest} fieldset>
    <FormElementLabel label={label} legend />
    <FormElementControl>{children}</FormElementControl>
  </FormElement>
);

VisualPickerContainer.propTypes = {
  /**
   * One or more `VisualPicker` or `VisualPickerVertical`. Supports fragments
   */
  children: PropTypes.node.isRequired,
  /**
   * Fieldset label
   */
  label: PropTypes.string.isRequired,
};

export default VisualPickerContainer;
