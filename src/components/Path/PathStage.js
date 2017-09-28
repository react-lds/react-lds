import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconSVG } from '../../.';

export const PathStage = (props) => {
  const { assistiveText, className, complete, current, label, onStageClick, selected, ...rest } = props;

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
          {complete && <IconSVG sprite="utility" icon="check" size="x-small" />}
          <span className="slds-assistive-text">{assistiveText}</span>
        </span>
        <span className="slds-tabs_path__title">{label}</span>
      </a>
    </li>
  );
};

PathStage.defaultProps = {
  assistiveText: null,
  className: null,
  complete: false,
  current: false,
  selected: false,
};

PathStage.propTypes = {
  /*
   * aria assistive text
   */
  assistiveText: PropTypes.string,
  /*
   * class name
   */
  className: PropTypes.string,
  /*
   * stage is current stage
   */
  current: PropTypes.bool,
  /*
   * stage is complete
   */
  complete: PropTypes.bool,
  /*
   * label for stage
   */
  label: PropTypes.string.isRequired,
  /*
   * function to be called on stage click
   */
  onStageClick: PropTypes.func.isRequired,
  /*
   * stage is selected
   */
  selected: PropTypes.bool,
};

export default PathStage;
