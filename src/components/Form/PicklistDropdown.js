import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  FormElement,
  FormElementError,
  FormElementControl,
  FormElementLabel,
} from '../../';

export class PicklistDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.isOpen };
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
      error,
      hideLabel,
      id,
      input,
      isOpen,
      labelInput,
      isRequired,
    } = this.props;

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

    this.comboboxFormElementClasses = [
      'slds-combobox__form-element',
      'slds-input-has-icon',
      'slds-input-has-icon_right',
    ];

    return (
      <FormElement required={isRequired} error={error}>
        <FormElementLabel
          hideLabel={hideLabel}
          id={id}
          label={labelInput}
          required={isRequired}
        />
        <FormElementControl>
          <div className={cx(this.comboboxContainerClasses)}>
            <div
              aria-expanded={isOpen}
              aria-haspopup
              className={cx(this.comboboxClasses)}
              role="combobox"
            >
              <div className={cx(this.comboboxFormElementClasses)}>
                {input}
                {children}
              </div>
            </div>
          </div>
        </FormElementControl>
        <FormElementError error={error} id={`error-${id}`} />
      </FormElement>
    );
  }
}

PicklistDropdown.propTypes = {
  /**
   * one PicklistDropdownList or many of them
   */
  children: PropTypes.node.isRequired,
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
   * input field
   */
  input: PropTypes.element.isRequired,
  /**
   * forces open or closed state, is needed when using a custom button
   */
  isOpen: PropTypes.bool,
  /**
   * label for the input
   */
  labelInput: PropTypes.string,
  /**
   * indicates if the input is required
   */
  isRequired: PropTypes.bool,
};

PicklistDropdown.defaultProps = {
  disabled: false,
  error: null,
  isOpen: false,
  hideLabel: false,
  labelInput: '',
  isRequired: false,
};

export default PicklistDropdown;
