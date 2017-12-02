import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { flavorProp } from '../../utils';
import { ButtonIcon } from '../../';

const StatefulButton = (props) => {
  const {
    className,
    disabled,
    onClick,
    selected,
    stateNotSelected,
    stateSelected,
    stateSelectedFocus,
    tooltip,
    flavor,
    ...rest
  } = props;

  const sldsButtonClasses = [
    'slds-button',
    'slds-button_stateful',
    { [`slds-button_${flavor}`]: !!flavor },
    selected ? 'slds-is-selected' : 'slds-not-selected',
    className,
  ];
  const handleClick = () => onClick(!selected);

  return (
    <button
      {...rest}
      className={cx(sldsButtonClasses)}
      disabled={disabled}
      onClick={handleClick}
      title={tooltip}
    >
      <span className="slds-text-not-selected">
        <ButtonIcon
          icon={stateNotSelected.icon}
          position="left"
          sprite={stateNotSelected.sprite}
        />
        {stateNotSelected.title}
      </span>
      <span className="slds-text-selected">
        <ButtonIcon
          icon={stateSelected.icon}
          position="left"
          sprite={stateSelected.sprite}
        />
        {stateSelected.title}
      </span>
      <span className="slds-text-selected-focus">
        <ButtonIcon
          icon={stateSelectedFocus.icon}
          position="left"
          sprite={stateSelectedFocus.sprite}
        />
        {stateSelectedFocus.title}
      </span>
    </button>
  );
};

StatefulButton.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,

  /**
   * Is this button disabled?
   */
  disabled: PropTypes.bool,

  /**
   * onClick handler. Will be called with a boolean when the button is pressed,
   * receives `true` when button is currently unselected, `false` otherwise.
   * (The passed parameter says _"Should this button be selected now?"_)
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Is this button selected?
   */
  selected: PropTypes.bool,

  /**
   * description of the button when not selected
   */
  stateNotSelected: PropTypes.shape({
    /**
     * SVG icon name
     */
    icon: PropTypes.string.isRequired,
    /**
     * SVG icon sprite
     */
    sprite: PropTypes.string.isRequired,
    /**
     * button text
     */
    title: PropTypes.string.isRequired,
  }).isRequired,

  /**
   * description of the button when selected
   */
  stateSelected: PropTypes.shape({
    /**
     * SVG icon name
     */
    icon: PropTypes.string.isRequired,
    /**
     * SVG icon sprite
     */
    sprite: PropTypes.string.isRequired,
    /**
     * button text
     */
    title: PropTypes.string.isRequired,
  }).isRequired,

  /**
   * description of the button when selected and hovered over / focussed
   */
  stateSelectedFocus: PropTypes.shape({
    /**
     * SVG icon name
     */
    icon: PropTypes.string.isRequired,
    /**
     * SVG icon sprite
     */
    sprite: PropTypes.string.isRequired,
    /**
     * button text
     */
    title: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * optional tooltip
   */
  tooltip: PropTypes.string,
  /**
   * flavors: neutral, brand, destructive, inverse, success
   */
  flavor: flavorProp([
    'neutral',
    'brand',
    'destructive',
    'inverse',
    'success',
  ])
};

StatefulButton.defaultProps = {
  className: null,
  disabled: false,
  selected: false,
  tooltip: null,
  flavor: null
};

export default StatefulButton;
