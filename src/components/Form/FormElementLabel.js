import React from 'react';

import { prefixClasses } from '../../utils';

const FormElementLabel = (props, { cssPrefix }) => {
  const { className, id, label, legend, readOnly, required, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const renderRequired = () => {
    if (required) {
      return (
        <abbr className={prefix('required')} title="required">*</abbr>
      );
    }

    return null;
  };


  let Tag = 'label';

  if (readOnly) {
    Tag = 'span';
  } else if (legend) {
    Tag = 'legend';
  }

  const sldsClasses = [
    { 'form-element__legend': !!legend },
    'form-element__label',
  ];

  return (
    <Tag {...rest} className={prefix(sldsClasses, className)} htmlFor={readOnly || legend ? null : id}>
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
   * Renders as a html5 legend
   */
  legend: React.PropTypes.bool,
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
