import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash-es/isEmpty';
import { ComboboxCore, BaseDropdownItem } from './components';
import { InputRaw } from '../Form';
import { makeInputAddHandler } from './utils/helpers';

class AutoCompleteCombobox extends Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    renderInput: PropTypes.func,
    renderItem: PropTypes.func,
    search: PropTypes.string,
  }

  static defaultProps = {
    search: '',
    renderInput: (inputProps, opts) => {
      const { onKeyDown, value, ...rest } = inputProps;
      const {
        keyboardSelection,
        items,
        isMultiSelect,
        makeSelectHandler,
        selectedItems,
      } = opts;

      const len = selectedItems.length;
      const hasSingleSelection = !isMultiSelect && len === 1;

      let inputValue = value;
      let activeId = null;

      if (hasSingleSelection) {
        const selectedItem = selectedItems[0];
        const { id, label } = selectedItem;
        inputValue = label;
        activeId = id;
      } else if (!isMultiSelect && len === 0 && keyboardSelection) {
        const activeItem = items.find(item => item.id === keyboardSelection);
        if (activeItem) {
          const { id, label } = activeItem;
          inputValue = label;
          activeId = id;
        }
      }

      return (
        <InputRaw
          {...rest}
          aria-activedescendant={!hasSingleSelection && activeId ? activeId : null}
          aria-autocomplete="list"
          iconRight={hasSingleSelection ? 'clear' : 'search'}
          iconRightOnClick={hasSingleSelection ? makeSelectHandler(activeId) : null}
          onKeyDown={makeInputAddHandler(onKeyDown, opts)}
          readOnly={hasSingleSelection}
          value={inputValue}
        />
      );
    },
    renderItem: (_itemProps, opts) => {
      const { makeSelectHandler, search, selectedItems } = opts;
      const { id, ...itemProps } = _itemProps;

      const autocompleteResultProps = {
        ...itemProps,
        isMultiSelect: !isEmpty(selectedItems),
        key: id,
        id,
        onSelect: makeSelectHandler(id),
        highlight: search,
      };

      return <BaseDropdownItem {...autocompleteResultProps} />;
    }
  }

  onSearch = (input, isEvent = true) => {
    const { onSearch } = this.props;
    const val = isEvent ? input.target.value : input;
    onSearch(val, { isClear: false });
  }

  onSelect = (id, opts) => {
    const { onSearch, onSelect } = this.props;
    onSelect(id, opts);
    onSearch('', { isClear: true });
  }

  render() {
    return (
      <ComboboxCore
        {...this.props}
        closeOnSelect
        onSearch={this.onSearch}
        onSelect={this.onSelect}
      />
    );
  }
}

export default AutoCompleteCombobox;
