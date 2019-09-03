import React, { Component } from 'react';
import { debounce, without } from 'lodash-es';
import { BASE_ITEMS } from './constants';
import { EntityCombobox } from '../../src';

const mockSearchResults = BASE_ITEMS.map((item, i) => ({
  ...item,
  isDisabled: i === 2,
  icon: { sprite: 'standard', icon: 'groups' },
  meta: <span>Objects • Standard</span>
}));

export class AsyncComboboxDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      isOpen: false,
      items: mockSearchResults,
      search: '',
      selection: [],
    };

    this.performSearch = debounce(this.performSearch, 300);
  }

  performSearch = () => {
    this.setState({ isLoading: true });
    console.log('Loading new items...'); // eslint-disable-line
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  onSearch = (val) => {
    this.setState({ search: val });
    if (val !== '') this.performSearch(val);
  }

  onSelect = (id, { isAdd, isReplace, isRemove }) => {
    if (isReplace) {
      this.setState({
        selection: [].concat(id),
      });
    } else if (isRemove) {
      this.setState(({ selection: prevSelection }) => ({
        selection: without(prevSelection, id),
      }));
    } else if (!isAdd) {
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

    const selectedItems = selection.map(id => items.find(item => item.id === id));

    return (
      <EntityCombobox
        {...this.props}
        isLoading={isLoading}
        isOpen={isOpen}
        items={isLoading ? [] : items}
        onSearch={this.onSearch}
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        search={search}
        selectedItems={selectedItems}
      />
    );
  }
}
