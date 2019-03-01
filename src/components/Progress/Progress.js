import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const calculateProgressPercent = (progress, childrenCount) => {
  if (progress === 0 || childrenCount === 0) return 0;

  const maxPossibleProgress = Math.min(progress, childrenCount);

  if (maxPossibleProgress >= Math.max(childrenCount - 1, 0)) return 100;

  return maxPossibleProgress / (childrenCount - 1) * 100;
};

const Progress = ({
  assistiveText,
  children,
  flavor,
  isVertical,
  progress,
  progressLabel,
}) => {
  const progressPercent = calculateProgressPercent(
    progress,
    React.Children.count(children)
  );

  return (
    <div>
      <div
        className={cx('slds-progress', {
          [`slds-progress_${flavor}`]: flavor,
          'slds-progress_vertical': isVertical,
        })}
      >
        <ol className="slds-progress__list">
          {React.Children.map(children, child => React.cloneElement(child, { isVertical }))}
        </ol>
        <div
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={progressPercent}
          role="progressbar"
          className={cx({ 'slds-progress-bar slds-progress-bar_x-small': !isVertical })}
        >
          {isVertical ? (
            <span className="slds-assistive-text">
              {progressLabel}
              {progressPercent}
            </span>
          ) : (
            <span className="slds-progress-bar__value" style={{ width: `${progressPercent}%` }}>
              {assistiveText && (
                <span className="slds-assistive-text">{assistiveText}</span>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  assistiveText: null,
  children: null,
  flavor: null,
  isVertical: false,
  progress: 0,
  progressLabel: 'Progress',
};

Progress.propTypes = {
  /**
   * Assistive text for the progress bar
   */
  assistiveText: PropTypes.string,
  /**
   * Progress steps. Need to be ProgressItem components
   */
  children: PropTypes.node,
  /**
   * Whether the progress indicator should be rendered vertically. This will allow arbitrary
   * item content
   */
  isVertical: PropTypes.bool,
  /**
   * Progress (in no. of completed steps). This affects the progress bar
   */
  progress: PropTypes.number,
  /**
   * Shown as assistive text
   */
  progressLabel: PropTypes.string,
  /**
   * Optional flavor
   */
  flavor: PropTypes.oneOf(['shade']),
};

export default Progress;
