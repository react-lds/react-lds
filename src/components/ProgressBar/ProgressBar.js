import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable } from '../../decorators';

export const ProgressBar = (props) => {
  const { className, progress, size, ...rest } = props;

  const sldsClasses = [
    'slds-progress-bar',
    { [`slds-progress-bar_${size}`]: !!size },
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

ProgressBar.flavors = [
  'circular',
];

ProgressBar.defaultProps = {
  className: null,
  progress: 0,
  size: null,
};

ProgressBar.propTypes = {
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

export default flavorable(ProgressBar, 'progress-bar');
