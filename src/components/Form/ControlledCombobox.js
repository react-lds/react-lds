import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import uniqueId from 'lodash/uniqueId';

import Combobox, { propTypes } from './Combobox';

export default class ControlledCombobox extends Component {
  static propTypes = {
    /**
     * unique element id
     */
    id: PropTypes.string.isRequired,

    ...omit(propTypes, ['onAdd', 'onSelect'])
  };

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
    const { id } = this.props;
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

    this.dispatchChange(nextItems);
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  onSelect = (itemKey) => {
    const { items } = this.state;

    const itemIndex = items.findIndex(({ key }) => key === itemKey);

    if (itemIndex !== -1) {
      const nextItem = { ...items[itemIndex] };
      nextItem.selected = !nextItem.selected;

      const nextItems = [...items];
      nextItems[itemIndex] = nextItem;

      this.setState({ items: nextItems });

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
      <Combobox
        {...rest}
        onAdd={this.onAdd}
        onChange={this.onChange}
        onSelect={this.onSelect}
        items={items}
        value={value}
      />
    );
  }
}
