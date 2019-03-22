import React, { Component } from 'react';
import { without } from 'lodash-es';
import { BASE_ITEMS } from './constants';
import { AutoCompleteCombobox } from '../../src';
import ComboboxGroupedListbox from '../../src/components/Combobox/components/ComboboxGroupedListbox';

export class ExpandableListboxDemo extends Component {
  state = {
    isExpanded: false,
    isOpen: false,
    items: BASE_ITEMS,
    selection: BASE_ITEMS.map(({ id }) => id),
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

  onExpand = () => {
    this.setState({ isExpanded: true });
  }

  onToggle = (nextOpen) => {
    this.setState({ isOpen: nextOpen });
  }

  onSearch = (val) => {
    this.setState({ search: val });
  }

  renderListbox = (listboxProps) => {
    const { isExpanded } = this.state;

    return (
      <ComboboxGroupedListbox
        {...listboxProps}
        isExpanded={isExpanded}
        onExpand={this.onExpand}
      />
    );
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
      <div style={{ maxWidth: '45rem' }}>
        <AutoCompleteCombobox
          isOpen={isOpen}
          items={filteredItems}
          isMultiSelect
          label="Expandable Listbox"
          onSearch={this.onSearch}
          onSelect={this.onSelect}
          onToggle={this.onToggle}
          renderListbox={this.renderListbox}
          search={search}
          selectedItems={selectedItems}
        />
      </div>
    );
  }
}
