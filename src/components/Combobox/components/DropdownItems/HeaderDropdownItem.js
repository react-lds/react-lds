import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItemCore } from './DropdownItemCore';
import { preventDefault } from '../../utils/helpers';

export const HeaderDropdownItem = ({ id, label }) => (
  <DropdownItemCore
    className="slds-listbox__option_plain"
    id={id}
    isHeader
    onSelect={preventDefault}
  >
    <h3 className="slds-text-title_caps">{label}</h3>
  </DropdownItemCore>
);

HeaderDropdownItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
