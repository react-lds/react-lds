import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash-es/isEmpty';
import { EntityDropdownItem, SearchIndicatorDropdownItem } from './components/DropdownItems';
import { InputRaw } from '../Form';
import { Icon } from '../Icon';
import { ComboboxCore } from './components';
import { itemTypeEntity } from './utils/constants';
import { makeInputAddHandler } from './utils/helpers';

class EntityCombobox extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(itemTypeEntity),
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    renderInput: PropTypes.func,
    renderItem: PropTypes.func,
    selectedItems: PropTypes.arrayOf(itemTypeEntity),
  }

  static defaultProps = {
    items: [],
    renderInput: (inputProps, opts) => {
      const { isMultiSelect, makeSelectHandler, selectedItems } = opts;
      const { onKeyDown, value, ...rest } = inputProps;

      const len = selectedItems.length;
      const hasSingleSelection = !isMultiSelect && len === 1;

      let inputValue = value;
      let activeId = null;
      let selectedItem;

      if (hasSingleSelection) {
        [selectedItem] = selectedItems;
        const { id, label } = selectedItem;
        inputValue = label;
        activeId = id;
      }

      return (
        <InputRaw
          {...rest}
          aria-activedescendant={!hasSingleSelection && activeId ? activeId : null}
          aria-autocomplete="list"
          className="slds-input slds-combobox__input slds-combobox__input-value"
          iconLeft={selectedItem && (
            <Icon
              className="slds-combobox__input-entity-icon"
              icon={selectedItem.icon.icon}
              sprite={selectedItem.icon.sprite}
            />
          )}
          iconRight={hasSingleSelection ? 'clear' : 'search'}
          iconRightOnClick={hasSingleSelection ? makeSelectHandler(activeId) : null}
          onKeyDown={makeInputAddHandler(onKeyDown, opts)}
          readOnly={hasSingleSelection}
          value={inputValue}
        />
      );
    },
    renderItem: ({ id, ...resultProps }, opts) => {
      const { makeSelectHandler, search, selectedItems } = opts;

      return (
        <EntityDropdownItem
          {...resultProps}
          highlight={search}
          isMultiSelect={!isEmpty(selectedItems)}
          key={id}
          id={id}
          onSelect={makeSelectHandler(id)}
        />
      );
    },
    selectedItems: [],
  }

  onSearch = (input, isEvent = true) => {
    const { onSearch } = this.props;
    const val = isEvent ? input.target.value : input;
    onSearch(val, { isClear: false });
  }

  onSelect = (id, opts) => {
    const {
      closeOnSelect,
      onSearch,
      onSelect,
    } = this.props;

    onSelect(id, opts);
    if (closeOnSelect) onSearch('', { isClear: true });
  }

  renderSearchIndicator = () => {
    const { search } = this.props;
    if (search.trim().length < 2) return null;
    return <SearchIndicatorDropdownItem search={search} />;
  }

  render() {
    return (
      <ComboboxCore
        {...this.props}
        isInlineListboxSelection
        onSelect={this.onSelect}
        onSearch={this.onSearch}
        renderItemsPrepended={this.renderSearchIndicator}
      />
    );
  }
}

export default EntityCombobox;
