import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash-es/omit';

import ControlledMenu from './ControlledMenu';
import { ClickOutside } from '../ClickOutside';

// https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#is-it-safe
const propTypes = {
  /**
   * The button that triggers the dropdown menu
   */
  button: PropTypes.element.isRequired,
  /**
  * indicates if the menu closes automatically on an outside click
  */
  closeOnClickOutside: PropTypes.bool,
  /**
   * menu should start open
   */
  defaultOpen: PropTypes.bool,
  /**
   * Called when menu is opened/closed
   */
  onToggle: PropTypes.func,
};

export class MenuRaw extends Component {
  static propTypes = propTypes

  static defaultProps = {
    closeOnClickOutside: false,
    defaultOpen: false,
    onToggle: Function.prototype,
  }

  constructor(props) {
    super(props);
    const { defaultOpen } = this.props;
    this.state = { open: defaultOpen };
  }

  onClickOutside = () => this.setState({ open: false });

  getButton = () => {
    const { button } = this.props;
    return React.cloneElement(button, { onClick: this.toggle });
  }

  toggle = () => {
    const { onToggle } = this.props;

    onToggle(!this.state.open);
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { closeOnClickOutside } = this.props;
    const { open } = this.state;
    const rest = omit(this.props, ['button', 'defaultOpen', 'closeOnClickOutside']);
    const condition = closeOnClickOutside && open;

    return (
      <ClickOutside onClickOutside={this.onClickOutside} condition={condition}>
        <ControlledMenu
          {...rest}
          button={this.getButton()}
          isOpen={open}
        />
      </ClickOutside>
    );
  }
}

const Menu = props => <MenuRaw closeOnClickOutside {...props} />;

export default Menu;
