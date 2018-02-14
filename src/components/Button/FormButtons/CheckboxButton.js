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
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxButton;
