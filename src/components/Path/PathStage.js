import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconSVG } from '../../.';

export const PathStage = (props) => {
  const { className, assistiveText, label, complete, current, selected, onStageClick, ...rest, } = props;
  const sldsClasses = [
    'slds-tabs_path__item',
    { 'slds-is-complete': complete },
    { 'slds-is-current': current },
    { 'slds-is-incomplete': !complete && !current },
    { 'slds-is-active': selected && !current },
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
          {complete && <IconSVG sprite="utlity" icon="check" size="x-small" />}
          <span className="slds-assistive-text">{assistiveText}</span>
        </span>
        <span className="slds-tabs_path__title">{label}</span>
      </a>
    </li>
  );
};

PathStage.defaultProps = {
  selected: false,
  complete: false,
  current: false,
  assistiveText: null,
  className: null,
};

PathStage.propTypes = {
  className: PropTypes.string,
  assistiveText: PropTypes.string,
  selected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  current: PropTypes.bool,
  onStageClick: PropTypes.func.isRequired,
};

export default PathStage;
