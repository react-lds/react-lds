import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const ProgressBar = (props) => {
  const { circular, className, progress, size, ...rest } = props;

  const sldsClasses = [
    'slds-progress-bar',
    { [`slds-progress-bar_${size}`]: !!size },
    { 'slds-progress-bar_circular': circular },
    className
  ];

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const barValueStyle = {
    width: `${clampedProgress}%`,
  };

  return (
    <div
      {...rest}
      className={cx(sldsClasses)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={clampedProgress}
      role="progressbar"
    >
      <span className="slds-progress-bar__value" style={barValueStyle}>
        <span className="slds-assistive-text">{`Progress: ${clampedProgress}%`}</span>
      </span>
    </div>
  );
};

ProgressBar.defaultProps = {
  circular: false,
  className: null,
  progress: 0,
  size: null,
};

ProgressBar.propTypes = {
  /**
   * ProgressBar with circular ends
   */
  circular: PropTypes.bool,
  /**
   * (optional) class name
   */
  className: PropTypes.string,
  /**
   * progress value
   */
  progress: PropTypes.number,
  /**
   * height of the bar
   */
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

export default ProgressBar;
