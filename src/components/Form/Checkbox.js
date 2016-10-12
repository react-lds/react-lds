import React from 'react';

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

Checkbox.contextTypes = { cssPrefix: React.PropTypes.string };

Checkbox.propTypes = {
  /**
  * renders an error for the checkbox
   */
  error: React.PropTypes.string,
  /**
   * id of the checkbox
   */
  id: React.PropTypes.string.isRequired,
  /**
   * adds required attribute to the checkbox
   */
  required: React.PropTypes.bool,
};

export default Checkbox;
