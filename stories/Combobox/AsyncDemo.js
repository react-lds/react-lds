import React, { Component } from 'react';
import { debounce, without } from 'lodash-es';
import { BASE_ITEMS } from './constants';
import { AutoCompleteCombobox } from '../../src';

export class AsyncComboboxDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isOpen: false,
      items: BASE_ITEMS,
      search: '',
      selection: [],
    };

    this.performSearch = debounce(this.performSearch, 300);
  }

  performSearch = () => {
    this.setState({ isLoading: true, items: [] });

    setTimeout(() => {
      this.setState({ isLoading: false, items: BASE_ITEMS });
    }, 1000);
  }

  onSearch = (val) => {
    this.setState({ search: val });
    if (val !== '') this.performSearch(val);
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

  render() {
    const {
      isLoading,
      isOpen,
      items,
      search,
      selection
    } = this.state;

    const selectedItems = selection.map((id) => {
      const existingItem = items.find(item => item.id === id);
      return existingItem || { label: id, id };
    });

    return (
      <AutoCompleteCombobox
        {...this.props}
        isLoading={isLoading}
        isOpen={isOpen}
        items={items}
        onSearch={this.onSearch}
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        search={search}
        selectedItems={selectedItems}
      />
    );
  }
}
