import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconSVG } from '../../.';

export const PathStage = (props) => {
  const { className, assistiveText, label, status, selected, onStageClick, ...rest, } = props;
  const sldsClasses = [
    'slds-tabs_path__item',
    { 'slds-is-complete': status === 'complete' },
    { 'slds-is-current': status === 'current' },
    { 'slds-is-incomplete': status !== 'complete' && status !== 'current' },
    { 'slds-is-active': selected && status !== 'current' },
    className,
  ];

  return (
    <li className={cx(sldsClasses)} role="presentation" {...rest}>
      <a
        aria-selected={selected}
        className="slds-tabs_path__link"
        role="option"
        tabIndex={selected ? 0 : -1}
        onClick={onStageClick}
      >
        <span className="slds-tabs_path__stage">
          {status === 'complete' && <IconSVG sprite="utlity" icon="check" size="x-small" />}
          <span className="slds-assistive-text">{assistiveText}</span>
        </span>
        <span className="slds-tabs_path__title">{label}</span>
      </a>
    </li>
  );
};

PathStage.defaultProps = {
};

PathStage.propTypes = {
  className: PropTypes.string.isRequired,
  assistiveText: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onStageClick: PropTypes.func.isRequired,
};

export default PathStage;
