import React from 'react';
import { mount } from 'enzyme';
import { BaseCombobox } from '../BaseCombobox';
import { BaseDropdownItem } from '../components/DropdownItems';
import { InputRaw } from '../../Form';

// TODO: Remove once enzyme supports React.memo
jest.mock('react', () => {
  const r = jest.requireActual('react');
  return { ...r, memo: x => x };
});

const ITEMS = [
  { id: '1', label: 'l1' },
  { id: '2', label: 'l2' },
  { id: '3', label: 'l3' },
];

const getCmp = (props = {}) => mount((
  <BaseCombobox
    items={ITEMS}
    id="autocomplete"
    isOpen
    label="autocomplete-label"
    placeholder="foo"
    onSelect={Function.prototype}
    onToggle={Function.prototype}
    {...props}
  />
));

describe('<BaseCombobox />', () => {
  it('renders <BaseDropdownItems /> by default', () => {
    const mounted = getCmp();
    const dropdownItems = mounted.find(BaseDropdownItem);
    expect(dropdownItems).toHaveLength(3);
    const props = dropdownItems.at(0).props();
    expect(props).toMatchObject({ id: '1', label: 'l1' });
  });

  it('renders an input element with an empty value if no selection is made', () => {
    const mounted = getCmp();
    expect(mounted.find(InputRaw).prop('value')).toEqual('');
  });

  it('renders an input element with a selected value if a single selection is present', () => {
    const mounted = getCmp({ selectedItems: [ITEMS[0]] });
    expect(mounted.find(InputRaw).prop('value')).toEqual('l1');
  });

  it('renders a multiSelect placeholder when multiple selections have been made ', () => {
    const mounted = getCmp({
      labelMultiSelect: '%n items selected',
      selectedItems: [ITEMS[0], ITEMS[1]]
    });
    expect(mounted.find(InputRaw).prop('value')).toEqual('2 items selected');
  });
});
