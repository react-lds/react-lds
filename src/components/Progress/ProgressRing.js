import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { clamp } from './utils';
import { Icon } from '../../';

const getIconForVariation = (variation, labels) => {
  if (!variation) return null;
  if (variation === 'expired') return <Icon sprite="utility" icon="error" title={labels.expired} />;
  if (variation === 'warning') return <Icon sprite="utility" icon="warning" title={labels.warning} />;
  return <Icon sprite="utility" icon="check" title={labels.complete} />;
};

const getPath = (progress, isComplete) => {
  const pathPrefix = 'M 1 0 A';
  const pathPostfix = 'L 0 0';

  let d = `${pathPrefix} 1 1 0 1 1 1 -2.4492935982947064e-16 ${pathPostfix}`;

  if (!isComplete) {
    const deg = 2 * Math.PI * (progress / 100);
    const isLong = progress >= 50 ? '1' : '0';
    d = `${pathPrefix} 1 1 0 ${isLong} 1 ${Math.cos(deg)} ${Math.sin(deg)} ${pathPostfix}`;
  }

  return <path className="slds-progress-ring__path" id="slds-progress-ring-path" d={d} />;
};

const ProgressRing = (props) => {
  const {
    assistiveLabels,
    className,
    complete,
    customIcon,
    progress,
    variation,
    ...rest
  } = props;

  const baseClass = 'slds-progress-ring';

  const clampedProgress = clamp(progress);

  const isForceComplete = complete === true || (complete === 'auto' && clampedProgress === 100);
  const currentVariation = isForceComplete ? 'complete' : variation;

  const iconEl = (!complete || !isForceComplete) && customIcon
    ? customIcon
    : getIconForVariation(currentVariation, assistiveLabels);

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_${currentVariation}`]: !!currentVariation },
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
  variation: null,
};

ProgressRing.propTypes = {
  assistiveLabels: PropTypes.shape({
    expired: PropTypes.string,
    warning: PropTypes.string,
    complete: PropTypes.string,
  }),
  complete: PropTypes.oneOf([true, false, 'auto']),
  className: PropTypes.string,
  customIcon: PropTypes.element,
  progress: PropTypes.number.isRequired,
  variation: PropTypes.oneOf(['expired', 'warning']),
};

export default ProgressRing;
