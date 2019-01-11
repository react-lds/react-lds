import React from 'react';
import { mount } from 'enzyme';
import AutoCompleteCombobox from '../AutoCompleteCombobox';
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
  <AutoCompleteCombobox
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


describe('<AutoCompleteCombobox />', () => {
  it('renders BaseDropdownItems by default', () => {
    const mounted = getCmp({ search: 'bar' });
    const dropdownItems = mounted.find(BaseDropdownItem);
    expect(dropdownItems).toHaveLength(3);
    const props = dropdownItems.at(0).props();
    expect(props).toMatchObject({ id: '1', label: 'l1', highlight: 'bar' });
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

  it('renders an input element with a value highlighted when it has keyboard focus', () => {
    const mounted = getCmp({ isMultiSelect: false, isOpen: true });
    mounted.find('input').simulate('keyDown', { key: 'ArrowDown' });
    expect(mounted.find('input').prop('value')).toEqual('l1');
  });

  it('renders an input element a selected value although keyboard focus differs', () => {
    const mounted = getCmp({ isMultiSelect: false, isOpen: true, selectedItems: [ITEMS[1]] });
    mounted.find('input').simulate('keyDown', { key: 'ArrowDown' });
    expect(mounted.find('input').prop('value')).toEqual('l2');
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
