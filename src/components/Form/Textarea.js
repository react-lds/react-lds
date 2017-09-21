import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getUniqueHash } from '../../utils';
import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../../';

const Textarea = (props) => {
  const {
    className,
    disabled,
    error,
    hideLabel,
    id,
    inlineHelp,
    label,
    onChange,
    placeholder,
    required,
    readOnly,
    ...rest,
  } = props;

  const renderContent = () => {
    if (readOnly) {
      return (
        <div {...rest} className="slds-form-element__static slds-text-longform">
          <p>{placeholder}</p>
        </div>
      );
    }

    const sldsClasses = [
      'slds-textarea',
      className,
    ];

    return (
      <textarea
        {...rest}
        className={cx(sldsClasses)}
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
      <FormElementControl className={cx({ 'slds-border_bottom': readOnly })}>
        {renderContent()}
      </FormElementControl>
      <FormElementError error={error} id={id} />
      {!!inlineHelp && <div className="slds-form-element__help">{inlineHelp}</div>}
    </FormElement>
  );
};

Textarea.defaultProps = {
  className: null,
  disabled: null,
  error: null,
  hideLabel: false,
  inlineHelp: null,
  onChange: () => {},
  readOnly: false,
  required: false,
};

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
   * Inline Help, string or node
   */
  inlineHelp: PropTypes.node,
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
