import React from 'react';
import PropTypes from 'prop-types';
import { EntityDropdownItem } from './EntityDropdownItem';

const searchIcon = { icon: 'search', sprite: 'utility' };

export const SearchIndicatorDropdownItem = ({ search }) => (
  <EntityDropdownItem
    className="slds-listbox__option_term"
    isPresentation
    icon={searchIcon}
    label={search}
  />
);

SearchIndicatorDropdownItem.propTypes = {
  search: PropTypes.string.isRequired,
};
