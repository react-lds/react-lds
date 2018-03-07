import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import ControlledMenu from './ControlledMenu';

// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#is-it-safe
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
   * menu should start open
   */
  defaultOpen: PropTypes.bool,
  /**
   * sets the number of items being displayed
   */
  height: PropTypes.oneOf([5, 7, 10]),
  /**
   * use this instead of height if an leftIcon is on every item
   */
  heightIcon: PropTypes.oneOf([5, 7, 10]),
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
   * length of the menu box
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

class Menu extends Component {
  static propTypes = propTypes

  static defaultProps = {
    button: null,
    checkbox: false,
    className: null,
    defaultOpen: false,
    height: null,
    heightIcon: null,
    last: false,
    nubbin: false,
    onSelect: null,
    position: 'top-left',
    size: 'small',
  }

  constructor(props, { cssPrefix }) {
    super(props, { cssPrefix });
    this.state = { open: this.props.defaultOpen };
  }

  getButton = () => {
    const { button } = this.props;
    return React.cloneElement(button, { onClick: this.toggle });
  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const rest = omit(this.props, ['button', 'defaultOpen']);
    return (
      <ControlledMenu
        {...rest}
        button={this.getButton()}
        isOpen={open}
      />
    );
  }
}

export default Menu;
