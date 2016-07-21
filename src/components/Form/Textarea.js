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
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
  /**
   * input onChange handler
   */
  onChange: React.PropTypes.func,
  /**
   * id of the textarea tag element
   */
  id: React.PropTypes.string.isRequired,
  /**
   * textarea placeholder
   */
  placeholder: React.PropTypes.string.isRequired,
  /**
   * label
   */
  label: React.PropTypes.string.isRequired,
  /**
   * sets the field required
   */
  required: React.PropTypes.bool,
  /**
   * disables the field
   */
  disabled: React.PropTypes.bool,
  /**
   * if set, this error message will be shown
   */
  error: React.PropTypes.string,
  /**
   * render a static textarea-output instead
   */
  readOnly: React.PropTypes.bool,
};

export default prefixable(Textarea);
