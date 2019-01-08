import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash-es/isEmpty';
import { ComboboxCore, DropdownItemBase } from './components';
import { InputRaw } from '../Form';

class AutoCompleteCombobox extends Component {
  static propTypes = {
    closeOnSelect: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    search: PropTypes.string,
  }

  static defaultProps = {
    closeOnSelect: true,
    search: '',
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

  makeOnInputKeyDown = (originalHandler, keyboardSelection) => {
    const {
      isOpen,
      onToggle,
      search,
      selectedItems,
    } = this.props;

    return (evt) => {
      const { key } = evt;

      const isKeyboardAdd = isOpen
        && search !== ''
        && !keyboardSelection
        && key === 'Enter';

      if (isKeyboardAdd) {
        this.onSelect(search, {
          isAdd: true,
          isReplace: selectedItems.length > 1,
          isRemove: false,
        });

        onToggle(false);
        return true;
      }

      return originalHandler(evt);
    };
  }

  renderInput = (inputProps, opts) => {
    const { renderInput, search } = this.props;
    if (renderInput) return renderInput(inputProps, opts);

    const {
      keyboardSelection,
      items,
      isMultiSelect,
      makeSelectHandler,
      selectedItems,
    } = opts;

    const len = selectedItems.length;

    const hasSingleSelection = !isMultiSelect && len === 1;

    let inputValue = search;
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
        {...inputProps}
        aria-activedescendant={!hasSingleSelection && activeId
          ? activeId
          : null
        }
        aria-autocomplete="list"
        iconRight={hasSingleSelection ? 'clear' : 'search'}
        iconRightOnClick={hasSingleSelection ? makeSelectHandler(activeId) : null}
        onKeyDown={this.makeOnInputKeyDown(inputProps.onKeyDown, keyboardSelection)}
        readOnly={hasSingleSelection}
        value={inputValue}
      />
    );
  }

  renderItem = ({ id, ...resultProps }, opts) => {
    const { renderItem, search } = this.props;
    const { makeSelectHandler, selectedItems } = opts;

    const autocompleteResultProps = {
      ...resultProps,
      isMultiSelect: !isEmpty(selectedItems),
      key: id,
      id,
      onSelect: makeSelectHandler(id),
      highlight: search,
    };

    if (renderItem) return renderItem(autocompleteResultProps, opts);
    return <DropdownItemBase {...autocompleteResultProps} />;
  }

  render() {
    const { closeOnSelect, search, ...rest } = this.props;

    return (
      <ComboboxCore
        {...rest}
        closeOnSelect={closeOnSelect}
        renderInput={this.renderInput}
        renderItem={this.renderItem}
        onSearch={this.onSearch}
        onSelect={this.onSelect}
      />
    );
  }
}

export default AutoCompleteCombobox;
