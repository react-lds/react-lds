import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FormElement } from '../Form';

const hiddenWhen = hidden => ({ 'slds-assistive-text': hidden });

const CheckboxToggle = (props) => {
  const {
    checked,
    disabled,
    hideStatusLabels,
    hideLabel,
    id,
    label,
    statusLabels: {
      unchecked: labelUnchecked,
      checked: labelChecked,
    },
    ...rest
  } = props;


  const descId = `${id}-description`;
  const statusHidden = hiddenWhen(hideStatusLabels);

  return (
    <FormElement>
      <label className="slds-checkbox_toggle slds-grid">
        <span className={cx('slds-form-element__label', 'slds-m-bottom_none', hiddenWhen(hideLabel))}>
          {label}
        </span>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          id={id}
          aria-describedby={descId}
          {...rest}
          name="checkbox"
          value={checked ? 'on' : 'off'}
        />
        <span
          id={descId}
          className="slds-checkbox_faux_container"
          aria-live="assertive"
        >
          <span className="slds-checkbox_faux" />
          <span className={cx('slds-checkbox_on', statusHidden)}>{labelChecked}</span>
          <span className={cx('slds-checkbox_off', statusHidden)}>{labelUnchecked}</span>
        </span>
      </label>
    </FormElement>
  );
};

CheckboxToggle.defaultProps = {
  checked: false,
  disabled: false,
  hideLabel: false,
  hideStatusLabels: false,
  statusLabels: {
    unchecked: 'Disabled',
    checked: 'Enabled'
  }
};

CheckboxToggle.propTypes = {
  /**
   * Unique Id
   */
  id: PropTypes.string.isRequired,
  /**
   * Checkbox label
   */
  label: PropTypes.node.isRequired,
  /**
   * :checked state. Pass `null` for an uncontrolled checkbox
   */
  checked: PropTypes.bool,
  /**
   * Disable the checkbox
   */
  disabled: PropTypes.bool,
  /**
   * Hides the checkbox label (still visible for screen readers)
   */
  hideLabel: PropTypes.bool,
  /**
   * Hide the status labels beneath the checkbox (still visible for screen readers)
   */
  hideStatusLabels: PropTypes.bool,
  /**
   * Status labels beneath the checkbox
   */
  statusLabels: PropTypes.shape({
    unchecked: PropTypes.node.isRequired,
    checked: PropTypes.node.isRequired,
  })
};

export default CheckboxToggle;
