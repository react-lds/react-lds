import React from 'react';
import { mount } from 'enzyme';

import { Picklist } from '../Picklist';

describe('</Picklist />', () => {
  let mounted = null;
  let props = {};
  let onSelect = jest.fn();

  beforeEach(() => {
    onSelect = jest.fn();

    props = {
      items: [{
        key: '1',
        label: 'first',
        selected: false,
      }, {
        key: '2',
        label: 'second',
        selected: false,
      }],
      onSelect,
      labelInput: 'Picklist label',
      labelMultiselect: 'Options selected',
      placeholder: 'Picklist placeholder',
    };

    mounted = mount(<Picklist {...props} />);
  });

  it('renders the picklist label', () => {
    expect(mounted.find('FormElementLabel').first().text()).toEqual(props.labelInput);
  });

  it('renders the picklist placeholder', () => {
    expect(mounted.find('input').prop('placeholder')).toEqual(props.placeholder);
  });

  it('renders the picklist items', () => {
    expect(mounted.find('ul.slds-listbox').children()).toHaveLength(props.items.length);
  });

  it('disables the picklist', () => {
    mounted.setProps({ isDisabled: true });
    expect(mounted.find('input').prop('disabled')).toEqual(true);
  });

  it('limits the height of the dropdown', () => {
    mounted.setProps({ height: 5 });
    expect(mounted.find('ul.slds-listbox').hasClass('slds-dropdown_length-with-icon-5')).toBeTruthy();
  });

  it('is closed by default and opens when the input was clicked', () => {
    const picklist = mounted.find('div.slds-combobox').first();
    expect(picklist.hasClass('slds-is-open')).toBeFalsy();
    picklist.find('input').simulate('click');
    expect(picklist.hasClass('slds-is-open')).toBeTruthy();
  });

  it('sets the label of the currently selected item as input label', () => {
    const selectedItem = {
      key: '3',
      label: 'third',
      selected: true,
    };
    mounted.setProps({ items: [...props.items, selectedItem] });
    expect(mounted.find('input').prop('value')).toEqual(selectedItem.label);
  });

  it('sets the multiselect label with the number of items', () => {
    const selectedItems = props.items.map(item => ({ ...item, selected: true }));
    mounted.setProps({ items: selectedItems });
    expect(mounted.find('input').prop('value')).toEqual(`${selectedItems.length} ${props.labelMultiselect}`);
  });
});
