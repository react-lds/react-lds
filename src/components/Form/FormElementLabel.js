
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

FormElementLabel.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * id of the input tag element
   */
  id: React.PropTypes.string,
  /**
   * label
   */
  label: React.PropTypes.string.isRequired,
  /**
   * render a span instead of a label
   */
  readOnly: React.PropTypes.bool,
  /**
   * labels a required input
   */
  required: React.PropTypes.bool,
};

export default prefixable(FormElementLabel);
