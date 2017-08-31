import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import omit from 'lodash.omit';

import {
  FormElement,
  FormElementControl,
  FormElementLabel,
} from '../../';

export class PicklistDropdown extends Component {
  static defaultProps = {
    button: null,
    className: null,
    customButton: null,
    disabled: false,
    error: null,
    isOpen: false,
    hideLabel: false,
    labelInput: '',
    last: false,
    nubbin: false,
    position: 'top-left',
    required: false,
    size: 'small',
  };

  static propTypes = {
    /**
     * The button that triggers the dropdown menu
     * ```
     * {
     *    icon: 'settings',
     *    sprite: 'utility',
     *    title: 'Click me',
     *    noBorder: true,
     * }
     * ```
     */
    button: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      sprite: PropTypes.string.isRequired,
      title: PropTypes.string,
      noBorder: PropTypes.bool,
      neutral: PropTypes.bool,
      brand: PropTypes.bool,
    }),
    /**
     * one PicklistDropdownList or many of them
     */
    children: PropTypes.node.isRequired,
    /**
     * class name
     */
    className: PropTypes.string,
    /**
     * input field
     */
    input: PropTypes.element.isRequired,
    /**
     * adds disabled attribute to menu button
     */
    disabled: PropTypes.bool,
    /**
     * input error
     */
    error: PropTypes.string,
    /**
     * indicates if the label for the input is hidden
     */
    hideLabel: PropTypes.bool,
    /**
     * id of the input
     */
    id: PropTypes.string.isRequired,
    /**
     * forces open or closed state, is needed when using a custom button
     */
    isOpen: PropTypes.bool,
    /**
     * label for the input
     */
    labelInput: PropTypes.string,
    /**
     * indicates that this is the last element inside a button group and renders
     * the required css class
     */
    last: PropTypes.bool,
    /**
     * displays the nubbin at the correct position if true, hidden per default
     */
    nubbin: PropTypes.bool,
    /**
     * position relative to the menu button
     */
    position: PropTypes.oneOf(['top-left', 'top', 'top-right', 'bottom-left', 'bototm', 'bottom-right']),
    /**
     * indicates if the input is required
     */
    required: PropTypes.bool,
    /**
     * length of the menu box
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  constructor(props, { cssPrefix }) {
    super(props, { cssPrefix });
    this.state = { open: this.props.isOpen };
  }

  getClasses() {
    if (!this.props.isOpen && !this.state.open) {
      return this.classes;
    }

    return [...this.classes, 'slds-is-open'];
  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  render() {
    const {
      children,
      className,
      error,
      id,
      isOpen,
      hideLabel,
      input,
      labelInput,
      last,
      nubbin,
      position,
      required,
      size,
    } = this.props;

    this.classes = [
      'slds-dropdown-trigger',
      'slds-dropdown-trigger_click',
      { 'slds-button_last': last },
    ];

    this.dropdownClasses = [
      'slds-dropdown',
      { [`slds-dropdown_${size}`]: size },
      { 'slds-dropdown_left': position.endsWith('left') },
      { 'slds-dropdown_right': position.endsWith('right') },
      { 'slds-dropdown_bottom': position.startsWith('bottom') },
      { [`slds-nubbin_${position}`]: nubbin },
      className,
    ];

    this.comboboxContainerClasses = [
      'slds-combobox_container',
      'slds-size_small',
    ];

    this.comboboxClasses = [
      'slds-combobox',
      'slds-dropdown-trigger',
      'slds-combobox-picklist',
      'slds-dropdown-trigger_click',
      { 'slds-is-open': !!isOpen },
    ];

    // const rest = omit(this.props, Object.keys(PicklistDropdown.propTypes));

    return (
      <FormElement required={required} error={error}>
        <FormElementLabel
          hideLabel={hideLabel}
          id={id}
          label={labelInput}
          required={required}
        />
        <FormElementControl>
          <div className={cx(this.comboboxContainerClasses)}>
            <div className={cx(this.comboboxClasses)}>
              <div className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right">
                {input}
                {children}
              </div>
            </div>
          </div>
        </FormElementControl>
      </FormElement>
    );
  }
}

export default PicklistDropdown;
