import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { clamp, fraction } from './utils';

const getBarValueStyle = num => ({
  width: `${num}%`,
});

const ProgressBar = (props) => {
  const {
    assistiveLabel,
    circular,
    className,
    min,
    max,
    progress,
    size,
    success,
    ...rest
  } = props;

  const baseClass = 'slds-progress-bar';

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_${size}`]: !!size },
    { [`${baseClass}_circular`]: circular },
    className
  ];

  const valueClasses = [
    `${baseClass}__value`,
    { [`${baseClass}__value_success`]: success },
  ];

  const clampedProgress = fraction(clamp(progress, min, max), min, max) * 100;

  return (
    <div
      {...rest}
      className={cx(sldsClasses)}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={clampedProgress}
      role="progressbar"
    >
      <span className={cx(valueClasses)} style={getBarValueStyle(clampedProgress)}>
        <span className="slds-assistive-text">{`${assistiveLabel}: ${clampedProgress}%`}</span>
      </span>
    </div>
  );
};

ProgressBar.defaultProps = {
  assistiveLabel: 'Progress',
  circular: false,
  className: null,
  progress: 0,
  min: 0,
  max: 100,
  size: null,
  success: false,
};

ProgressBar.propTypes = {
  /**
   * Assistive label. Interpolates to `${label}: x%`
   */
  assistiveLabel: PropTypes.string,
  /**
   * Render progress bar with round edges instead
   */
  circular: PropTypes.bool,
  /**
   * (optional) class name
   */
  className: PropTypes.string,
  /**
   * Progress value (between min-max)
   */
  progress: PropTypes.number.isRequired,
  /**
   * Progress min
   */
  min: PropTypes.number,
  /**
   * Progress max
   */
  max: PropTypes.number,
  /**
   * Available sizes: x-small, small, medium, large
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  /**
   * Render a green progress bar
   */
  success: PropTypes.bool,
};

export default ProgressBar;
