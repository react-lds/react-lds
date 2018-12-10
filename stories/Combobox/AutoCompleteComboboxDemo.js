import React, { Component } from 'react';
import { without } from 'lodash-es';
import { BASE_ITEMS } from './constants';
import { AutoCompleteCombobox } from '../../src';

export class AutoCompleteComboboxDemo extends Component {
  static getDerivedStateFromProps = (props, state) => {
    const { isMultiSelect } = props;
    const { selection } = state;
    if (!isMultiSelect && selection.length > 1) return { selection: [].concat(selection[0]) };
    return null;
  }

  state = {
    isOpen: false,
    items: BASE_ITEMS,
    selection: [],
    search: '',
  }

  onSelect = (id, { isReplace, isRemove }) => {
    if (isReplace) {
      this.setState({
        selection: [].concat(id),
      });
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

  onToggle = (nextOpen) => {
    this.setState({ isOpen: nextOpen });
  }

  onSearch = (val) => {
    this.setState({ search: val });
  }

  render() {
    const {
      isOpen,
      items,
      search,
      selection,
    } = this.state;

    const filteredItems = search.length < 2
      ? items
      : items.filter(({ isHeader, label }) => isHeader || label.toLowerCase().includes(search.toLowerCase()));

    const selectedItems = selection.map((id) => {
      const existingItem = items.find(item => item.id === id);
      return existingItem || { label: id, id };
    });

    return (
      <AutoCompleteCombobox
        {...this.props}
        isOpen={isOpen}
        items={filteredItems}
        onSearch={this.onSearch}
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        search={search}
        selectedItems={selectedItems}
      />
    );
  }
}
