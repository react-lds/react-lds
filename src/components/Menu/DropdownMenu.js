import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

import prefixable from './../../decorators/prefixable';
import { Button, ButtonIcon } from '../../index';

export class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.classes = [
      'dropdown-trigger',
      'dropdown-trigger--click',
      { 'button--last': this.props.last },
    ];
    this.state = { open: this.props.isOpen };

    this.toggle = this.toggle.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.button = this.button.bind(this);

    this.dropdownClasses = [
      'dropdown',
      { [`dropdown--${this.props.size}`]: this.props.size },
      { 'dropdown--left': this.props.position.endsWith('left') },
      { 'dropdown--right': this.props.position.endsWith('right') },
      { 'dropdown--bottom': this.props.position.startsWith('bottom') },
      { [`nubbin--${this.props.position}`]: this.props.nubbin },
    ];
  }

  getClasses() {
    if (!this.props.isOpen && !this.state.open) {
      return this.classes;
    }

    return [...this.classes, 'is-open'];
  }

  button() {
    if (this.props.button) {
      return (
        <Button
          onClick={this.toggle}
          variation={this.props.button.noBorder ? 'icon-container' : 'icon-border-filled'}
          disabled={this.props.disabled}
        >
          <ButtonIcon sprite={this.props.button.sprite} icon={this.props.button.icon} />
        </Button>
      );
    }

    return this.props.customButton;
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className={this.props.prefix(this.getClasses())}>
        {this.button()}
        <div className={this.props.prefix(this.dropdownClasses)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DropdownMenu.defaultProps = {
  isOpen: false,
};

DropdownMenu.propTypes = {
  /**
   * One DropdownMenuList or many of them
   */
  children: React.PropTypes.node.isRequired,
  /**
   * force open or closed state, is needed when using a custom button
   */
  isOpen: React.PropTypes.bool,
  /**
   * The button that triggers the dropdown menu
   * ```
   * {
   *    icon: 'settings',
   *    sprite: 'utility',
   *    noBorder: true,
   * }
   * ```
   */
  button: React.PropTypes.shape({
    icon: React.PropTypes.string.isRequired,
    sprite: React.PropTypes.string.isRequired,
    noBorder: React.PropTypes.bool,
  }),
  /**
   * Fully customizable dropdown trigger button, use this instead of the button
   * shape if needed
   */
  customButton: React.PropTypes.element,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * position relative to the menu button
   */
  position: React.PropTypes.oneOf(['top-left', 'top', 'top-right', 'bottom-left', 'bototm', 'bottom-right']),
  /**
   * length of the menu box
   */
  size: React.PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * displays the nubbin at the correct position if true, hidden per default
   */
  nubbin: React.PropTypes.bool,
  /**
   * indicates that this is the last element inside a button group and renders
   * the required css class
   */
  last: React.PropTypes.bool,
  /**
   * menu button in disabled state
   */
  disabled: React.PropTypes.bool,
};

DropdownMenu.defaultProps = {
  position: 'top-left',
  size: 'small',
  nubbin: false,
};


export default prefixable(enhanceWithClickOutside(DropdownMenu));
