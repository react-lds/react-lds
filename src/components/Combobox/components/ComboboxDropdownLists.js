import React from 'react';
import PropTypes from 'prop-types';
import { HeaderDropdownItem } from './DropdownItems';

export const RawComboboxDropdownLists = ({
  items,
  renderItem,
  renderItemsAppended,
  renderItemsPrepended,
}) => {
  const listClasses = 'slds-listbox slds-listbox_vertical';

  if (!items.some(({ isHeader }) => isHeader)) {
    return (
      <ul className={listClasses}>
        {renderItemsPrepended && renderItemsPrepended()}
        {items.map(renderItem)}
        {renderItemsAppended && renderItemsAppended()}
      </ul>
    );
  }

  const groups = [];
  // In case first item is not a header, a list without a header will be rendered
  let currentGroup = { id: null, label: null, items: [] };

  for (let i = 0; i < items.length; i += 1) {
    const current = items[i];

    if (current.isHeader) {
      groups.push(currentGroup);
      const { id, label } = current;
      currentGroup = { id, label, items: [] };
    } else {
      currentGroup.items.push(current);
    }

    if (i === items.length - 1) groups.push(currentGroup);
  }

  return groups.map(({ id, label, items: groupItems }, index) => (
    <ul
      aria-label={label}
      className={listClasses}
      key={id}
      role="group"
    >
      {id && label && <HeaderDropdownItem id={id} label={label} />}
      {index === 0 && renderItemsPrepended && renderItemsPrepended()}
      {groupItems.map(renderItem)}
      {index === groups.length - 1 && renderItemsAppended && renderItemsAppended()}
    </ul>
  ));
};

RawComboboxDropdownLists.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  renderItem: PropTypes.func.isRequired,
  renderItemsAppended: PropTypes.func,
  renderItemsPrepended: PropTypes.func,
};

RawComboboxDropdownLists.defaultProps = {
  renderItemsAppended: null,
  renderItemsPrepended: null,
};

export default React.memo(RawComboboxDropdownLists);
