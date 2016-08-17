
import React from 'react';
import { prefixable } from '../../decorators';

export const FormElementLabel = (props) => {
  const { id, label, readOnly, required, prefix } = props;

  const Tag = readOnly ? 'span' : 'label';

  const renderRequired = () => {
    if (required) {
      return (
        <abbr className={prefix(['required'])} title="required">*</abbr>
      );
    }

    return null;
  };

  const sldsClasses = [
    'form-element__label',
  ];

  return (
    <Tag className={prefix(sldsClasses, props)} htmlFor={readOnly ? null : id}>
      {renderRequired()}{label}
    </Tag>
  );
};

FormElementLabel.propTypes = {  /**
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
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(FormElementLabel);
