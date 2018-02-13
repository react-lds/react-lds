import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import cx from 'classnames';

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

export class ComboboxRaw extends Component {
  static propTypes = {
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
    isDisabled: PropTypes.bool,
    /**
     * whether the input lable is visible
     */
    hideLabel: PropTypes.bool,
    /**
     * whether the combobox is required
     */
    required: PropTypes.bool,
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


    inlineListbox: PropTypes.bool,
    multiEntity: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  static defaultProps = {
    className: null,
    error: null,
    height: null,
    isDisabled: false,
    hideLabel: false,
    required: false,
    items: [],
    labelInput: '',
    labelMultiselect: '',


    inlineListbox: false,
    multiEntity: false,
    readOnly: false,
  }

  state = { open: false };

  onToggle = () => this.setState(({ open }) => ({ open: !open }))

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
      inlineListbox,
      isDisabled,
      required,
      labelMultiselect,
      placeholder,
      readOnly,
    } = this.props;

    const formatLabel = () => {
      if (inlineListbox) {
        return undefined;
      }

      const selectedItems = this.getSelectedItems();
      const count = selectedItems.length;

      if (count > 1) {
        return `${count} ${labelMultiselect}`;
      } else if (count === 1) {
        return selectedItems[0].label;
      }

      return undefined;
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
        disabled={isDisabled}
        iconRight={iconRight}
        iconRightOnClick={this.onToggle}
        id={`combobox-${id}`}
        onClick={this.onToggle}
        placeholder={placeholder}
        readOnly
        required={required}
        role="textbox"
        value={label}
      />
    );
  }

  renderComboboxItems() {
    const { onSelect, items } = this.props;

    return items.map((item) => {
      const boundClick = () => onSelect(item.key);

      return (
        <ComboboxDropdownListItem
          icon={item.icon}
          id={`listbox-option-${item.key}`}
          isHeader={item.isHeader}
          key={item.key}
          onClick={boundClick}
          selected={item.selected}
        >
          {item.label}
        </ComboboxDropdownListItem>
      );
    });
  }

  renderInlineListbox() {
    const { onSelect } = this.props;

    const selectedItems = this.getSelectedItems();

    return (
      <Listbox className="slds-listbox_inline">
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
      multiEntity,
      required,
    } = this.props;

    const { open } = this.state;

    const containerClasses = [
      className,
      'slds-combobox_container',
      { 'slds-has-inline-listbox': !!inlineListbox,
        'slds-has-object-switcher': !!multiEntity, },
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
              <div className={cx(formElementClasses)}>
                {this.renderInput()}
              </div>
              <ComboboxDropdownList height={height} id={id}>
                {this.renderComboboxItems()}
              </ComboboxDropdownList>
              {!inlineListbox && this.renderSelectedPills()}
            </div>
          </div>
        </FormElementControl>
        <FormElementError error={error} id={`error-${id}`} />
      </FormElement>
    );
  }
}

export default enhanceWithClickOutside(ComboboxRaw);
