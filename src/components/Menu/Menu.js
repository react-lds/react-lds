import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControlledMenu from './ControlledMenu';

// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#is-it-safe
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
   * menu should start open
   */
  defaultOpen: PropTypes.bool,
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
};

class Menu extends Component {
  static propTypes = propTypes

  static defaultProps = {
    button: null,
    className: null,
    customButton: null,
    defaultOpen: false,
    last: false,
    nubbin: false,
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

    return (
      <ControlledMenu
        {...this.props}
        button={this.getButton()}
        isOpen={open}
        onMenuClick={this.toggle}
      />
    );
  }
}

export default Menu;
