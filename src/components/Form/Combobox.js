import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import cx from 'classnames';
import memoize from 'lodash/memoize';

import ComboboxDropdownList from './ComboboxDropdownList';
import ComboboxDropdownListItem from './ComboboxDropdownListItem';

import {
  FormElement,
  FormElementError,
  FormElementControl,
  FormElementLabel,
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
   * whether the input lable is visible
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
   * value of the input element
   */
  value: PropTypes.string,
};

export class ComboboxRaw extends Component {
  static propTypes = propTypes

  static defaultProps = {
    className: null,
    error: null,
    height: null,
    disabled: false,
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
    value: '',
  }

  state = { open: false, inputValue: '' };

  onToggle = () => this.setState(({ open }) => ({ open: !open }))

  onInputKeyDown = ({ keyCode, target: { value } }) => {
    const { onAdd } = this.props;

    // enter pressed?
    if (keyCode === 13 && value && onAdd) {
      onAdd(value);
    }
  };

  onSelect(key) {
    const { onSelect } = this.props;

    onSelect(key);

    this.setState({ open: false });
  }

  getSelectHandler = itemKey => memoize(() => this.onSelect(itemKey));

  getSelectedItems() {
    const { items } = this.props;

    return items.filter(item => item.selected === true);
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  renderInput() {
    const {
      id,
      disabled,
      required,
      labelMultiselect,
      onChange,
      placeholder,
      readOnly,
      value,
    } = this.props;

    const formatLabel = () => {
      if (readOnly) {
        const selectedItems = this.getSelectedItems();
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

    return items.map(item => (
      <ComboboxDropdownListItem
        icon={item.icon}
        id={`listbox-option-${item.key}`}
        isHeader={item.isHeader}
        key={item.key}
        onClick={this.getSelectHandler(item.key)}
        selected={item.selected}
      >
        {item.label}
      </ComboboxDropdownListItem>
    ));
  }

  renderInlineListbox() {
    const selectedItems = this.getSelectedItems();

    return (
      <Listbox className="slds-listbox_inline">
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

  renderSelectedPills() {
    const { onSelect } = this.props;

    const selectedItems = this.getSelectedItems();

    return (
      <Listbox className="slds-listbox_inline slds-p-top_xxx-small">
        {selectedItems.map(({ icon, key, label }) => (
          <Pill
            icon={icon ? <Icon icon={icon.icon} size="small" sprite={icon.sprite} /> : null}
            key={key}
            label={label}
            title={label}
            onClose={() => onSelect(key)}
          />
        ))}
      </Listbox>
    );
  }

  render() {
    const {
      className,
      error,
      height,
      hideLabel,
      id,
      inlineListbox,
      labelInput,
      readOnly,
      required,
    } = this.props;

    const { open } = this.state;

    const containerClasses = [
      className,
      'slds-combobox_container',
      { 'slds-has-inline-listbox': !!inlineListbox },
    ];

    const comboboxClasses = [
      'slds-combobox',
      'slds-dropdown-trigger',
      'slds-combobox-picklist',
      'slds-dropdown-trigger_click',
      { 'slds-is-open': !!open },
    ];

    const formElementClasses = [
      'slds-combobox__form-element',
      'slds-input-has-icon',
      'slds-input-has-icon_right',
    ];

    const renderPills = !inlineListbox && (
      (readOnly && this.getSelectedItems().length > 1) ||
      (!readOnly && this.getSelectedItems().length > 0)
    );

    return (
      <FormElement required={required} error={error}>
        <FormElementLabel
          hideLabel={hideLabel}
          id={id}
          label={labelInput}
          required={required}
        />
        <FormElementControl>
          <div className={cx(containerClasses)}>
            {inlineListbox && this.renderInlineListbox()}
            <div
              aria-expanded={open}
              aria-haspopup
              className={cx(comboboxClasses)}
              role="combobox"
            >
              <div className={cx(formElementClasses)} role="none">
                {this.renderInput()}
              </div>
              <ComboboxDropdownList height={height} id={id}>
                {this.renderComboboxItems()}
              </ComboboxDropdownList>
              {renderPills && this.renderSelectedPills()}
            </div>
          </div>
        </FormElementControl>
        <FormElementError error={error} id={`error-${id}`} />
      </FormElement>
    );
  }
}

export default enhanceWithClickOutside(ComboboxRaw);
