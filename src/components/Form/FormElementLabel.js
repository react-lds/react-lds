import React from 'react';

import { prefixClasses } from '../../utils';

const FormElementLabel = (props, { cssPrefix }) => {
  const { className, id, label, readOnly, required, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const Tag = readOnly ? 'span' : 'label';

  const renderRequired = () => {
    if (required) {
      return (
        <abbr className={prefix('required')} title="required">*</abbr>
      );
    }

    return null;
  };

  return (
    <Tag {...rest} className={prefix('form-element__label', className)} htmlFor={readOnly ? null : id}>
      {renderRequired()}{label}
    </Tag>
  );
};

FormElementLabel.contextTypes = { cssPrefix: React.PropTypes.string };

FormElementLabel.propTypes = {
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * id of the corresponding input tag element
   */
  id: React.PropTypes.string,
  /**
   * label content
   */
  label: React.PropTypes.string.isRequired,
  /**
   * renders the label as a span-tag instead of a label-tag
   */
  readOnly: React.PropTypes.bool,
  /**
   * label for required inputs
   */
  required: React.PropTypes.bool,
};

export default FormElementLabel;
