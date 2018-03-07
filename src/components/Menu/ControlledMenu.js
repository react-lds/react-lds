import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash/omit';
import { getUniqueHash } from '../../utils';
import MenuItem from './MenuItem';

const propTypes = {
  /**
   * The button that triggers the dropdown menu
   */
  button: PropTypes.element.isRequired,
  /**
   * make true if menuitems should be menuitemcheckboxes
   */
  checkbox: PropTypes.bool,
  /**
   * should be MenuItems or MenuSubHeaders
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * sets the number of items being displayed
   */
  height: PropTypes.oneOf([5, 7, 10]),
  /**
   * use this instead of height if an leftIcon is on every item
   */
  heightIcon: PropTypes.oneOf([5, 7, 10]),
  /**
   * open or closed menu dropdown
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
  /*
   * use onSelect instead of onClick on the MenuItems if you want reduce the number of event listeners
   */
  onSelect: PropTypes.func,
  /**
   * position relative to the menu button
   */
  position: PropTypes.oneOf(['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right']),
  /**
   * render the dropdown even when it is closed
   */
  renderClosedDropdown: PropTypes.bool,
  /**
   * length of the menu box
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

class ControlledMenu extends Component {
  static propTypes = propTypes;

  static defaultProps = {
    className: null,
    checkbox: false,
    height: null,
    heightIcon: null,
    isOpen: false,
    last: false,
    nubbin: false,
    onSelect: null,
    position: 'top-left',
    renderClosedDropdown: false,
    size: 'small',
  };

  getClasses = () => {
    const { isOpen, last } = this.props;

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

  getDropdownClasses = () => {
    const {
      size,
      position,
      className,
      nubbin
    } = this.props;

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

  handleItemClick = (event) => {
    const { onSelect } = this.props;
    const dataValue = event.target.dataset.value;
    if (dataValue) {
      onSelect(dataValue, event);
      event.stopPropagation(); // stopPropagation so we can have nested menus
    }
  };

  renderChildren = () => {
    const { children, checkbox } = this.props;
    return React.Children.map(children, (child, index) => {
      const id = getUniqueHash('item', index);

      if (child.type !== MenuItem) {
        return React.cloneElement(
          child, { key: id }
        );
      }
      return React.cloneElement(
        child, {
          // if checkbox is true then
          // childs selected prop becomes false if it was null, stays true if it was true
          selected: checkbox ? child.props.selected === true : null,
          key: id,
        }
      );
    });
  };

  render() {
    const {
      button,
      height,
      heightIcon,
      isOpen,
      renderClosedDropdown,
      onSelect,
    } = this.props;

    const listClasses = [
      { [`slds-dropdown_length-${height}`]: height },
      { [`slds-dropdown_length-with-icon-${heightIcon}`]: heightIcon },
      'slds-dropdown__list',
    ];

    const rest = omit(this.props, Object.keys(propTypes));

    return (
      <div className={cx(this.getClasses())} {...rest}>
        {button}
        {(isOpen || renderClosedDropdown) && <div className={cx(this.getDropdownClasses())}>
          <ul className={cx(listClasses)} role="menu" onClick={onSelect ? this.handleItemClick : null}>
            {this.renderChildren()}
          </ul>
        </div>}
      </div>
    );
  }
}

export default ControlledMenu;
