import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItemEntity } from './DropdownItemEntity';

const searchIcon = { icon: 'search', sprite: 'utility' };

export const DropdownItemSearch = ({ search }) => (
  <DropdownItemEntity
    className="slds-listbox__option_term"
    isPresentation
    icon={searchIcon}
    label={search}
  />
);

DropdownItemSearch.propTypes = {
  search: PropTypes.string.isRequired,
};
