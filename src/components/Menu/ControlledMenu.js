import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash/omit';
import { getUniqueHash } from '../../utils';

const propTypes = {
  /**
   * The button that triggers the dropdown menu
   */
  button: PropTypes.element.isRequired,
  /**
   * should be MenuItems or MenuSubHeaders
   */
  children: PropTypes.node.isRequired,
  /**
   * class name
   */
  className: PropTypes.string,
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
   * position relative to the menu button
   */
  position: PropTypes.oneOf(['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right']),
  /**
   * length of the menu box
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * sets the number of items being displayed
   */
  height: PropTypes.oneOf([5, 7, 10]),
  /**
   * use this instead of height if an leftIcon is on every item
   */
  heightIcon: PropTypes.oneOf([5, 7, 10]),
  /**
   * make true if menuitems should be menuitemcheckboxes
   */
  checkbox: PropTypes.bool,
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

  const { children, checkbox, button, isOpen, height, heightIcon } = props;

  const renderChildren = () =>
    children.map((child, i) => {
      const id = getUniqueHash('item', i);
      return React.cloneElement(
        child, {
          selected: checkbox ? child.props.selected === true : null,
          // with this we set the selected prop to true or false (no undef or null)
          // so that the child becomes a menuitemcheckbox (not menuitem)
          key: id,
          id: i,
        }
      );
    });

  const handleItemClick = (event) => {
    const index = event.target.id;
    if (index) {
      children[index].props.onClick();
    }
    event.stopPropagation(); // stopPropagation so we can have nested menus
  };

  const listClasses = [
    { [`slds-dropdown_length-${height}`]: height },
    { [`slds-dropdown_length-with-icon-${heightIcon}`]: heightIcon },
    'slds-dropdown__list',
  ];

  const rest = omit(props, Object.keys(propTypes));

  return (
    <div className={cx(getClasses())}>
      {button}
      {isOpen && <div {...rest} className={cx(getDropdownClasses())}>
        <ul className={cx(listClasses)} role="menu" onClick={handleItemClick}>
          {renderChildren()}
        </ul>
      </div>}
    </div>
  );
};

ControlledMenu.propTypes = propTypes;

ControlledMenu.defaultProps = {
  className: null,
  checkbox: false,
  isOpen: false,
  last: false,
  nubbin: false,
  position: 'top-left',
  size: 'small',
  onMenuClick: null,
  height: null,
  heightIcon: null,
};

export default ControlledMenu;
