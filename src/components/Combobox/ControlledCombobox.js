import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import memoize from 'lodash-es/memoize';

import ComboboxDropdown from './ComboboxDropdown';
import ComboboxDropdownList from './ComboboxDropdownList';
import ComboboxDropdownListItem from './ComboboxDropdownListItem';

import {
  ClickOutside,
  Icon,
  InputRaw,
  Listbox,
  Pill,
} from '../..';

export const propTypes = {
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * Whether the picklist closes automatically on an outside click
   */
  closeOnClickOutside: PropTypes.bool,
  /**
   * close the combobox when selecting an item
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
  disabled: PropTypes.bool,
  /**
   * whether the error message is visible
   */
  hideErrorMessage: PropTypes.bool,
  /**
   * whether the input label is visible
   */
  hideLabel: PropTypes.bool,
  /**
   * toggle inline listbox mode
   */
  inlineListbox: PropTypes.bool,
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
   * called when adding a custom item in case the combobox isnt in readOnly mode
   */
  onAdd: PropTypes.func,
  /**
   * callback for changes in the input field
   */
  onChange: PropTypes.func,
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
   * toggle readonly mode
   */
  readOnly: PropTypes.bool,
  /**
   * whether the combobox is required
   */
  required: PropTypes.bool,
  /**
   * Picklist sizes: small, medium, large
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * value of the input element
   */
  value: PropTypes.string,
};

export default class ControlledCombobox extends Component {
  static propTypes = propTypes;

  static defaultProps = {
    className: null,
    closeOnClickOutside: true,
    closeOnSelect: true,
    disabled: false,
    error: null,
    height: 7,
    hideErrorMessage: false,
    hideLabel: false,
    inlineListbox: false,
    items: [],
    labelInput: '',
    labelMultiselect: '',
    multiEntity: false,
    onAdd: null,
    onChange: null,
    readOnly: false,
    required: false,
    size: null,
    value: '',
  }

  state = { open: false, inputValue: '' };

  onToggle = () => this.setState(({ open }) => ({ open: !open }))

  onInputKeyDown = ({ key, target: { value } }) => {
    const { onAdd } = this.props;

    if (key === 'Enter' && value && onAdd) {
      onAdd(value);
    }
  };

  onSelect(key) {
    const { closeOnSelect, onSelect } = this.props;

    onSelect(key);

    if (closeOnSelect) this.setState({ open: false });
  }

  onClickOutside = () => {
    this.setState({ open: false });
  }

  getSelectHandler = itemKey => memoize(() => this.onSelect(itemKey));

  getSelectedItems() {
    const { items } = this.props;

    return items.filter(item => item.selected === true);
  }

  renderInput(selectedItems) {
    const {
      disabled,
      id,
      labelMultiselect,
      onChange,
      placeholder,
      readOnly,
      required,
      value,
    } = this.props;

    const formatLabel = () => {
      if (readOnly) {
        const count = selectedItems.length;

        if (count > 1) {
          return `${count} ${labelMultiselect}`;
        } else if (count === 1) {
          return selectedItems[0].label;
        }
      } else {
        return value;
      }

      return '';
    };

    const label = formatLabel();

    const classNames = cx(
      'slds-combobox__input',
      { 'slds-combobox__input-value': !!label },
    );

    const iconRight = readOnly ? 'down' : 'search';

    return (
      <InputRaw
        aria-controls={`listbox-${id}`}
        autoComplete="off"
        className={classNames}
        disabled={disabled}
        iconRight={iconRight}
        iconRightOnClick={this.onToggle}
        id={`combobox-${id}`}
        onChange={onChange}
        onClick={this.onToggle}
        onKeyDown={readOnly ? null : this.onInputKeyDown}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        role="textbox"
        value={label}
      />
    );
  }

  renderComboboxItems() {
    const { items } = this.props;

    return items.map(({
      icon,
      isHeader,
      key,
      label,
      selected,
    }) => (
      <ComboboxDropdownListItem
        icon={icon}
        id={`listbox-option-${key}`}
        isHeader={isHeader}
        key={key}
        onClick={this.getSelectHandler(key)}
        selected={selected}
      >
        {label}
      </ComboboxDropdownListItem>
    ));
  }

  renderListbox(selectedItems, className) {
    return (
      <Listbox className={cx('slds-listbox_inline', className)}>
        {selectedItems.map(({ icon, key, label }) => (
          <Pill
            icon={icon ? <Icon icon={icon.icon} size="small" sprite={icon.sprite} /> : null}
            key={key}
            label={label}
            title={label}
            onClose={this.getSelectHandler(key)}
          />
        ))}
      </Listbox>
    );
  }

  render() {
    const {
      className,
      closeOnClickOutside,
      error,
      height,
      hideErrorMessage,
      hideLabel,
      id,
      inlineListbox,
      labelInput,
      readOnly,
      required,
      size,
    } = this.props;

    const { open } = this.state;

    const condition = closeOnClickOutside && open;

    const selectedItems = this.getSelectedItems();

    const renderPills = !inlineListbox && (
      (readOnly && selectedItems.length > 1) ||
      (!readOnly && selectedItems.length > 0)
    );

    return (
      <ComboboxDropdown
        className={className}
        error={error}
        hideErrorMessage={hideErrorMessage}
        hideLabel={hideLabel}
        id={`combobox-${id}`}
        inlineListbox={inlineListbox ? this.renderListbox(selectedItems) : null}
        input={this.renderInput(selectedItems)}
        labelInput={labelInput}
        open={open}
        pills={renderPills ? this.renderListbox(selectedItems, 'slds-p-top_xxx-small') : null}
        required={required}
        size={size}
      >
        <ClickOutside onClickOutside={this.onClickOutside} condition={condition}>
          <ComboboxDropdownList height={height} id={id}>
            {this.renderComboboxItems()}
          </ComboboxDropdownList>
        </ClickOutside>
      </ComboboxDropdown>
    );
  }
}
