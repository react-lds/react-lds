import React from 'react';
import PropTypes from 'prop-types';

import CheckboxRaw from './CheckboxRaw';
import FormElement from './FormElement';
import FormElementControl from './FormElement';
import FormElementError from './FormElementError';

const Checkbox = (props) => {
  const {
    error,
    hideErrorMessage,
    id,
    required,
  } = props;

  return (
    <FormElement required={required} error={error}>
      <FormElementControl>
        <CheckboxRaw {...props} />
      </FormElementControl>
      {!hideErrorMessage && <FormElementError error={error} id={id} />}
    </FormElement>
  );
};

Checkbox.defaultProps = {
  error: null,
  hideErrorMessage: false,
  hideLabel: false,
  required: false,
};

Checkbox.propTypes = {
  /**
  * renders an error for the checkbox
   */
  error: PropTypes.string,
  /**
   * hides the error message
   */
  hideErrorMessage: PropTypes.bool,
  /**
   * sets the label to render as assistive text
   */
  hideLabel: PropTypes.bool,
  /**
   * id of the checkbox
   */
  id: PropTypes.string.isRequired,
  /**
   * adds required attribute to the checkbox
   */
  required: PropTypes.bool,
};

export default Checkbox;
