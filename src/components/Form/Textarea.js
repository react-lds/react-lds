import React from 'react';
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

  const formElementClasses = [
    'form-element',
    { 'is-required': required },
    { 'has-error': !!error },
  ];

  const formLabelClasses = [
    'form-element__label',
  ];

  const formControlClasses = [
    'form-element__control',
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
        disabled={disabled ? '' : null}
        required={required ? '' : null}
      ></textarea>
    );
  };

  const renderError = () => {
    if (error) {
      return (
        <div className={prefix(['form-element__help'])}>{error}</div>
      );
    }

    return null;
  };

  const renderRequired = () => {
    if (required) {
      return (
        <abbr className={prefix(['required'])} title="required">*</abbr>
      );
    }

    return null;
  };

  const renderLabel = () => {
    const LabelElement = readOnly ? 'span' : 'label';

    return (
      <LabelElement className={prefix(formLabelClasses, props)} htmlFor={readOnly ? null : id}>
        {renderRequired()}{label}
      </LabelElement>
    );
  };

  return (
    <div className={prefix(formElementClasses, props)}>
      {renderLabel()}
      <div className={prefix(formControlClasses, props)}>
        {renderContent()}
      </div>
      {renderError()}
    </div>
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
