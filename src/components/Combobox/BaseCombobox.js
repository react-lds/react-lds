import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComboboxCore, BaseDropdownItem } from './components';
import { InputRaw } from '../Form';

class BaseCombobox extends Component {
  static propTypes = {
    /**
     * Text shown in Dropdown input when more than one item is selected.
     * Use `%n` to merge in the count of items currently selected
     */
    labelMultiSelect: PropTypes.string,
    renderInput: PropTypes.func,
    renderItem: PropTypes.func,
  }

  static defaultProps = {
    labelMultiSelect: '%n Option(s) Selected',
    renderInput: (inputProps, opts) => {
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
    },
    renderItem: (resultProps, opts) => {
      const { id } = resultProps;
      const { makeSelectHandler, selectedItems } = opts;

      const baseResultsProps = {
        ...resultProps,
        isMultiSelect: selectedItems.length > 1,
        key: id,
        onSelect: makeSelectHandler(id),
      };

      return <BaseDropdownItem {...baseResultsProps} />;
    },
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

export default BaseCombobox;
