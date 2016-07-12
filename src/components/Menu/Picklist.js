import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

import { DropdownMenu, DropdownMenuList, DropdownMenuListItem, Button, IconSVG } from '../../index';

export class Picklist extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.button = this.button.bind(this);
    this.menuItems = this.menuItems.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  button() {
    return (
      <Button variation="neutral" onClick={this.toggle} isPicklistLabel>
        <span className="slds-prefix">{this.props.label}</span>
        <IconSVG sprite="utility" icon="down" />
      </Button>
    );
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  menuItems() {
    return this.props.items.map(item => {
      const boundClick = this.props.callback.bind(this, item.key);

      return (
        <DropdownMenuListItem
          key={item.key}
          leftIcon={{ icon: 'check', sprite: 'utility' }}
          isSelected={item.isSelected}
          onClick={boundClick}
        >
          {item.label}
        </DropdownMenuListItem>
      );
    });
  }

  render() {
    return (
      <DropdownMenu customButton={this.button()} isOpen={this.state.open}>
        <DropdownMenuList>
          {this.menuItems()}
        </DropdownMenuList>
      </DropdownMenu>
    );
  }
}

Picklist.propTypes = {
  /**
   * String that get's displayed on the button, if something was selected, you
   * should render a text that indicates this
   */
  label: React.PropTypes.string.isRequired,
  /**
   * triggered whenever an item was clicked, has the items key as parameter
   */
  callback: React.PropTypes.func.isRequired,
  /**
   * list of items that get's displayed
   * `{key: 'id123', label: 'first entry', isSelected: false}`
   */
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.any,
    label: React.PropTypes.string,
    isSelected: React.PropTypes.bool,
  })),
};

export default enhanceWithClickOutside(Picklist);
