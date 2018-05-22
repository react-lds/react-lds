import React from 'react';
import { shallow } from 'enzyme';

import ControlledMenu from '../ControlledMenu';
import MenuItem from '../MenuItem';

const mockFn = jest.fn();

const getComponent = (props = {}) => shallow(
  <ControlledMenu button={<div className="fakeButton">fakebutton</div>} {...props}>
    <MenuItem onClick={mockFn}>testststst</MenuItem>
  </ControlledMenu>
);

describe('<ControlledMenu />', () => {
  it('renders correct markup and classes', () => {
    const mounted = getComponent();
    expect(mounted.find('div.slds-dropdown-trigger.slds-dropdown-trigger_click').length).toBe(1);
    expect(mounted.find('div.fakeButton').exists()).toBeTruthy();
  });

  it('renders as open when isOpen is set, otherwise it does not render the dropdown', () => {
    let mounted = getComponent();
    expect(mounted.find('div.slds-dropdown').exists()).toBeFalsy();
    mounted = getComponent({ isOpen: true });
    expect(mounted.find('div.slds-is-open').exists()).toBeTruthy();
    expect(mounted.find('div.slds-dropdown').exists()).toBeTruthy();
  });

  it('uses size class', () => {
    let mounted = getComponent({ isOpen: true });
    expect(mounted.find('div.slds-dropdown_small').exists()).toBeTruthy();
    mounted = getComponent({ isOpen: true, size: 'medium' });
    expect(mounted.find('div.slds-dropdown_small').exists()).toBeFalsy();
    expect(mounted.find('div.slds-dropdown_medium').exists()).toBeTruthy();
  });

  it('uses position classes', () => {
    let mounted = getComponent({ isOpen: true, position: 'top-left' });
    expect(mounted.find('div.slds-dropdown_left').exists()).toBeTruthy();
    mounted = getComponent({ isOpen: true, position: 'bottom' });
    expect(mounted.find('div.slds-dropdown_bottom').exists()).toBeTruthy();
  });

  it('uses nubbin class', () => {
    let mounted = getComponent({ nubbin: true, isOpen: true });
    expect(mounted.find('div.slds-nubbin_top-left').exists()).toBeTruthy();
    mounted = getComponent({ isOpen: true, nubbin: true, position: 'bottom' });
    expect(mounted.find('div.slds-nubbin_bottom').exists()).toBeTruthy();
  });

  it('renders closed dropdown only renderClosedDropdown is true', () => {
    let mounted = getComponent();
    expect(mounted.find('slds-dropdown').exists()).toBeFalsy();
    mounted = getComponent({ renderClosedDropdown: true });
    expect(mounted.find('.slds-dropdown').exists()).toBeTruthy();
  });

  it('renders an arbitrary menu header', () => {
    const mockEl = <p>Foo</p>;
    const mounted = getComponent({ renderHeader: () => mockEl, isOpen: true });
    expect(mounted.find('.slds-dropdown').contains(mockEl)).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    const mounted = getComponent({ className: 'foo', 'data-test': 'bar', renderClosedDropdown: true });
    expect(mounted.find('.slds-dropdown').first().hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown-trigger').prop('data-test')).toEqual('bar');
  });
});
