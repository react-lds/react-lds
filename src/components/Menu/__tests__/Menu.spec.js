import React from 'react';
import { mount } from 'enzyme';

import Menu from '../Menu';
import MenuItem from '../MenuItem';
import { IconButton } from '../../Button';

const customButton = (
  <IconButton
    icon="warning"
    sprite="utility"
    aria-haspopup="true"
    className="slds-button_icon-border-filled"
  />
);

const getComponent = (props = {}) => mount(
  <Menu button={customButton} {...props}>
    <MenuItem>test</MenuItem>
  </Menu>
);

describe('<Menu />', () => {
  it('is closed by default and opens when the button was clicked', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-dropdown-trigger').hasClass('slds-is-open')).toBeFalsy();
    expect(mounted.find('Button').exists()).toBeTruthy();
    mounted.find('Button').simulate('click');
    expect(mounted.find('.slds-dropdown-trigger').hasClass('slds-is-open')).toBeTruthy();
  });

  it('isOpen state override works', () => {
    const mounted = getComponent({ isOpen: true });
    expect(mounted.find('div').first().hasClass('is-open'));
  });

  it('uses size class', () => {
    const mounted = getComponent({ size: 'small' });
    expect(mounted.find('div').last().hasClass('slds-dropdown_small')).toBeTruthy();
  });

  it('uses left class', () => {
    const mounted = getComponent({ position: 'top-left' });
    expect(mounted.find('div').last().hasClass('slds-dropdown_left')).toBeTruthy();
  });

  it('uses right class', () => {
    const mounted = getComponent({ position: 'top-right' });
    expect(mounted.find('div').last().hasClass('slds-dropdown_right')).toBeTruthy();
  });

  it('uses bottom class', () => {
    const mounted = getComponent({ position: 'bottom-right' });
    expect(mounted.find('div').last().hasClass('slds-dropdown_bottom')).toBeTruthy();
  });

  it('starts as closed by default and defaultOpens', () => {
    let mounted = getComponent();
    expect(mounted.find('div.slds-dropdown').exists()).toBeFalsy();
    mounted = getComponent({ defaultOpen: true });
    expect(mounted.find('div.slds-is-open').exists()).toBeTruthy();
    expect(mounted.find('div.slds-dropdown').exists()).toBeTruthy();
    expect(mounted.find('.slds-dropdown__item').exists()).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    const mounted = getComponent({ 'data-test': 'bar', className: 'baz', defaultOpen: true });
    expect(mounted.find('.slds-dropdown').hasClass('baz')).toBeTruthy();
    expect(mounted.find('.slds-dropdown-trigger').prop('data-test')).toEqual('bar');
  });
});
