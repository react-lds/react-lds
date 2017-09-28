import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FormElementLabel = (props) => {
  const {
    className,
    hideLabel,
    id,
    label,
    legend,
    readOnly,
    required,
    ...rest
  } = props;

  const renderRequired = () => {
    if (required) {
      return (<abbr className="slds-required" title="required">*</abbr>);
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
    'slds-form-element__label',
    { 'slds-form-element__legend': !!legend },
    { 'slds-assistive-text': hideLabel },
    className
  ];

  return (
    <Tag {...rest} className={cx(sldsClasses)} htmlFor={readOnly || legend ? null : id}>
      {renderRequired()}{label}
    </Tag>
  );
};

FormElementLabel.defaultProps = {
  className: null,
  hideLabel: false,
  legend: false,
  readOnly: false,
  required: false,
};

FormElementLabel.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * id of the corresponding input tag element
   */
  id: PropTypes.string.isRequired,
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
