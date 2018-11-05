import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  FormElement,
  FormElementControl,
  FormElementLabel,
  FormElementError,
} from '../..';

const renderLabel = (label, min, max) => (
  <span className="slds-slider-label">
    <span className="slds-slider-label__label">{label}</span>
    <span className="slds-slider-label__range">{`${min} - ${max}`}</span>
  </span>
);

const renderControl = (onChange, id, value, min, max, step, size, disabled, vertical) => {
  const baseClass = 'slds-slider';

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_vertical`]: vertical },
    { [`slds-size_${size}`]: !!size && !vertical },
  ];

  return (
    <div className={cx(sldsClasses)}>
      <input
        className="slds-slider__range"
        type="range"
        id={id}
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="slds-slider__value" aria-hidden="true">{value}</span>
    </div>
  );
};

const Slider = (props) => {
  const {
    label,
    value,
    onChange,
    min,
    max,
    step,
    id,
    size,
    disabled,
    vertical,
    error,
    hideLabel,
    hideErrorMessage,
    className,
  } = props;

  return (
    <FormElement error={error} className={className}>
      <FormElementLabel label={renderLabel(label, min, max)} id={id} hideLabel={hideLabel} />
      <FormElementControl>
        {renderControl(onChange, id, value, min, max, step, size, disabled, vertical)}
      </FormElementControl>
      {!hideErrorMessage && <FormElementError error={error} id={id} />}
    </FormElement>
  );
};

Slider.propTypes = {
  /**
   * id of the slider
   */
  id: PropTypes.string.isRequired,
  /**
   * current value of the slider
   */
  value: PropTypes.number.isRequired,
  /**
   * minimum value
   */
  min: PropTypes.number,
  /**
   * maximum value
   */
  max: PropTypes.number,
  /**
   * step value
   */
  step: PropTypes.number,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * adds disabled attribute to the slider
   */
  disabled: PropTypes.bool,
  /**
   * render slider vertically
   */
  vertical: PropTypes.bool,
  /**
  * renders an error for the slider
   */
  error: PropTypes.string,
  /**
   * hides the error message
   */
  hideErrorMessage: PropTypes.bool,
  /**
   * sets the label to render as assistive text
   */
  hideLabel: PropTypes.bool,
  /**
   * label for the select
   */
  label: PropTypes.string,
  /**
   * onChange handler for the slider
   */
  onChange: PropTypes.func,
  /**
   * slider sizes: x-small, small, medium, large
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

Slider.defaultProps = {
  label: null,
  min: 0,
  max: 100,
  step: null,
  size: null,
  vertical: false,
  className: null,
  disabled: false,
  error: null,
  hideErrorMessage: false,
  hideLabel: false,
  multiple: false,
  onChange: Function.prototype,
};

export default Slider;
