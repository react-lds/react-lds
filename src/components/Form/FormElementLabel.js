import React from 'react';
import PropTypes from 'prop-types';

import { prefixClasses } from '../../utils';

const FormElementLabel = (props, { cssPrefix }) => {
  const {
    className,
    hideLabel,
    id,
    label,
    legend,
    readOnly,
    required,
    ...rest,
  } = props;

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
    { 'assistive-text': hideLabel },
  ];

  return (
    <Tag {...rest} className={prefix(sldsClasses, className)} htmlFor={readOnly || legend ? null : id}>
      {renderRequired()}{label}
    </Tag>
  );
};

FormElementLabel.contextTypes = { cssPrefix: PropTypes.string };

FormElementLabel.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * id of the corresponding input tag element
   */
  id: PropTypes.string,
  /**
   * sets the label to render as assistive text
   */
  hideLabel: PropTypes.bool,
  /**
   * label content
   */
  label: PropTypes.string.isRequired,
  /**
   * Renders as a html5 legend
   */
  legend: PropTypes.bool,
  /**
   * renders the label as a span-tag instead of a label-tag
   */
  readOnly: PropTypes.bool,
  /**
   * label for required inputs
   */
  required: PropTypes.bool,
};

export default FormElementLabel;
