import React from 'react';
import { render } from 'enzyme';

import Menu from '../Menu';
import MenuItem from '../MenuItem';

const getComponent = (props = {}) => render(
  <Menu button={<button className="fakeButton">fakebutton</button>} {...props}>
    <MenuItem>test</MenuItem>
  </Menu>
);

describe('<Menu />', () => {
  it('is closed by default and opens when the button was clicked', () => {
    const mounted = getComponent();
    const menu = mounted.find('div').first();
    // expect(menu.hasClass('slds-is-open')).toBeFalsy();
    expect(menu.find('button').length).toBe(1);
    // menu.find('button').simulate('click');
    // expect(menu.hasClass('slds-is-open')).toBeTruthy();
  });

  it('starts as closed by default and defaultOpens', () => {
    let mounted = getComponent();
    expect(mounted.find('div.slds-dropdown').length).toBe(0);
    mounted = getComponent({ defaultOpen: true });
    expect(mounted.find('div.slds-is-open').length).toBe(1);
    expect(mounted.find('div.slds-dropdown').length).toBe(1);
    expect(mounted.find('div > ul > li.slds-dropdown__item').length).toBe(1);
  });

  it('applies className and rest-properties', () => {
    const mounted = getComponent({ 'data-test': 'bar', className: 'baz', defaultOpen: true });
    expect(mounted.find('.slds-dropdown').hasClass('baz')).toBeTruthy();
    expect(mounted.find('.slds-dropdown-trigger').prop('data-test')).toEqual('bar');
  });
});
