import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { clamp, fraction } from './utils';
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
    const deg = 2 * Math.PI * progress;
    const isLong = progress >= 0.5 ? '1' : '0';
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
    min,
    max,
    progress,
    status,
    ...rest
  } = props;

  const baseClass = 'slds-progress-ring';

  const percComplete = fraction(clamp(progress, min, max), min, max);

  const isForceComplete = complete === true || (complete === 'auto' && percComplete === 1);
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
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={percComplete * 100}
      >
        <svg viewBox="-1 -1 2 2">{getPath(percComplete, isForceComplete)}</svg>
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
  min: 0,
  max: 100,
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
   * Progress status. Can be: 'expired' or 'warning'
   */
  status: PropTypes.oneOf(['expired', 'warning']),
};

export default ProgressRing;
