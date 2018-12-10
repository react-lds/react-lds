import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash-es/isEmpty';
import AutoCompleteCombobox from './AutocompleteCombobox';
import { DropdownItemEntity, DropdownItemSearch } from './components/DropdownItems';
import { InputRaw } from '../Form';
import { Icon } from '../Icon';

class EntityCombobox extends Component {
  static propTypes = {
    search: PropTypes.string,
  }

  static defaultProps = {
    search: '',
  }

  renderSearchIndicator = () => {
    const { search } = this.props;
    if (search.length < 2) return null;
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
    const { makeSelectHandler, selectedItems } = opts;

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
        readOnly={hasSingleSelection}
        value={inputValue}
      />
    );
  }

  render() {
    const { ...rest } = this.props;

    return (
      <AutoCompleteCombobox
        {...rest}
        isInlineListboxSelection
        renderInput={this.renderInput}
        renderItem={this.renderItem}
        renderItemsPrepended={this.renderSearchIndicator}
      />
    );
  }
}

export default EntityCombobox;
