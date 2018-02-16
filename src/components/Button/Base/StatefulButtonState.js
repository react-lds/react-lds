import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';

const renderStatefulButtonIcon = (icon, sprite) => (
  <ButtonIcon
    className="slds-button__icon_stateful"
    position="left"
    icon={icon}
    sprite={sprite}
  />
);

const StatefulButtonState = (props) => {
  const {
    className,
    icon,
    sprite,
    state,
    title,
    ...rest
  } = props;

  /* eslint-disable no-nested-ternary */
  const selectedClass = state === 'selected'
    ? 'slds-text-selected'
    : state === 'focus' ? 'slds-text-selected-focus' : 'slds-text-not-selected';
  /* eslint-enable */

  return (
    <span {...rest} className={cx(selectedClass, className)}>
      {renderStatefulButtonIcon(icon, sprite)}
      {title}
    </span>
  );
};

StatefulButtonState.defaultProps = {
  className: null,
};

StatefulButtonState.propTypes = {
  /**
   * Button state described by this component. A `StatefulButton` needs all states present
   */
  state: PropTypes.oneOf(['selected', 'not-selected', 'focus']).isRequired,
  /**
   * Icon rendered in this state
   */
  icon: PropTypes.string.isRequired,
  /**
   * Sprite containing `icon`
   */
  sprite: PropTypes.string.isRequired,
  /**
   * Button content for `state`
   */
  title: PropTypes.string.isRequired,
  /**
   * Optional additional className
   */
  className: PropTypes.string,
};

export default StatefulButtonState;
