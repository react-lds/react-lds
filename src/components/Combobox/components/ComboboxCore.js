import React, { Component } from 'react';
import PropTypes from 'prop-types';
import memoize from 'lodash-es/memoize';
import { ClickOutside } from '../../ClickOutside';
import {
  ComboboxDropdown,
  HeaderComboboxDropdownItem,
} from '.';
import { handleIndexChange, scrollDropdown } from '../utils/helpers';

class ComboboxCore extends Component {
  static propTypes = {
    closeOnSelect: PropTypes.bool,
    height: PropTypes.number,
    /**
     * Array of items that will be displayed in the selection dropdown
     * Whenever `isHeader` is encountered, the list will be split off into another sub-list
     */
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      isHeader: PropTypes.bool,
    })),
    label: PropTypes.string.isRequired,
    /**
     * Array of `id`s that are currently selected
     */
    selectedItems: PropTypes.arrayOf(PropTypes.string),
    /**
     * Unique identifier for this Combobox
     */
    id: PropTypes.string.isRequired,
    /**
     * Callback to manage open state
     * Called with (bool) indicating next state
     */
    onToggle: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    /**
     * Determines whether the selection menu is currently open
     */
    open: PropTypes.bool,
    /**
     * Renders the combobox input. Receives an object with the following props:
     *  - Accessibility properties passed up from `ComboboxDropdown`
     *  - `id` passed up from `ComboboxDropdown`
     *  - `onKeyDown` handler to wire-up keyboard handling
     *  - `onFocus` handler ""
     *  - `onBlur` handler ""
     *  - `on`
     */
    renderInput: PropTypes.func.isRequired,
    /**
     * Renders each `item` in `items`
     * Passed the item and additionally:
     *  - `selected` if the item is selected
     *  - `hasFocus` is keyboard is focussed on item
     *  - `makeSelectRenderer` to make event handlers, bound like onClick={makeSelectRenderer(item.key)}
     */
    renderItem: PropTypes.func.isRequired,
    renderItemsAppended: PropTypes.func,
    renderItemsPrepended: PropTypes.func,
    /**
     * Renders beneath Combobox. Used to display a Listbox of Pills in multi-select Comboboxes.
     * Passed an object with `items` and `selectedItems`
     */
    renderListbox: PropTypes.func,
  }

  static defaultProps = {
    closeOnSelect: true,
    height: 5,
    items: [],
    selectedItems: [],
    open: false,
    renderItemsAppended: null,
    renderItemsPrepended: null,
    renderListbox: null,
  }

  constructor(props) {
    super(props);
    this.state = { keyboardSelection: null };
    this.inputRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.makeSelectHandler = memoize(key => evt => this.onSelect(key, evt));
  }

  onToggle = () => {
    const { open, onToggle } = this.props;
    onToggle(!open);
  }

  onClose = () => {
    const { onToggle } = this.props;
    onToggle(false);
  }

  onOpen = () => {
    const { onToggle } = this.props;
    onToggle(true);
  }

  onSelect = (id, evt) => {
    if (evt) { evt.preventDefault(); }
    const { closeOnSelect, onSelect, onToggle } = this.props;
    onSelect(id);

    if (closeOnSelect) {
      onToggle(false);
    } else {
      const inputRef = this.inputRef.current;
      inputRef.focus();
    }
  }

  onInputMouseDown = (evt) => {
    evt.preventDefault();
    const inputRef = this.inputRef.current;
    const isFocused = document.activeElement === inputRef;
    if (isFocused) {
      this.onToggle();
    } else {
      inputRef.focus();
      this.onOpen();
    }
  }

  onInputKeyDown = (evt) => {
    const { key } = evt;
    const { items, onToggle, open } = this.props;
    const { keyboardSelection } = this.state;

    const filteredItems = items.filter(item => !item.isHeader);
    const len = filteredItems.length;

    const isEnter = key === 'Enter';
    const isDownArrow = key === 'ArrowDown' || key === 'Down';
    const isUpArrow = key === 'ArrowUp' || key === 'Up';

    const isKeyboardCycle = open && (isDownArrow || isUpArrow) && len > 0;
    const isKeyboardOpen = !open && (isDownArrow || isEnter);
    const isKeyboardSelect = open && keyboardSelection != null && isEnter;

    if (!isKeyboardOpen && !isKeyboardCycle && !isKeyboardSelect) return;

    if (isKeyboardOpen) {
      this.setState({ keyboardSelection: handleIndexChange(filteredItems, -1, 'desc') });
      onToggle(true);
      return;
    }

    if (isKeyboardSelect) {
      console.log('warp');
      this.onSelect(keyboardSelection);
      return;
    }

    if (isKeyboardCycle) {
      evt.preventDefault();
      this.setState(({ keyboardSelection: prevSelection }) => {
        const prevIndex = filteredItems.findIndex(({ id }) => id === prevSelection);
        const nextIndex = handleIndexChange(filteredItems, prevIndex, isDownArrow ? 'desc' : 'asc');
        const dropdown = this.dropdownRef.current;
        // This works since this mirrors `filteredItems`
        // It may be faster to keep a refMap of items and augment the DOM access that way
        const childNodes = dropdown.querySelectorAll('.slds-listbox__option[role="option"]');
        scrollDropdown(dropdown, childNodes[nextIndex]);
        const { id } = filteredItems[nextIndex];
        return { keyboardSelection: id };
      });
    }
  }

  onInputFocus = (evt) => {
    const isUserEvent = evt.nativeEvent.which != null;
    const { onToggle, open } = this.props;
    if (isUserEvent) onToggle(!open);
  }

  renderItem = ({ id, ...rest }) => {
    const { renderItem, selectedItems } = this.props;
    const { keyboardSelection } = this.state;

    return renderItem({
      ...rest,
      id,
      isFocus: id === keyboardSelection,
      isSelected: selectedItems.includes(id),
      makeSelectHandler: this.makeSelectHandler
    });
  }

  renderItemsWithGroups() {
    const {
      items,
      renderItemsAppended,
      renderItemsPrepended,
    } = this.props;

    const listClasses = 'slds-listbox slds-listbox_vertical';

    if (!items.some(({ isHeader }) => isHeader)) {
      return (
        <ul className={listClasses}>
          {renderItemsPrepended && renderItemsPrepended()}
          {items.map(this.renderItem)}
          {renderItemsAppended && renderItemsAppended()}
        </ul>
      );
    }

    const groups = [];
    // In case first item is not a header, a list without a header will be rendered
    let currentGroup = { id: null, label: null, items: [] };

    for (let i = 0; i < items.length; i += 1) {
      const current = items[i];

      if (current.isHeader) {
        groups.push(currentGroup);
        const { id, label } = current;
        currentGroup = { id, label, items: [] };
      } else {
        currentGroup.items.push(current);
        if (i === items.length - 1) groups.push(currentGroup);
      }
    }

    return groups.map(({ id, label, items: groupItems }, index) => (
      <ul
        aria-label={label}
        className={listClasses}
        key={id}
        role="group"
      >
        {id && label && <HeaderComboboxDropdownItem id={id} label={label} />}
        {index === 1 && renderItemsPrepended && renderItemsPrepended()}
        {groupItems.map(this.renderItem)}
        {index === groups.length - 1 && renderItemsAppended && renderItemsAppended()}
      </ul>
    ));
  }

  render() {
    const {
      height,
      id,
      items,
      label,
      open,
      renderInput,
      renderListbox,
      selectedItems,
    } = this.props;

    return (
      <ClickOutside
        handleEsc
        onClickOutside={this.onClose}
        condition={open}
      >
        <ComboboxDropdown
          height={height}
          id={`combobox-${id}`}
          label={label}
          listboxId={`listbox-${id}`}
          open={open}
          ref={this.dropdownRef}
          renderInput={inputProps => renderInput({
            ...inputProps,
            items,
            ref: this.inputRef,
            selectedItems,
            onBlur: this.onClose,
            onFocus: this.onInputFocus,
            onKeyDown: this.onInputKeyDown,
            onMouseDown: this.onInputMouseDown,
          })}
        >
          {this.renderItemsWithGroups(items)}
        </ComboboxDropdown>
        {renderListbox && renderListbox({
          items,
          selectedItems,
          makeSelectHandler: this.makeSelectHandler,
        })}
      </ClickOutside>
    );
  }
}

export default ComboboxCore;
