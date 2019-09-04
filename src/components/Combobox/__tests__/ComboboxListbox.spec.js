import React from 'react';
import { shallow } from 'enzyme';
import ComboboxListbox from '../components/ComboboxListbox';
import { Listbox, Pill } from '../../Pill';

const mockFn = jest.fn(id => () => id);

const items = [
  { id: '1', label: 'l1' },
  { id: '2', label: 'l2' },
  { id: '3', label: 'l3' },
];

const getCmp = () => shallow(
  <ComboboxListbox
    isOpen={false}
    label="foo"
    makeSelectHandler={mockFn}
    selectedItems={items}
  />
);

describe('<ComboboxListbox />', () => {
  beforeEach(() => { mockFn.mockClear(); });

  it('Renders the Listbox with a label', () => {
    const mounted = getCmp();
    expect(mounted.find(Listbox).prop('label')).toEqual('foo');
  });

  it('Renders a Pill for each selected item', () => {
    const mounted = getCmp();
    const pills = mounted.find(Pill);
    expect(pills.length).toEqual(3);
    const firstPill = pills.at(0);
    expect(firstPill.prop('label')).toEqual('l1');
    expect(firstPill.prop('title')).toEqual('l1');
  });

  it('Binds a select handler to each item', () => {
    getCmp();
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenCalledWith('2');
  });
});
