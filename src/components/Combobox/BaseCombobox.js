import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComboboxCore, LoadingComboboxDropdownItem, BaseComboboxDropdownItem } from './components';
import { InputRaw } from '../Form';
import { getSelectedItems } from './utils/helpers';
import { Listbox, Pill } from '../Pill';

class BaseCombobox extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        sprite: PropTypes.string.isr
      }),
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      meta: PropTypes.node,
    })).isRequired,
    labelMultiSelect: PropTypes.string,
    onToggle: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    open: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    selectedItems: PropTypes.array,
  }

  static defaultProps = {
    isLoading: false,
    labelMultiSelect: '%n Options Selected',
    open: false,
    selectedItems: [],
  }

  renderItem = ({
    id,
    makeSelectHandler,
    ...resultProps
  }) => {
    const { renderItem, selectedItems } = this.props;
    if (renderItem) return renderItem(resultProps);

    return (
      <BaseComboboxDropdownItem
        {...resultProps}
        isMultiSelect={selectedItems.length > 1}
        key={id}
        id={id}
        onSelect={makeSelectHandler(id)}
      />
    );
  }

  renderInput = (inputProps) => {
    const { labelMultiSelect, placeholder } = this.props;

    const {
      items,
      selectedItems: selectedItemIds,
      ...rest
    } = inputProps;

    const selectedItems = getSelectedItems(items, selectedItemIds);
    const len = selectedItems.length;

    let inputValue = '';

    if (len === 1) {
      const selection = selectedItems[0];
      if (selection && selection.label) inputValue = selection.label;
    } else if (len > 1) {
      const splitLabel = labelMultiSelect.split('%n');
      inputValue = `${len}${splitLabel[1]}`;
    }

    return (
      <InputRaw
        {...rest}
        placeholder={placeholder}
        iconRight="down"
        readOnly
        value={inputValue}
      />
    );
  }

  renderLoading = () => {
    const { isLoading } = this.props;
    if (!isLoading) return null;
    return <LoadingComboboxDropdownItem />;
  }

  renderListbox = (listboxProps) => {
    const { selectedItems } = listboxProps;
    if (selectedItems.length < 2) return null;
    const { renderListbox } = this.props;
    if (renderListbox) return renderListbox(listboxProps);
    const { items, makeSelectHandler } = listboxProps;

    /** TODO: The Listbox should take focus and cycle with keys rather than tabs as per the spec */
    return (
      <div className="slds-listbox_selection-group">
        <Listbox label="Selected Items">
          {getSelectedItems(items, selectedItems).map(({ id, label }) => (
            <Pill
              key={id}
              label={label}
              title={label}
              onClose={makeSelectHandler(id)}
            />
          ))}
        </Listbox>
      </div>
    );
  }

  render() {
    const {
      height,
      id,
      items,
      label,
      onSelect,
      onToggle,
      open,
      selectedItems,
    } = this.props;

    return (
      <ComboboxCore
        height={height}
        id={id}
        items={items}
        label={label}
        onSelect={onSelect}
        onToggle={onToggle}
        open={open}
        renderItem={this.renderItem}
        renderItemsAppended={this.renderLoading}
        renderInput={this.renderInput}
        renderListbox={this.renderListbox}
        selectedItems={selectedItems}
      />
    );
  }
}

export default BaseCombobox;
