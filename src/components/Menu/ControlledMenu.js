import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash/omit';
import { Button, ButtonIcon } from '../../';

const propTypes = {
  /**
   * The button that triggers the dropdown menu
   * ```
   * {
   *    icon: 'settings',
   *    sprite: 'utility',
   *    title: 'Click me',
   *    noBorder: true,
   * }
   * ```
   */
  button: PropTypes.shape({
    brand: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    neutral: PropTypes.bool,
    noBorder: PropTypes.bool,
    sprite: PropTypes.string.isRequired,
    title: PropTypes.string,
    tooltip: PropTypes.string,
  }),
  /**
   * one MenuDropDownList or many of them
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * fully customizable dropdown trigger button, use this instead of the button
   * shape if needed
   */
  customButton: PropTypes.element,
  /**
   * adds disabled attribute to menu button
   */
  disabled: PropTypes.bool,
  /**
   * forces open or closed state, is needed when using a custom button
   */
  isOpen: PropTypes.bool,
  /**
   * indicates that this is the last element inside a button group and renders
   * the required css class
   */
  last: PropTypes.bool,
  /**
   * displays the nubbin at the correct position if true, hidden per default
   */
  nubbin: PropTypes.bool,
  /**
   * position relative to the menu button
   */
  position: PropTypes.oneOf(['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right']),
  /**
   * length of the menu box
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Callback triggered when the Menu Button is clicked. With custom button put it directly on the button
   */
  onMenuClick: PropTypes.func,
};

const ControlledMenu = (props) => {
  const getClasses = () => {
    const { isOpen, last } = props;

    const classes = [
      'slds-dropdown-trigger',
      'slds-dropdown-trigger_click',
      { 'slds-button_last': last },
    ];
    if (!isOpen) {
      return classes;
    }
    return [...classes, 'slds-is-open'];
  };

  const getDropdownClasses = () => {
    const { size, position, className, nubbin } = props;
    const dropdownClasses = [
      'slds-dropdown',
      { [`slds-dropdown_${size}`]: size },
      { 'slds-dropdown_left': position.endsWith('left') },
      { 'slds-dropdown_right': position.endsWith('right') },
      { 'slds-dropdown_bottom': position.startsWith('bottom') },
      { [`slds-nubbin_${position}`]: nubbin },
      className,
    ];
    return dropdownClasses;
  };

  const getButton = () => {
    const { button, customButton, disabled, onMenuClick } = props;

    if (button) {
      const noBorder = button.noBorder;
      const title = button.title;
      const buttonFlavors = [];
      if (button.brand) { buttonFlavors.push('slds-button_brand'); }
      if (button.neutral) { buttonFlavors.push('slds-button_neutral'); }
      if (noBorder && !title) { buttonFlavors.push('slds-button_icon-container'); }
      if (!noBorder && !title) { buttonFlavors.push('slds-button_icon-border-filled'); }
      return (
        <Button
          aria-haspopup="true"
          flavor={button.flavor}
          className={cx(buttonFlavors)}
          disabled={disabled}
          onClick={onMenuClick}
          title={button.title}
          tooltip={button.tooltip}
        >
          <ButtonIcon
            icon={button.icon}
            position={title ? 'right' : undefined}
            sprite={button.sprite}
          />
        </Button>
      );
    }

    return customButton;
  };

  const { children, isOpen } = props;

  const rest = omit(props, Object.keys(propTypes));

  return (
    <div className={cx(getClasses())}>
      {getButton()}
      {isOpen && <div {...rest} className={cx(getDropdownClasses())}>
        {children}
      </div>}
    </div>
  );
};

ControlledMenu.propTypes = propTypes;

ControlledMenu.defaultProps = {
  button: null,
  className: null,
  customButton: null,
  disabled: false,
  isOpen: false,
  last: false,
  nubbin: false,
  position: 'top-left',
  size: 'small',
  onMenuClick: null,
};

export default ControlledMenu;
