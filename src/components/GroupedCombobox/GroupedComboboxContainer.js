import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { itemType } from '../Combobox/utils/constants';
import { Picklist } from '../Combobox';

class GroupedComboboxContainer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(itemType).isRequired,
    onSelect: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    selectedItems: PropTypes.arrayOf(itemType).isRequired,
  }

  onSelect = (id) => {
    const { onSelect } = this.props;
    onSelect(id);
  }

  renderSwitcher = () => {
    const {
      id,
      isOpen,
      items,
      onToggle,
      selectedItems
    } = this.props;

    return (
      <Picklist
        closeOnSelect
        hideLabel
        id={id}
        isMultiSelect={false}
        isOpen={isOpen}
        items={items}
        label=""
        onSelect={this.onSelect}
        onToggle={onToggle}
        placeholder=""
        selectedItems={selectedItems}
      />
    );
  }

  render() {
    const {
      children,
      items,
      selectedItems,
    } = this.props;
    if (!selectedItems.length) return null;

    const [{ id: activeId }] = selectedItems;

    return children({
      activeId,
      items,
      comboboxProps: {
        isMultiSelect: true,
        renderObjectSwitcher: this.renderSwitcher,
      }
    });
  }
}

export default GroupedComboboxContainer;
