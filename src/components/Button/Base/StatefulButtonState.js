import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ButtonIcon from './ButtonIcon';

const renderStatefulButtonIcon = (icon, sprite) => (
  <ButtonIcon
    position="left"
    icon={icon}
    size="small"
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

  let selectedClass = null;

  switch (state) {
    case 'selected':
      selectedClass = 'slds-text-selected';
      break;
    case 'focus':
      selectedClass = 'slds-text-selected-focus';
      break;
    default:
      selectedClass = 'slds-text-not-selected';
  }

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
