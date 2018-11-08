import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash-es/omit';
import { getUniqueHash } from '../../utils';
import MenuItem from './MenuItem';

const propTypes = {
  /**
   * The button that triggers the dropdown menu
   */
  button: PropTypes.element.isRequired,
  /**
   * set to true if menuitems should be menuitemcheckboxes
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
   * sets the number of items being displayed. 5, 7, or 10
   */
  height: PropTypes.oneOf([5, 7, 10]),
  /**
   * use this instead of height if an leftIcon is on every item. 5, 7, or 10
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
  /**
   * use onSelect instead of onClick on the MenuItems if you want reduce the number of event listeners
   */
  onSelect: PropTypes.func,
  /**
   * position relative to the menu button
   */
  position: PropTypes.oneOf([
    'top-left',
    'top-left-corner',
    'top',
    'top-right',
    'top-right-corner',
    'bottom-left',
    'bottom-left-corner',
    'bottom',
    'bottom-right',
    'bottom-right-corner',
  ]),
  /**
   * render the dropdown even when it is closed
   */
  renderClosedDropdown: PropTypes.bool,
  /**
   * Can be used to prepend an arbitrary menu header
   */
  renderHeader: PropTypes.func,
  /**
   * length of the menu box. 'small', 'medium', or 'large'
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
    renderHeader: null,
    renderClosedDropdown: false,
    size: 'small',
  };

  handleItemClick = (event) => {
    const { onSelect } = this.props;
    const { value } = event.target.dataset;
    if (value) {
      onSelect(value, event);
      event.stopPropagation(); // stopPropagation so we can have nested menus
    }
  };

  renderChildren = () => {
    const { children, checkbox } = this.props;
    return React.Children.map(children, (child, index) => {
      const id = getUniqueHash('item', index);

      if (!child) return null;

      if (child.type !== MenuItem) {
        return React.cloneElement(child, {
          key: id
        });
      }

      return React.cloneElement(
        child, {
          selected: checkbox ? child.props.selected === true : null,
          key: id,
        }
      );
    });
  };

  render() {
    const {
      button,
      children,
      className,
      height,
      heightIcon,
      isOpen,
      last,
      nubbin,
      onSelect,
      position,
      renderClosedDropdown,
      renderHeader,
      size,
    } = this.props;

    const wrapperClasses = [
      'slds-dropdown-trigger',
      'slds-dropdown-trigger_click',
      { 'slds-button_last': last },
      { 'slds-is-open': isOpen },
    ];

    const dropdownClasses = [
      'slds-dropdown',
      { [`slds-dropdown_${size}`]: size },
      { 'slds-dropdown_left': position.includes('left') },
      { 'slds-dropdown_right': position.includes('right') },
      { 'slds-dropdown_bottom': position.startsWith('bottom') },
      { [`slds-nubbin_${position}`]: nubbin },
      className,
    ];

    const listClasses = [
      { [`slds-dropdown_length-${height}`]: height },
      { [`slds-dropdown_length-with-icon-${heightIcon}`]: heightIcon },
      'slds-dropdown__list',
    ];

    const rest = omit(this.props, Object.keys(propTypes));

    return (
      <div className={cx(wrapperClasses)} {...rest}>
        {button}
        {(isOpen || renderClosedDropdown) && (
          <div className={cx(dropdownClasses)}>
            {renderHeader && renderHeader()}
            {children && (
              <ul
                className={cx(listClasses)}
                role="menu"
                onClick={onSelect ? this.handleItemClick : null}
              >
                {this.renderChildren()}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ControlledMenu;
