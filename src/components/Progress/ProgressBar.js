import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { clamp } from './utils';

const getBarValueStyle = num => ({
  width: `${num}%`,
});

const ProgressBar = (props) => {
  const {
    assistiveLabel,
    circular,
    className,
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

  const clampedProgress = clamp(progress);

  return (
    <div
      {...rest}
      className={cx(sldsClasses)}
      aria-valuemin="0"
      aria-valuemax="100"
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
   * Progress value (between 0-100)
   */
  progress: PropTypes.number,
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
