import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputRaw } from '../Form';
import ComboboxCore from './components/ComboboxCore';
import ComboboxListbox from './components/ComboboxListbox';
import { BaseDropdownItem } from './components/DropdownItems';
import { itemType } from './utils/constants';

export const defaultBaseComboboxInputRenderer = (inputProps, opts) => {
  const { isMultiSelect, labelMultiSelect, selectedItems } = opts;
  const len = selectedItems.length;

  let inputValue = '';

  if (len === 1 && !isMultiSelect) {
    const selection = selectedItems[0];
    if (selection && selection.label) inputValue = selection.label;
  } else if (len > 0) {
    inputValue = labelMultiSelect.replace(/%n/gm, `${len}`);
  }

  return (
    <InputRaw
      {...inputProps}
      iconRight="down"
      readOnly
      type="text"
      value={inputValue}
    />
  );
};

export const defaultBaseComboboxItemRenderer = (resultProps, opts) => {
  const { id } = resultProps;
  const { makeSelectHandler, selectedItems } = opts;

  const baseResultsProps = {
    ...resultProps,
    isMultiSelect: selectedItems.length > 1,
    key: id,
    onSelect: makeSelectHandler(id),
  };

  return <BaseDropdownItem {...baseResultsProps} />;
};

export class BaseCombobox extends Component {
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
    /**
     * Text shown in Dropdown input when more than one item is selected.
     * Use `%n` to merge in the count of items currently selected
     */
    labelMultiSelect: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    renderInput: PropTypes.func,
    renderItem: PropTypes.func,
    renderItemsAppended: PropTypes.func,
    renderItemsPrepended: PropTypes.func,
    renderListbox: PropTypes.func,
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
    labelMultiSelect: '%n Option(s) Selected',
    renderInput: defaultBaseComboboxInputRenderer,
    renderItem: defaultBaseComboboxItemRenderer,
    renderItemsAppended: null,
    renderItemsPrepended: null,
    renderListbox: listboxProps => <ComboboxListbox {...listboxProps} />,
    selectedItems: [],
  }

  renderInput = (inputProps, opts) => {
    const { labelMultiSelect, renderInput } = this.props;
    return renderInput(inputProps, { ...opts, labelMultiSelect });
  }

  render() {
    const { labelMultiSelect, ...rest } = this.props;
    return <ComboboxCore {...rest} renderInput={this.renderInput} />;
  }
}

export const Picklist = BaseCombobox;
