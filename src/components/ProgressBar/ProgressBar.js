import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const getBarValueStyle = num => ({
  width: `${num}%`,
});

const ProgressBar = (props) => {
  const {
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

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      {...rest}
      className={cx(sldsClasses)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={clampedProgress}
      role="progressbar"
    >
        <span className="slds-assistive-text">{`Progress: ${clampedProgress}%`}</span>
      <span className={cx(valueClasses)} style={getBarValueStyle(clampedProgress)}>
      </span>
    </div>
  );
};

ProgressBar.defaultProps = {
  circular: false,
  className: null,
  progress: 0,
  size: null,
  success: false,
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
