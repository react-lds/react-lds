import React from 'react';
import PropTypes from 'prop-types';

import {
  RadioRaw,
  FormElement,
  FormElementControl,
  FormElementError,
} from '../../';

const Radio = (props) => {
  const {
    error,
    hideErrorMessage,
    id,
    required,
  } = props;

  return (
    <FormElement required={required} error={error}>
      <FormElementControl>
        <RadioRaw {...props} />
      </FormElementControl>
      {!hideErrorMessage && <FormElementError error={error} id={id} />}
    </FormElement>
  );
};

Radio.defaultProps = {
  error: null,
  hideErrorMessage: false,
  hideLabel: false,
  required: false,
};

Radio.propTypes = {
  /**
  * renders an error for the radio
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
   * id of the radio
   */
  id: PropTypes.string.isRequired,
  /**
   * adds required attribute to the radio
   */
  required: PropTypes.bool,
};

export default Radio;
