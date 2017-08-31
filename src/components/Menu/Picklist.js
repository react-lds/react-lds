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
  static propTypes = {
    /**
     * triggered whenever an item was clicked, has the items key as parameter
     */
    callback: PropTypes.func.isRequired,
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * id for the input
     */
    id: PropTypes.string.isRequired,
    /**
     * list of displayed items
     * `{key: 'id123', label: 'first entry', selected: false}`
     */
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.any,
      label: PropTypes.string,
      selected: PropTypes.bool,
    })),
    /**
     * currently selected options
     */
    label: PropTypes.array,
    /**
     * label for input label
     */
    labelInput: PropTypes.string,
    /**
     * label for multiple selected options
     */
    labelMultiselect: PropTypes.string,
    /**
     * placeholder for the input. if a selection is present, you should indicate it
     */
    placeholder: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: null,
    items: [],
  }

  constructor(props, context) {
    super(props, context);
    this.state = { open: false };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  input = () => {
    const { id, label, labelMultiselect, placeholder } = this.props;

    const labelFormatted = () => {
      const length = label.length;

      if (length > 1) {
        return `${length} ${labelMultiselect}`;
      } else if (length === 1) {
        return label[0];
      }

      return '';
    };

    return (
      <InputRaw
        id={id}
        className="slds-input slds-combobox__input"
        aria-controls="listbox-unique-id"
        autoComplete="off"
        iconRight="down"
        onClick={this.toggle}
        role="textbox"
        placeholder={placeholder}
        value={labelFormatted()}
        readOnly
      />
    );
  };

  menuItems() {
    const { callback, items } = this.props;
    return items.map((item) => {
      const boundClick = callback.bind(this, item.key);

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
    const { id, labelInput } = this.props;
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
        isOpen={this.state.open}
      >
        <PicklistDropdownList>
          {this.menuItems()}
        </PicklistDropdownList>
      </PicklistDropdown>
    );
  }
}

export default enhanceWithClickOutside(Picklist);
