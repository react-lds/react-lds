import React from 'react';
import PropTypes from 'prop-types';

import { getUniqueHash, prefixClasses } from '../../utils';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../';

const Textarea = (props, { cssPrefix }) => {
  const {
    className,
    disabled,
    error,
    hideLabel,
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
        aria-describedby={error ? getUniqueHash(error, id) : null}
      />
    );
  };

  return (
    <FormElement required={required} error={error}>
      <FormElementLabel label={label} id={id} required={required} hideLabel={hideLabel} />
      <FormElementControl className={prefix({ 'has-divider--bottom': readOnly })}>
        {renderContent()}
      </FormElementControl>
      <FormElementError error={error} id={id} />
    </FormElement>
  );
};

Textarea.contextTypes = { cssPrefix: PropTypes.string };

Textarea.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
  * adds disabled attribute to the textarea
   */
  disabled: PropTypes.bool,
  /**
  * renders an error for the textarea
   */
  error: PropTypes.string,
  /**
   * sets the label to render as assistive text
   */
  hideLabel: PropTypes.bool,
  /**
   * id of the textarea
   */
  id: PropTypes.string.isRequired,
  /**
   * label for the textarea
   */
  label: PropTypes.string.isRequired,
  /**
   * onChange handler for the textarea
   */
  onChange: PropTypes.func,
  /**
   * textarea placeholder
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * renders a static textarea output instead
   */
  readOnly: PropTypes.bool,
  /**
   * adds required attribute to the textarea
   */
  required: PropTypes.bool,
};

export default Textarea;
