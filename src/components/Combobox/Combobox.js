import React, { Component } from 'react';
import uniqueId from 'lodash-es/uniqueId';

import ControlledCombobox, { propTypes } from './ControlledCombobox';

export default class Combobox extends Component {
  static propTypes = { ...propTypes };

  state = {
    items: [],
    value: '',
  };

  componentWillReceiveProps({ items: nextItems }) {
    const { items: prevItems } = this.state;

    if (nextItems !== prevItems) {
      this.setState({ items: nextItems });
    }
  }

  onAdd = (value) => {
    const { id, onAdd } = this.props;
    const { items } = this.state;

    const nextItems = [...items, {
      key: uniqueId(`${id}`),
      label: value,
      selected: true
    }];

    this.setState({
      items: nextItems,
      value: undefined,
    });

    if (onAdd) onAdd(value);

    this.dispatchChange(nextItems);
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  onSelect = (itemKey) => {
    const { onSelect } = this.props;
    const { items } = this.state;

    const itemIndex = items.findIndex(({ key }) => key === itemKey);

    if (itemIndex !== -1) {
      const nextItem = { ...items[itemIndex] };
      nextItem.selected = !nextItem.selected;

      const nextItems = [...items];
      nextItems[itemIndex] = nextItem;

      this.setState({ items: nextItems });

      if (onSelect) onSelect(itemKey);

      this.dispatchChange(nextItems);
    }
  }

  dispatchChange(items) {
    const { onChange } = this.props;

    if (onChange) {
      onChange(items);
    }
  }

  render() {
    const { ...rest } = this.props;

    const { items, value } = this.state;

    return (
      <ControlledCombobox
        {...rest}
        items={items}
        onAdd={this.onAdd}
        onChange={this.onChange}
        onSelect={this.onSelect}
        value={value}
      />
    );
  }
}
