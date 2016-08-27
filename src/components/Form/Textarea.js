import React from 'react';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../';
import { prefixClasses } from '../../utils';

const Textarea = (props, { cssPrefix }) => {
  const {
    className,
    disabled,
    error,
    id,
    label,
    onChange,
    placeholder,
    required,
    readOnly,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderContent = () => {
    if (readOnly) {
      return (
        <div {...rest} className={prefix(['form-element__static', 'text-longform'])}>
          <p>{placeholder}</p>
        </div>
      );
    }

    return (
      <textarea
        {...rest}
        className={prefix('textarea', className)}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
    );
  };

  return (
    <FormElement required={required} error={error}>
      <FormElementLabel label={label} id={id} required={required} />
      <FormElementControl className={prefix({ 'has-divider--bottom': readOnly })}>
        {renderContent()}
      </FormElementControl>
      <FormElementError error={error} />
    </FormElement>
  );
};

Textarea.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

Textarea.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
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
};

export default Textarea;
