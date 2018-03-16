import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import memoize from 'lodash/memoize';

import {
  PicklistDropdown,
  PicklistDropdownList,
  PicklistDropdownListItem,
  InputRaw,
} from '../../';

export class PicklistRaw extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { isOpen: false };
  }

  onSelect(key) {
    const { closeOnSelect, onSelect } = this.props;

    onSelect(key);

    if (closeOnSelect) this.setState({ isOpen: false });
  }

  getSelectHandler = itemKey => memoize(() => this.onSelect(itemKey));

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
  }

  renderInput = () => {
    const {
      id,
      isDisabled,
      isRequired,
      items,
      labelMultiselect,
      placeholder,
    } = this.props;

    const formatLabel = () => {
      const selectedItems = items.filter(item => item.selected === true);
      const count = selectedItems.length;

      if (count > 1) {
        return `${count} ${labelMultiselect}`;
      } else if (count === 1) {
        return selectedItems[0].label;
      }

      return null;
    };

    return (
      <InputRaw
        aria-controls={`listbox-${id}`}
        autoComplete="off"
        className="slds-input slds-combobox__input"
        disabled={isDisabled}
        iconRight="down"
        iconRightOnClick={this.toggle}
        id={`combobox-${id}`}
        onClick={this.toggle}
        placeholder={placeholder}
        readOnly
        required={isRequired}
        role="textbox"
        value={formatLabel()}
      />
    );
  };

  renderPicklistItems() {
    const { items } = this.props;

    return items.map(({ isHeader, key, label, selected }) => (
      <PicklistDropdownListItem
        icon={{ icon: 'check', sprite: 'utility' }}
        id={`listbox-option-${key}`}
        isHeader={isHeader}
        key={key}
        onClick={this.getSelectHandler(key)}
        selected={selected}
      >
        {label}
      </PicklistDropdownListItem>
    ));
  }

  render() {
    const {
      className,
      error,
      height,
      id,
      isLabelHidden,
      isRequired,
      labelInput,
      size,
    } = this.props;

    return (
      <PicklistDropdown
        className={className}
        error={error}
        hideLabel={isLabelHidden}
        id={`combobox-${id}`}
        input={this.renderInput()}
        isOpen={this.state.isOpen}
        isRequired={isRequired}
        labelInput={labelInput}
        size={size}
      >
        <PicklistDropdownList
          height={height}
          id={id}
        >
          {this.renderPicklistItems()}
        </PicklistDropdownList>
      </PicklistDropdown>
    );
  }
}

PicklistRaw.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * close the picklist when selecting an item
   */
  closeOnSelect: PropTypes.bool,
  /**
   * sets the number of items being displayed
   */
  error: PropTypes.string,
  /**
   * sets the number of items being displayed
   */
  height: PropTypes.number,
  /**
   * unique id
   */
  id: PropTypes.string.isRequired,
  /**
   * whether the input is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * whether the input lable is visible
   */
  isLabelHidden: PropTypes.bool,
  /**
   * whether the picklist is required
   */
  isRequired: PropTypes.bool,
  /**
   * list of displayed items
   * `{ key: 'id123', label: 'first option', selected: false }`
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.any,
    label: PropTypes.string,
    selected: PropTypes.bool,
  })),
  /**
   * label for input label
   */
  labelInput: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * label for multiple selected items
   */
  labelMultiselect: PropTypes.string,
  /**
   * triggered whenever an item was clicked, has the item's key as parameter
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * placeholder for the input. if a selection is present,
   * you should indicate it
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * Picklist sizes: small, medium, large
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

PicklistRaw.defaultProps = {
  className: null,
  closeOnSelect: false,
  error: null,
  height: null,
  isDisabled: false,
  isLabelHidden: false,
  isRequired: false,
  items: [],
  labelInput: '',
  labelMultiselect: '',
  size: null,
};

export default enhanceWithClickOutside(PicklistRaw);
