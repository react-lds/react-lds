import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash-es/omit';

import ControlledCombobox, { propTypes } from '../Combobox/ControlledCombobox';

const makePicklist = (Component, defaultProps) => (
  ({ isDisabled, isLabelHidden, isRequired, ...rest }) => ( // eslint-disable-line react/prop-types
    <Component
      {...defaultProps}
      disabled={isDisabled}
      hideLabel={isLabelHidden}
      readOnly
      required={isRequired}
      {...rest}
    />
  )
);

export const PicklistRaw = makePicklist(ControlledCombobox, { closeOnClickOutside: false });
PicklistRaw.displayName = 'PicklistRaw';

PicklistRaw.propTypes = {
  ...omit(propTypes, ['disabled', 'hideLabel', 'required']),
  /**
  /**
   * whether the input is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * whether the input lable is visible
   */
  isLabelHidden: PropTypes.bool,
  /**
   * whether the picklist is required
   */
  isRequired: PropTypes.bool,
};

PicklistRaw.defaultProps = {
  closeOnSelect: false,
};

const Picklist = makePicklist(ControlledCombobox);
Picklist.displayName = 'Picklist';

export default Picklist;
