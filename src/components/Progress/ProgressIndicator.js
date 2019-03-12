import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const calculateProgressPercent = (progress, childrenCount) => {
  if (progress === 0 || childrenCount === 0) return 0;

  const maxPossibleProgress = Math.min(progress, childrenCount);

  if (maxPossibleProgress >= Math.max(childrenCount - 1, 0)) return 100;

  return maxPossibleProgress / (childrenCount - 1) * 100;
};

const ProgressIndicator = ({
  assistiveText,
  children,
  className,
  flavor,
  isVertical,
  progress,
  progressLabel,
  ...rest
}) => {
  const progressPercent = calculateProgressPercent(
    progress,
    React.Children.count(children)
  );
  const classNames = cx('slds-progress', {
    [`slds-progress_${flavor}`]: flavor,
    'slds-progress_vertical': isVertical,
  }, className);

  return (
    <div {...rest} className={classNames}>
      <ol className="slds-progress__list">
        {children}
      </ol>
      <div
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progressPercent}
        className={cx({ 'slds-progress-bar slds-progress-bar_x-small': !isVertical })}
        role="progressbar"
      >
        {isVertical ? (
          <span className="slds-assistive-text">
            {progressLabel}
            {progressPercent}
          </span>
        ) : (
          <span className="slds-progress-bar__value" style={{ width: `${progressPercent}%` }}>
            {assistiveText && <span className="slds-assistive-text">{assistiveText}</span>}
          </span>
        )}
      </div>
    </div>
  );
};

ProgressIndicator.defaultProps = {
  assistiveText: null,
  children: null,
  className: null,
  flavor: null,
  isVertical: false,
  progress: 0,
  progressLabel: 'Progress',
};

const propTypes = {
  /**
   * Assistive text for the progress bar
   */
  assistiveText: PropTypes.string,
  /**
   * Progress steps. Need to be ProgressIndicatorItem components
   */
  children: PropTypes.node,
  /**
   * Additional className
   */
  className: PropTypes.string,
  /**
   * Whether the progress indicator should be rendered vertically. This will allow arbitrary
   * item content. Consider using VerticalProgressIndicator instead
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

ProgressIndicator.propTypes = propTypes;

export { propTypes };
export default ProgressIndicator;
