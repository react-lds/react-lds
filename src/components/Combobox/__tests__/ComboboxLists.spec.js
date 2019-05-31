import React from 'react';
import { shallow } from 'enzyme';
import { RawComboboxDropdownLists } from '../components/ComboboxDropdownLists';
import { HeaderDropdownItem } from '../components';

const mockRenderer = jest.fn(({ id }) => <li key={id} />);

const SINGLE_GROUP_ITEMS = [
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: '3' },
];

const MULTI_GROUP_ITEMS = [
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: 'l3', isHeader: true },
  { id: '4', label: '4' },
  { id: '5', label: '5' },
  { id: '6', label: '6' },
];

const getCmp = (props = {}) => shallow(
  <RawComboboxDropdownLists
    isOpen
    renderItem={mockRenderer}
    {...props}
  />
);

describe('<ComboboxDropdownLists />', () => {
  beforeEach(() => { mockRenderer.mockClear(); });

  it('Renders a single list of items if no headers are present', () => {
    const mounted = getCmp({ items: SINGLE_GROUP_ITEMS });

    expect(mounted.find('.slds-listbox').length).toEqual(1);
    expect(mounted.find('.slds-listbox > li').length).toEqual(3);
  });

  it('Renders multiple lists of items if headers are present', () => {
    const mounted = getCmp({ items: MULTI_GROUP_ITEMS });
    const listboxes = mounted.find('.slds-listbox');
    expect(listboxes.length).toEqual(2);
    expect(listboxes.at(0).children().length).toEqual(2);
    expect(listboxes.at(1).children().length).toEqual(4);
  });

  it('Renders a header item for identified groups', () => {
    const mounted = getCmp({ items: MULTI_GROUP_ITEMS });
    const identifiedList = mounted.find('.slds-listbox').at(1);
    const header = identifiedList.find(HeaderDropdownItem);
    expect(header.exists()).toBeTruthy();
    expect(header.prop('id')).toEqual('3');
    expect(header.prop('label')).toEqual('l3');
  });

  it('Renders no header for an unidentified group', () => {
    const mounted = getCmp({ items: MULTI_GROUP_ITEMS });
    const unidentifiedList = mounted.find('.slds-listbox').at(0);
    const header = unidentifiedList.find(HeaderDropdownItem);
    expect(header.exists()).toBeFalsy();
  });

  it('Renders arbitrary prepended content in a single list', () => {
    const sampleChild = <li className="i-am-sample" />;
    const mockFn = jest.fn(() => sampleChild);

    const mounted = getCmp({
      items: SINGLE_GROUP_ITEMS,
      renderItemsPrepended: mockFn,
    });

    expect(mockFn).toBeCalled();
    expect(mounted.find('.slds-listbox').contains(sampleChild)).toBeTruthy();
  });

  it('Renders arbitrary appended content in a single list', () => {
    const sampleChild = <li className="i-am-sample" />;
    const mockFn = jest.fn(() => sampleChild);

    const mounted = getCmp({
      items: SINGLE_GROUP_ITEMS,
      renderItemsAppended: mockFn,
    });

    expect(mockFn).toBeCalled();
    expect(mounted.find('.slds-listbox').contains(sampleChild)).toBeTruthy();
  });

  it('Renders arbitrary appended content in the first of multiple lists', () => {
    const sampleChild = <li className="i-am-sample" />;
    const mockFn = jest.fn(() => sampleChild);

    const mounted = getCmp({
      items: MULTI_GROUP_ITEMS,
      renderItemsPrepended: mockFn,
    });

    expect(mockFn).toBeCalled();
    expect(mounted.find('.slds-listbox').at(0).contains(sampleChild)).toBeTruthy();
  });

  it('Renders arbitrary prepended content in the first of multiple lists', () => {
    const sampleChild = <li className="i-am-sample" />;
    const mockFn = jest.fn(() => sampleChild);

    const mounted = getCmp({
      items: MULTI_GROUP_ITEMS,
      renderItemsAppended: mockFn,
    });

    expect(mockFn).toBeCalled();
    expect(mounted.find('.slds-listbox').at(1).contains(sampleChild)).toBeTruthy();
  });
});
