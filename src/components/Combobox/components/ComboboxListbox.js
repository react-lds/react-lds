import React from 'react';
import PropTypes from 'prop-types';
import { Listbox, Pill } from '../../Pill';
import { Icon } from '../../Icon';

const ComboboxListbox = ({
  label,
  makeSelectHandler,
  selectedItems,
}) => (
  // This should have class 'slds-listbox_selection-group' once overflow behavior
  // has been implemented
  <div>
    <Listbox label={label}>
      {selectedItems.map(({ icon, id, label: itemLabel }) => (
        <Pill
          key={id}
          icon={icon ? <Icon icon={icon.icon} sprite={icon.sprite} /> : null}
          label={itemLabel}
          title={itemLabel}
          onClose={makeSelectHandler(id)}
        />
      ))}
    </Listbox>
  </div>
);

ComboboxListbox.propTypes = {
  label: PropTypes.string.isRequired,
  makeSelectHandler: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default ComboboxListbox;
