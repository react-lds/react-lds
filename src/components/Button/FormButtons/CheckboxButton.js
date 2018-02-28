import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const CheckboxButton = (props) => {
  const {
    checked,
    className,
    id,
    label,
    ...rest
  } = props;

  const sldsClasses = cx(
    'slds-assistive-text',
    className,
  );

  return (
    <div className="slds-checkbox_add-button">
      <input
        {...rest}
        checked={checked}
        className={cx(sldsClasses)}
        id={id}
        type="checkbox"
        value={checked ? 'on' : 'off'}
      />
      <label className="slds-checkbox_faux" htmlFor={id}>
        <span className="slds-assistive-text">{label}</span>
      </label>
    </div>
  );
};

CheckboxButton.defaultProps = {
  className: null,
};

CheckboxButton.propTypes = {
  /**
   * Checkbox state
   */
  checked: PropTypes.bool.isRequired,
  /**
   * `id` of input. Links input and label
   */
  id: PropTypes.string.isRequired,
  /**
   * Input label, will be present for screen readers
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional additional className
   */
  className: PropTypes.string,
};

export default CheckboxButton;
