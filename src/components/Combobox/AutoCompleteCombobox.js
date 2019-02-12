import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash-es/isEmpty';
import isObject from 'lodash-es/isObject';
import ComboboxCore from './components/ComboboxCore';
import ComboboxListbox from './components/ComboboxListbox';
import { BaseDropdownItem } from './components/DropdownItems';
import { InputRaw } from '../Form';
import { makeInputAddHandler } from './utils/helpers';
import { itemType } from './utils/constants';

export const defaultAutoCompleteComboboxInputRenderer = (inputProps, opts) => {
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
};

export const defaultAutoCompleteComboboxItemRenderer = (_itemProps, opts) => {
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
};

export class AutoCompleteCombobox extends Component {
  static propTypes = {
    /**
     * See `ComboboxCore` or the Storybook stories for more information
     */
    closeOnSelect: PropTypes.bool,
    comboboxClassName: PropTypes.string,
    error: PropTypes.string,
    height: PropTypes.oneOf([5, 7, 10]),
    id: PropTypes.string.isRequired,
    isErrorHidden: PropTypes.bool,
    isLoading: PropTypes.bool,
    isMultiSelect: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool,
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
    error: null,
    height: 5,
    isErrorHidden: false,
    isLoading: false,
    isMultiSelect: false,
    isRequired: false,
    items: [],
    labelListbox: null,
    renderInput: defaultAutoCompleteComboboxInputRenderer,
    renderItem: defaultAutoCompleteComboboxItemRenderer,
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
