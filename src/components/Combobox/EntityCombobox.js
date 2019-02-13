import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash-es/isEmpty';
import isObject from 'lodash-es/isObject';
import { InputRaw } from '../Form';
import { Icon } from '../Icon';
import ComboboxCore from './components/ComboboxCore';
import ComboboxListbox from './components/ComboboxListbox';
import { EntityDropdownItem, SearchIndicatorDropdownItem } from './components/DropdownItems';
import { itemTypeEntity } from './utils/constants';
import { makeInputAddHandler } from './utils/helpers';

export const defaultEntityComboboxInputRenderer = (inputProps, opts) => {
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
};

export const defaultEntityComboboxItemRenderer = ({ id, ...resultProps }, opts) => {
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
};

export class EntityCombobox extends Component {
  static propTypes = {
    /**
     * See `ComboboxCore` or the Storybook stories for more information
     */
    closeOnSelect: PropTypes.bool,
    comboboxClassName: PropTypes.string,
    error: PropTypes.string,
    height: PropTypes.oneOf([5, 7, 10]),
    hideErrorMessage: PropTypes.bool,
    hideLabel: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    isMultiSelect: PropTypes.bool,
    isRequired: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.node.isRequired,
    labelListbox: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    renderInput: PropTypes.func,
    renderItem: PropTypes.func,
    renderItemsAppended: PropTypes.func,
    renderItemsPrepended: PropTypes.func,
    renderListbox: PropTypes.func,
    search: PropTypes.string,
    items: PropTypes.arrayOf(itemTypeEntity),
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedItems: PropTypes.arrayOf(itemTypeEntity),
  }

  static defaultProps = {
    closeOnSelect: true,
    comboboxClassName: null,
    error: null,
    height: 5,
    hideErrorMessage: false,
    hideLabel: false,
    isLoading: false,
    isMultiSelect: false,
    isRequired: false,
    items: [],
    labelListbox: undefined,
    renderInput: defaultEntityComboboxInputRenderer,
    renderItem: defaultEntityComboboxItemRenderer,
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

  renderSearchIndicator = () => {
    const { renderItemsPrepended, search } = this.props;
    if (search.trim().length < 2) return null;
    return (
      <React.Fragment>
        {renderItemsPrepended && renderItemsPrepended()}
        <SearchIndicatorDropdownItem search={search} />
      </React.Fragment>
    );
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
