import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

import prefixable from './../../decorators/prefixable';
import { Button, ButtonIcon } from 'react-lds';

export class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.classes = ['dropdown-trigger', 'dropdown-trigger--click'];
    this.state = { open: false };

    this.toggle = this.toggle.bind(this);
    this.getClasses = this.getClasses.bind(this);

    this.dropdownClasses = [
      'dropdown',
      { [`dropdown--${this.props.size}`]: this.props.size },
      { 'dropdown--left': this.props.position.endsWith('left') },
      { 'dropdown--right': this.props.position.endsWith('right') },
      { 'dropdown--bottom': this.props.position.startsWith('bottom') },
      { [`nubbin--${this.props.position}`]: this.props.nubbin },
    ];

    this.button = (
      <Button onClick={this.toggle} variation={this.props.button.noBorder ? 'icon-container' : 'icon-border-filled'}>
        <ButtonIcon sprite={this.props.button.sprite} icon={this.props.button.icon} />
      </Button>
    );
  }
  getClasses() {
    if (!this.state.open) {
      return this.classes;
    }

    return [...this.classes, 'is-open'];
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
        {this.button}
        <div className={this.props.prefix(this.dropdownClasses)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  /**
   * One DropdownMenuList or many of them
   */
  children: React.PropTypes.node.isRequired,
  /**
   * The button that triggers the dropdown menu
   */
  button: React.PropTypes.shape({
    icon: React.PropTypes.string.isRequired,
    sprite: React.PropTypes.string.isRequired,
    noBorder: React.PropTypes.bool,
  }).isRequired,
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
};

DropdownMenu.defaultProps = {
  position: 'top-left',
  size: 'small',
  nubbin: false,
};


export default prefixable(enhanceWithClickOutside(DropdownMenu));
