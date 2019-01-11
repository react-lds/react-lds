import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash-es/isEmpty';
import isObject from 'lodash-es/isObject';
import { ComboboxCore, BaseDropdownItem, ComboboxListbox } from './components';
import { InputRaw } from '../Form';
import { makeInputAddHandler } from './utils/helpers';
import { itemType } from './utils/constants';

class AutoCompleteCombobox extends Component {
  static propTypes = {
    /**
     * See `ComboboxCore` or the Storybook stories for more information
     */
    closeOnSelect: PropTypes.bool,
    comboboxClassName: PropTypes.string,
    height: PropTypes.oneOf([5, 7, 10]),
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    isMultiSelect: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(itemType),
    label: PropTypes.string.isRequired,
    labelListbox: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    renderInput: PropTypes.func,
    renderItem: PropTypes.func,
    renderItemsAppended: PropTypes.func,
    renderItemsPrepended: PropTypes.func,
    renderListbox: PropTypes.func,
    search: PropTypes.string,
    selectedItems: PropTypes.arrayOf(itemType),
  }

  static defaultProps = {
    closeOnSelect: true,
    comboboxClassName: null,
    height: 5,
    isLoading: false,
    isMultiSelect: false,
    items: [],
    labelListbox: null,
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
      } else if (!isMultiSelect && len === 0 && !!keyboardSelection) {
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
    },
    renderItemsAppended: null,
    renderItemsPrepended: null,
    renderListbox: listboxProps => <ComboboxListbox {...listboxProps} />,
    search: '',
    selectedItems: [],
  }

  onSearch = (input) => {
    const { onSearch } = this.props;
    const val = isObject(input) ? input.target.value : input;
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
        onSearch={this.onSearch}
        onSelect={this.onSelect}
      />
    );
  }
}

export default AutoCompleteCombobox;
