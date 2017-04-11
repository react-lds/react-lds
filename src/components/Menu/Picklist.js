import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import omit from 'lodash.omit';

import { prefixClasses } from '../../utils';
import { DropdownMenu, DropdownMenuList, DropdownMenuListItem, Button, IconSVG } from '../../';

export class Picklist extends React.Component {
  static contextTypes = { cssPrefix: PropTypes.string };

  static propTypes = {
    /**
     * triggered whenever an item was clicked, has the items key as parameter
     */
    callback: PropTypes.func.isRequired,
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * list of displayed items
     * `{key: 'id123', label: 'first entry', selected: false}`
     */
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.any,
      label: PropTypes.string,
      selected: PropTypes.bool,
    })),
    /**
     * label for the button. if a selection is present, you should indicate it
     */
    label: PropTypes.string.isRequired,
  };

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
    return this.props.items.map((item) => {
      const boundClick = this.props.callback.bind(this, item.key);

      return (
        <DropdownMenuListItem
          key={item.key}
          leftIcon={{ icon: 'check', sprite: 'utility' }}
          selected={item.selected}
          onClick={boundClick}
        >
          {item.label}
        </DropdownMenuListItem>
      );
    });
  }

  render() {
    const rest = omit(this.props, Object.keys(Picklist.propTypes));

    return (
      <DropdownMenu {...rest} className={this.props.className} customButton={this.button()} isOpen={this.state.open}>
        <DropdownMenuList>
          {this.menuItems()}
        </DropdownMenuList>
      </DropdownMenu>
    );
  }
}

export default enhanceWithClickOutside(Picklist);
