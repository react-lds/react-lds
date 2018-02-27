import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash/omit';
import ControlledMenu from './ControlledMenu';

// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#is-it-safe
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
   * one MenuList or many of them
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
};

class Menu extends Component {
  static propTypes = propTypes

  static defaultProps = {
    button: null,
    className: null,
    customButton: null,
    disabled: false,
    isOpen: false,
    last: false,
    nubbin: false,
    position: 'top-left',
    size: 'small',
  }

  constructor(props, { cssPrefix }) {
    super(props, { cssPrefix });
    this.state = { open: this.props.isOpen };
  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  render() {
    const { children, className, last, position, nubbin, size } = this.props;

    const rest = omit(this.props, Object.keys(propTypes));

    return (
      <ControlledMenu>
        {children}
      </ControlledMenu>
    );
  }
}

export default Menu;
