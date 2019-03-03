import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getClampedProgress } from './utils';
import { Icon } from '../..';

const getIconForStatus = (status, labels) => {
  if (!status) return null;
  if (status === 'expired') return <Icon sprite="utility" icon="error" title={labels.expired} />;
  if (status === 'warning') return <Icon sprite="utility" icon="warning" title={labels.warning} />;
  return <Icon sprite="utility" icon="check" title={labels.complete} />;
};

const getPath = (progress, isComplete, variant) => {
  const prefix = 'M 1 0 A 1 1 0';
  const postfix = 'L 0 0';

  let d = `${prefix} 1 1 1 -2.4492935982947064e-16 ${postfix}`;

  if (!isComplete) {
    const deg = 2 * Math.PI * progress;
    const isLong = progress >= 0.5 ? '1' : '0';
    d = variant === 'fill'
      ? `${prefix} ${isLong} 0 ${Math.cos(deg)} ${-Math.sin(deg)} ${postfix}`
      : `${prefix} ${isLong} 1 ${Math.cos(deg)} ${Math.sin(deg)} ${postfix}`;
  }

  return <path className="slds-progress-ring__path" d={d} />;
};

const ProgressRing = (props) => {
  const {
    assistiveLabels,
    children,
    className,
    complete,
    customIcon,
    min,
    max,
    progress,
    size,
    status,
    variant,
    ...rest
  } = props;

  const baseClass = 'slds-progress-ring';

  const percComplete = getClampedProgress(progress, min, max);

  const isForceComplete = complete === true || (complete === 'auto' && percComplete === 100);
  const currentStatus = isForceComplete ? 'complete' : status;

  const content = children || (!currentStatus && customIcon
    ? customIcon
    : getIconForStatus(currentStatus, assistiveLabels));

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_${currentStatus}`]: !!currentStatus },
    className,
    { [`${baseClass}_${size}`]: !!size },
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
        aria-valuenow={percComplete}
      >
        <svg viewBox="-1 -1 2 2">{getPath(percComplete / 100, isForceComplete, variant)}</svg>
      </div>
      <div className="slds-progress-ring__content">{content}</div>
    </div>
  );
};

ProgressRing.defaultProps = {
  assistiveLabels: {
    complete: 'Complete',
    expired: 'Expired',
    warning: 'Warning',
  },
  className: null,
  complete: 'auto',
  customIcon: null,
  min: 0,
  max: 100,
  progress: 0,
  size: null,
  status: null,
  variant: 'fill',
  children: null,
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
   * If provided, children has precedence over the customIcon and status prop
   */
  children: PropTypes.node,
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
   * large size
   */
  size: PropTypes.oneOf(['large']),
  /**
   * Progress status
   */
  status: PropTypes.oneOf(['expired', 'warning', 'active-step']),
  /**
   * fill or drain the ring (fill means the colored portion of the ring increases clockwise)
   */
  variant: PropTypes.oneOf(['fill', 'drain']),
};

export default ProgressRing;
