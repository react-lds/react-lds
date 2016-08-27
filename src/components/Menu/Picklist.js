import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

import { prefixClasses } from '../../utils';
import { DropdownMenu, DropdownMenuList, DropdownMenuListItem, Button, IconSVG } from '../../index';

export class Picklist extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { open: false };

    this.prefix = (classes, passThrough) => prefixClasses(this.context.cssPrefix, classes, passThrough);
    this.toggle = this.toggle.bind(this);
  }

  button() {
    return (
      <Button className={this.prefix('picklist__label')} neutral onClick={this.toggle}>
        <span className={this.prefix('prefix')}>{this.props.label}</span>
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

Picklist.contextTypes = {
  /**
   * the css prefix
   */
  cssPrefix: React.PropTypes.string,
};

Picklist.propTypes = {
  /**
   * triggered whenever an item was clicked, has the items key as parameter
   */
  callback: React.PropTypes.func.isRequired,
  /**
   * list of displayed items
   * `{key: 'id123', label: 'first entry', isSelected: false}`
   */
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.any,
    label: React.PropTypes.string,
    isSelected: React.PropTypes.bool,
  })),
  /**
   * label for the button. if a selection is present, you should indicate it
   */
  label: React.PropTypes.string.isRequired,
};

export default enhanceWithClickOutside(Picklist);
