import React, { Component } from 'react';
import { without } from 'lodash-es';
import { BASE_ITEMS } from './constants';
import { BaseCombobox } from '../../src';

const mockItems = BASE_ITEMS.map((item, i) => ({
  ...item,
  ...i === 2 ? { isDisabled: true } : null,
}));

export class BaseComboboxDemo extends Component {
  static getDerivedStateFromProps = (props, state) => {
    const { isMultiSelect } = props;
    const { selection } = state;
    if (!isMultiSelect && selection.length > 1) return { selection: [].concat(selection[0]) };
    return null;
  }

  state = {
    isOpen: false,
    items: mockItems,
    selection: [],
  }

  onToggle = (nextOpen) => {
    this.setState({ isOpen: nextOpen });
  }

  onSelect = (id, { isReplace, isRemove }) => {
    if (isReplace) {
      this.setState({ selection: [].concat(id) });
    } else if (isRemove) {
      this.setState(({ selection: prevSelection }) => ({
        selection: without(prevSelection, id),
      }));
    } else {
      this.setState(({ selection: prevSelection }) => ({
        selection: [...prevSelection, id],
      }));
    }
  }

  render() {
    const { isOpen, items, selection } = this.state;

    const selectedItems = selection.map(id => items.find(x => x.id === id));

    return (
      <BaseCombobox
        {...this.props}
        isOpen={isOpen}
        items={items}
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        selectedItems={selectedItems}
      />
    );
  }
}
