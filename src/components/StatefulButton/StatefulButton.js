import React from 'react';
import PropTypes from 'prop-types';

import { flavorable } from '../../decorators';
import { prefixClasses } from '../../utils';
import Button from '../Button';
import IconSVG from '../Icon';

export const StatefulButton = (props, { cssPrefix }) => {
  const {
    className,
    onClick,
    selected,
    stateNotSelected,
    stateSelectedFocus,
    stateSelected,
    ...rest,
  } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsButtonClasses = prefix([
    'button',
    'button_stateful',
    selected ? 'is-selected' : 'not-selected',
    className,
  ]);

  return (
    <Button
      {...rest}
      className={sldsButtonClasses}
      onClick={onClick}
    >
      <span className={prefix('text-not-selected')}>
        <IconSVG sprite={stateNotSelected.sprite} icon={stateNotSelected.icon} />
        {stateNotSelected.title}
      </span>
      <span className={prefix('text-selected')}>
        <IconSVG sprite={stateSelected.sprite} icon={stateSelected.icon} />
        {stateSelected.title}
      </span>
      <span className={prefix('text-selected-focus')}>
        <IconSVG sprite={stateSelectedFocus.sprite} icon={stateSelectedFocus.icon} />
        {stateSelectedFocus.title}
      </span>
    </Button>
  );
};

StatefulButton.flavors = [
  'brand',
  'destructive',
  'inverse',
  'neutral',
  'success',
];

StatefulButton.contextTypes = { cssPrefix: PropTypes.string };

StatefulButton.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,

  /**
   * disables the button
   */
  disabled: PropTypes.bool,

  /**
   * onClick handler to trigger an action
   */
  onClick: PropTypes.func,

  /**
   * renders as selected
   */
  selected: PropTypes.bool,

  /**
   * description of the button when not selected
   */
  stateNotSelected: PropTypes.shape({
    /**
     * SVG icon name
     */
    icon: PropTypes.string,
    /**
     * SVG icon sprite
     */
    sprite: PropTypes.string,
    /**
     * button text
     */
    title: PropTypes.string,
  }).isRequired,

  /**
   * description of the button when selected
   */
  stateSelected: PropTypes.shape({
    /**
     * SVG icon name
     */
    icon: PropTypes.string,
    /**
     * SVG icon sprite
     */
    sprite: PropTypes.string,
    /**
     * button text
     */
    title: PropTypes.string,
  }).isRequired,

  /**
   * description of the button when selected and hovered over / focussed
   */
  stateSelectedFocus: PropTypes.shape({
    /**
     * SVG icon name
     */
    icon: PropTypes.string,
    /**
     * SVG icon sprite
     */
    sprite: PropTypes.string,
    /**
     * button text
     */
    title: PropTypes.string,
  }).isRequired,
};

StatefulButton.defaultProps = {
  className: '',
  disabled: false,
  onClick: null,
  selected: false,
};

export default flavorable(StatefulButton, 'button');
