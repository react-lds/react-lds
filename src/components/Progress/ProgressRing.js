import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { clamp } from './utils';
import { Icon } from '../../';

const getIconForStatus = (status, labels) => {
  if (!status) return null;
  if (status === 'expired') return <Icon sprite="utility" icon="error" title={labels.expired} />;
  if (status === 'warning') return <Icon sprite="utility" icon="warning" title={labels.warning} />;
  return <Icon sprite="utility" icon="check" title={labels.complete} />;
};

const getPath = (progress, isComplete) => {
  const prefix = 'M 1 0 A 1 1 0';
  const postfix = 'L 0 0';

  let d = `${prefix} 1 1 1 -2.4492935982947064e-16 ${postfix}`;

  if (!isComplete) {
    const deg = 2 * Math.PI * (progress / 100);
    const isLong = progress >= 50 ? '1' : '0';
    d = `${prefix} ${isLong} 1 ${Math.cos(deg)} ${Math.sin(deg)} ${postfix}`;
  }

  return <path className="slds-progress-ring__path" d={d} />;
};

const ProgressRing = (props) => {
  const {
    assistiveLabels,
    className,
    complete,
    customIcon,
    progress,
    status,
    ...rest
  } = props;

  const baseClass = 'slds-progress-ring';

  const clampedProgress = clamp(progress);

  const isForceComplete = complete === true || (complete === 'auto' && clampedProgress === 100);
  const currentStatus = isForceComplete ? 'complete' : status;

  const iconEl = !currentStatus && customIcon
    ? customIcon
    : getIconForStatus(currentStatus, assistiveLabels);

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_${currentStatus}`]: !!currentStatus },
    className,
  ];

  return (
    <div
      {...rest}
      className={cx(sldsClasses)}
    >
      <div
        className="slds-progress-ring__progress"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={clampedProgress}
      >
        <svg viewBox="-1 -1 2 2">{getPath(clampedProgress, isForceComplete)}</svg>
      </div>
      <div className="slds-progress-ring__content">{iconEl}</div>
    </div>
  );
};

ProgressRing.defaultProps = {
  assistiveLabels: {
    complete: 'Complete',
    expired: 'Expired',
    warning: 'Warning',
  },
  complete: 'auto',
  className: null,
  customIcon: null,
  status: null,
};

ProgressRing.propTypes = {
  /**
   * Assistive labels for statuses
   */
  assistiveLabels: PropTypes.shape({
    expired: PropTypes.string.isRequired,
    warning: PropTypes.string.isRequired,
    complete: PropTypes.string.isRequired,
  }),
  /**
   * Controls when the complete state is rendered. Can either be a boolean value or 'auto'
   * 'auto': Sets complete once progress >= max
   */
  complete: PropTypes.oneOf([true, false, 'auto']),
  /**
   * (Optional) ClassName
   */
  className: PropTypes.string,
  /**
   * Custom Icon that will be rendered inside the ProgressRing. Will be overwritten by status icons.
   */
  customIcon: PropTypes.element,
  /**
   * Progress value (between 0-100)
   */
  progress: PropTypes.number.isRequired,
  /**
   * Progress status. Can be: 'expired' or 'warning'
   */
  status: PropTypes.oneOf(['expired', 'warning']),
};

export default ProgressRing;
