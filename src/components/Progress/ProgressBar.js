import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getClampedProgress } from './utils';

const getBarValueStyle = (num, vertical) => ({
  [vertical ? 'height' : 'width']: `${num}%`,
});

const ProgressBar = (props) => {
  const {
    assistiveLabel,
    circular,
    completeLabel,
    className,
    min,
    max,
    progress,
    size,
    success,
    vertical,
    ...rest
  } = props;

  const baseClass = 'slds-progress-bar';

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_${size}`]: !!size },
    { [`${baseClass}_circular`]: circular },
    { [`${baseClass}_vertical`]: vertical },
    className
  ];

  const valueClasses = [
    `${baseClass}__value`,
    { [`${baseClass}__value_success`]: success },
  ];

  const clampedProgress = getClampedProgress(progress, min, max);

  return (
    <div
      {...rest}
      className={cx(sldsClasses)}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={clampedProgress}
      role="progressbar"
    >
      <span className={cx(valueClasses)} style={getBarValueStyle(clampedProgress, vertical)}>
        <span className="slds-assistive-text">
          {assistiveLabel
            ? `${assistiveLabel}: ${clampedProgress}%`
            : `${clampedProgress}% ${completeLabel}`
          }
        </span>
      </span>
    </div>
  );
};

ProgressBar.defaultProps = {
  assistiveLabel: null,
  completeLabel: 'Complete',
  circular: false,
  className: null,
  progress: 0,
  min: 0,
  max: 100,
  size: null,
  success: false,
  vertical: false,
};

ProgressBar.propTypes = {
  /**
   * (DEPRECATED) Assistive label. Interpolates to `${label}: x%`
   */
  assistiveLabel: PropTypes.string,
  /**
   * Assistive label. Interpolates to `x% ${label}`
   */
  completeLabel: PropTypes.string,
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
  progress: PropTypes.number,
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
  /**
   * Renders as a vertical progress bar
   */
  vertical: PropTypes.bool,
};

export default ProgressBar;
