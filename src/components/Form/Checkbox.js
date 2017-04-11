import React from 'react';
import PropTypes from 'prop-types';

import {
  CheckboxRaw,
  FormElement,
  FormElementControl,
  FormElementError,
} from '../../';

const Checkbox = (props) => {
  const {
    error,
    id,
    required,
  } = props;

  return (
    <FormElement required={required} error={error}>
      <FormElementControl>
        <CheckboxRaw {...props} />
      </FormElementControl>
      <FormElementError error={error} id={id} />
    </FormElement>
  );
};

Checkbox.contextTypes = { cssPrefix: PropTypes.string };

Checkbox.propTypes = {
  /**
  * renders an error for the checkbox
   */
  error: PropTypes.string,
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
