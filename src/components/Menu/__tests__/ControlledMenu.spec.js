import React from 'react';
import { render } from 'enzyme';

import ControlledMenu from '../ControlledMenu';
import MenuItem from '../MenuItem';

const mockFn = jest.fn();

const getComponent = (props = {}) => render(
  <ControlledMenu button={<div className="fakeButton">fakebutton</div>} {...props}>
    <MenuItem onClick={mockFn}>testststst</MenuItem>
  </ControlledMenu>
);

describe('<ControlledMenu />', () => {
  it('renders correct markup and classes', () => {
    const mounted = getComponent();
    expect(mounted.find('div.slds-dropdown-trigger.slds-dropdown-trigger_click').length).toBe(1);
    expect(mounted.find('div.fakeButton').length).toBe(1);
  });

  it('renders as open when isOpen is set, otherwise it does not render the dropdown', () => {
    let mounted = getComponent();
    expect(mounted.find('div.slds-dropdown').length).toBe(0);
    mounted = getComponent({ isOpen: true });
    expect(mounted.find('div.slds-is-open').length).toBe(1);
    expect(mounted.find('div.slds-dropdown').length).toBe(1);
    expect(mounted.find('div > ul > li.slds-dropdown__item').length).toBe(1);
  });

  it('uses size class', () => {
    let mounted = getComponent({ isOpen: true });
    expect(mounted.find('div.slds-dropdown_small').length).toBe(1);
    mounted = getComponent({ isOpen: true, size: 'medium' });
    expect(mounted.find('div.slds-dropdown_small').length).toBe(0);
    expect(mounted.find('div.slds-dropdown_medium').length).toBe(1);
  });

  it('uses position classes', () => {
    let mounted = getComponent({ isOpen: true, position: 'top-left' });
    expect(mounted.find('div.slds-dropdown_left').length).toBe(1);
    mounted = getComponent({ isOpen: true, position: 'bottom' });
    expect(mounted.find('div.slds-dropdown_bottom').length).toBe(1);
  });

  it('uses nubbin class', () => {
    let mounted = getComponent({ nubbin: true, isOpen: true });
    expect(mounted.find('div.slds-nubbin_top-left').length).toBe(1);
    mounted = getComponent({ isOpen: true, nubbin: true, position: 'bottom' });
    expect(mounted.find('div.slds-nubbin_bottom').length).toBe(1);
  });

  it('renders closed dropdown only renderClosedDropdown is true', () => {
    let mounted = getComponent();
    expect(mounted.find('slds-dropdown').length).toBe(0);
    mounted = getComponent({ renderClosedDropdown: true });
    expect(mounted.find('.slds-dropdown').length).toBe(1);
  });

  it('applies className and rest-properties', () => {
    const mounted = getComponent({ className: 'foo', 'data-test': 'bar', renderClosedDropdown: true });
    expect(mounted.find('.slds-dropdown').first().hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown-trigger').prop('data-test')).toEqual('bar');
  });

  // Enzymes simulate() only calls the function in onClick-prop,
  // but can't simulate event bubbling, so this doesn't work for now.
  /*
  it('calls the appropriate function when an item is clicked', () => {
    const mounted = getComponent();
    mounted.find('li').last().simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
  */
});
