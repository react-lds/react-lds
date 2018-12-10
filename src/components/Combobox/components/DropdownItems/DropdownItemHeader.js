import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from './DropdownItem';
import { preventDefault } from '../../utils/helpers';

export const DropdownItemHeader = ({ id, label }) => (
  <DropdownItem
    className="slds-listbox__option_plain"
    id={id}
    isHeader
    onSelect={preventDefault}
  >
    <h3 className="slds-text-title_caps">{label}</h3>
  </DropdownItem>
);

DropdownItemHeader.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
