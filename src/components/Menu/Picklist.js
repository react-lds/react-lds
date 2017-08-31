import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import omit from 'lodash.omit';

import {
  PicklistDropdown,
  PicklistDropdownList,
  PicklistDropdownListItem,
  InputRaw,
} from '../../';

export class Picklist extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
  }

  input = () => {
    const { id, isDisabled, items, labelMultiselect, placeholder } = this.props;

    const formatLabel = () => {
      const selectedItems = items.filter(item => item.selected === true);
      const count = selectedItems.length;

      if (count > 1) {
        return `${count} ${labelMultiselect}`;
      } else if (count === 1) {
        return selectedItems[0].label;
      }

      return '';
    };

    return (
      <InputRaw
        id={id}
        className="slds-input slds-combobox__input"
        aria-controls="listbox-unique-id"
        autoComplete="off"
        disabled={isDisabled}
        iconRight="down"
        onClick={this.toggle}
        role="textbox"
        placeholder={placeholder}
        value={formatLabel()}
        readOnly
      />
    );
  };

  menuItems() {
    const { onSelect, items } = this.props;
    return items.map((item) => {
      const boundClick = onSelect.bind(this, item.key);

      return (
        <PicklistDropdownListItem
          key={item.key}
          leftIcon={{ icon: 'check', sprite: 'utility' }}
          selected={item.selected}
          onClick={boundClick}
        >
          {item.label}
        </PicklistDropdownListItem>
      );
    });
  }

  render() {
    const { height, id, labelInput } = this.props;
    const rest = {
      ...omit(this.props, Object.keys(Picklist.propTypes)),
      id,
      labelInput,
    };

    return (
      <PicklistDropdown
        {...rest}
        className={this.props.className}
        input={this.input()}
        isOpen={this.state.isOpen}
      >
        <PicklistDropdownList height={height}>
          {this.menuItems()}
        </PicklistDropdownList>
      </PicklistDropdown>
    );
  }
}

Picklist.propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   *
   */
  height: PropTypes.number,
  /**
   * id for the input
   */
  id: PropTypes.string.isRequired,
  /**
   * whether the input is disabled
   */
  isDisabled: PropTypes.bool,
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
  labelInput: PropTypes.string,
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
};

Picklist.defaultProps = {
  className: null,
  height: null,
  isDisabled: false,
  items: [],
  labelInput: '',
  labelMultiselect: '',
};

export default enhanceWithClickOutside(Picklist);
