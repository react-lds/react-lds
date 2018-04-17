import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import Combobox, { ComboboxRaw, propTypes } from './Combobox';

const makePicklist = Component => (
  ({ isDisabled, isLabelHidden, isRequired, ...rest }) => ( // eslint-disable-line react/prop-types
    <Component
      disabled={isDisabled}
      labelHidden={isLabelHidden}
      readOnly
      required={isRequired}
      {...rest}
    />
  )
);

export const PicklistRaw = makePicklist(ComboboxRaw);
PicklistRaw.displayName = 'PicklistRaw';

PicklistRaw.propTypes = {
  ...omit(propTypes, ['isDisabled', 'isLabelHidden', 'isRequired']),

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

const Picklist = makePicklist(Combobox);
Picklist.displayName = 'Picklist';

export default Picklist;
