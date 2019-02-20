import React from 'react';
import { mount } from 'enzyme';
import { EntityCombobox } from '../EntityCombobox';
import { EntityDropdownItem, SearchIndicatorDropdownItem } from '../components';
import { InputRaw } from '../../Form';

// TODO: Remove once enzyme supports React.memo
jest.mock('react', () => {
  const r = jest.requireActual('react');
  return { ...r, memo: x => x };
});

const icon = { icon: 'foo', sprite: 'utility' };

const ITEMS = [
  {
    id: '1',
    label: 'l1',
    icon,
    meta: 'foo',
  },
  {
    id: '2',
    label: 'l2',
    icon,
    meta: 'foo'
  },
  {
    id: '3',
    label: 'l3',
    icon,
    meta: 'foo'
  },
];

const getCmp = (props = {}) => mount((
  <EntityCombobox
    items={ITEMS}
    id="autocomplete"
    isOpen={false}
    label="autocomplete-label"
    placeholder="foo"
    onSearch={Function.prototype}
    onSelect={Function.prototype}
    onToggle={Function.prototype}
    {...props}
  />
));

describe('<EntityCombobox />', () => {
  it('renders EntityDropdownItems by default', () => {
    const mounted = getCmp({ search: '' });
    const dropdownItems = mounted.find(EntityDropdownItem);
    expect(dropdownItems).toHaveLength(3);
    const props = dropdownItems.at(0).props();
    expect(props).toMatchObject({ id: '1', label: 'l1' });
  });

  it('renders a SearchIndicatorDropdownItem', () => {
    const mounted = getCmp({ search: 'foos' });
    expect(mounted.find(SearchIndicatorDropdownItem).exists()).toBeTruthy();
  });

  it('renders an input element with a search value when no selection is made', () => {
    const mounted = getCmp({ search: 'bar' });
    const input = mounted.find(InputRaw);
    expect(input.prop('value')).toEqual('bar');
    expect(input.prop('iconRight')).toEqual('search');
  });

  it('renders an input element with a selected value if a single selection is present', () => {
    const mounted = getCmp({ selectedItems: [ITEMS[0]] });
    const input = mounted.find(InputRaw);
    expect(input.prop('value')).toEqual('l1');
    expect(input.prop('iconRight')).toEqual('clear');
  });

  it('allows to add values when Enter is pressed', () => {
    const mockFn = jest.fn();
    const mounted = getCmp({
      isMultiSelect: false,
      isOpen: true,
      search: 'foos',
      onSelect: mockFn,
    });

    mounted.find('input').simulate('keyDown', { key: 'Enter' });

    expect(mockFn).toBeCalledWith('foos', {
      isAdd: true,
      isRemove: false,
      isReplace: false,
    });
  });

  it('clears the search field after a selection', () => {
    const mockFn = jest.fn();

    const mounted = getCmp({
      isOpen: true,
      onSearch: mockFn,
      search: 'foo',
    });

    mounted.find('input').simulate('keyDown', { key: 'Enter' });
    expect(mockFn).toHaveBeenCalledWith('', { isClear: true });
  });
});
