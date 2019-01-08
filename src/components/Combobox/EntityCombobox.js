import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash-es/isEmpty';
import { DropdownItemEntity, DropdownItemSearch } from './components/DropdownItems';
import { InputRaw } from '../Form';
import { Icon } from '../Icon';
import { ComboboxCore } from './components';

class EntityCombobox extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    search: PropTypes.string,
  }

  static defaultProps = {
    search: '',
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

    if (closeOnSelect) {
      onSearch('', { isClear: true });
    }
  }

  renderSearchIndicator = () => {
    const { search } = this.props;
    if (search.trim().length < 2) return null;
    return <DropdownItemSearch search={search} />;
  }

  renderItem = ({ id, ...resultProps }, opts) => {
    const { renderItem, search } = this.props;
    if (renderItem) return renderItem(resultProps, opts);

    const { makeSelectHandler, selectedItems } = opts;

    return (
      <DropdownItemEntity
        {...resultProps}
        highlight={search}
        isMultiSelect={!isEmpty(selectedItems)}
        key={id}
        id={id}
        onSelect={makeSelectHandler(id)}
      />
    );
  }

  renderInput = (inputProps, opts) => {
    const { isMultiSelect, search } = this.props;
    const { keyboardSelection, makeSelectHandler, selectedItems } = opts;

    const len = selectedItems.length;
    const hasSingleSelection = !isMultiSelect && len === 1;

    let inputValue = search;
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
        {...inputProps}
        aria-activedescendant={!hasSingleSelection && activeId
          ? activeId
          : null
        }
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
        onKeyDown={this.makeOnInputKeyDown(inputProps.onKeyDown, keyboardSelection)}
        readOnly={hasSingleSelection}
        value={inputValue}
      />
    );
  }

  renderItem = ({ id, ...resultProps }, opts) => {
    const { renderItem, search } = this.props;
    const { makeSelectHandler, selectedItems } = opts;

    const entityResultProps = {
      ...resultProps,
      isMultiSelect: !isEmpty(selectedItems),
      key: id,
      id,
      onSelect: makeSelectHandler(id),
      highlight: search,
    };

    if (renderItem) return renderItem(entityResultProps, opts);
    return <DropdownItemEntity {...entityResultProps} />;
  }

  render() {
    const { search, ...rest } = this.props;

    return (
      <ComboboxCore
        {...rest}
        isInlineListboxSelection
        onSelect={this.onSelect}
        onSearch={this.onSearch}
        renderInput={this.renderInput}
        renderItem={this.renderItem}
        renderItemsPrepended={this.renderSearchIndicator}
      />
    );
  }
}

export default EntityCombobox;
