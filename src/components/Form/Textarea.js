import React from 'react';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../';
import { prefixable } from '../../decorators';

export const Textarea = (props) => {
  const {
    disabled,
    error,
    id,
    label,
    onChange,
    placeholder,
    prefix,
    required,
    readOnly,
  } = props;

  const formElementControlClasses = [
    { 'has-divider--bottom': readOnly },
  ];

  const renderContent = () => {
    if (readOnly) {
      return (
        <div className={prefix(['form-element__static', 'text-longform'])}>
          <p>{placeholder}</p>
        </div>
      );
    }

    return (
      <textarea
        className={prefix(['textarea'])}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      ></textarea>
    );
  };

  return (
    <FormElement required={required} error={error}>
      <FormElementLabel label={label} id={id} required={required} />
      <FormElementControl sldsClasses={formElementControlClasses}>
        {renderContent()}
      </FormElementControl>
      <FormElementError error={error} />
    </FormElement>
  );
};

Textarea.propTypes = {
  /**
  * adds disabled attribute to the textarea
   */
  disabled: React.PropTypes.bool,
  /**
  * renders an error for the textarea
   */
  error: React.PropTypes.string,
  /**
   * id of the textarea
   */
  id: React.PropTypes.string.isRequired,
  /**
   * label for the textarea
   */
  label: React.PropTypes.string.isRequired,
  /**
   * onChange handler for the textarea
   */
  onChange: React.PropTypes.func,
  /**
   * textarea placeholder
   */
  placeholder: React.PropTypes.string.isRequired,
  /**
   * renders a static textarea output instead
   */
  readOnly: React.PropTypes.bool,
  /**
   * adds required attribute to the textarea
   */
  required: React.PropTypes.bool,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(Textarea);
