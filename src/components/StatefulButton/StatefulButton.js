import React from 'react';
import PropTypes from 'prop-types';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';
import { ButtonIcon } from '../../';

export const StatefulButton = (props, { cssPrefix }) => {
  const {
    className,
    disabled,
    onClick,
    selected,
    stateNotSelected,
    stateSelected,
    stateSelectedFocus,
    tooltip,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsButtonClasses = prefix([
    'button',
    'button_stateful',
    selected ? 'is-selected' : 'not-selected',
  ], className);
  const handleClick = typeof onClick === 'function'
    ? () => onClick(!selected)
    : null;

  return (
    <button
      {...rest}
      className={sldsButtonClasses}
      disabled={disabled}
      onClick={handleClick}
      title={tooltip}
    >
      <span className={prefix('text-not-selected')}>
        <ButtonIcon
          icon={stateNotSelected.icon}
          position="left"
          sprite={stateNotSelected.sprite}
        />
        {stateNotSelected.title}
      </span>
      <span className={prefix('text-selected')}>
        <ButtonIcon
          icon={stateSelected.icon}
          position="left"
          sprite={stateSelected.sprite}
        />
        {stateSelected.title}
      </span>
      <span className={prefix('text-selected-focus')}>
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

StatefulButton.flavors = [
  'neutral',
  'brand',
  'destructive',
  'inverse',
  'success',
];

StatefulButton.contextTypes = { cssPrefix: PropTypes.string };

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
  onClick: PropTypes.func,

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
};

StatefulButton.defaultProps = {
  className: null,
  disabled: false,
  onClick: null,
  selected: false,
  tooltip: null,
};

export default flavorable(StatefulButton, 'button');