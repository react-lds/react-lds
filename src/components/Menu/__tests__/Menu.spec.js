import React from 'react';
import { mount } from 'enzyme';

import Menu from '../Menu';

describe('<Menu />', () => {
  let mounted = null;
  let props = {};
  let button;

  beforeEach(() => {
    button = {
      icon: 'unicorn',
      sprite: 'utility',
    };

    props = {
      button,
    };

    mounted = mount(<Menu {...props}>fakechilds</Menu>);
  });

  it('is closed by default and opens when the button was clicked', () => {
    const menu = mounted.find('div').first();
    expect(menu.hasClass('slds-is-open')).toBeFalsy();
    menu.find('button').simulate('click');
    expect(mounted.find('div').first().hasClass('slds-is-open')).toBeTruthy();
  });

  it('renders buttons with border per default', () => {
    expect(mounted.find('button').hasClass('slds-button_icon-border-filled')).toBeTruthy();
  });

  it('renders no border when noBorder button prop was set', () => {
    button.noBorder = true;
    mounted.setProps({ button });
    expect(mounted.find('button').hasClass('slds-button_icon-container')).toBeTruthy();
    expect(mounted.find('button').hasClass('slds-button_icon-border-filled')).not.toBeTruthy();
  });

  it('isOpen state override works', () => {
    mounted.setProps({ isOpen: true });
    expect(mounted.find('div').first().hasClass('is-open'));
  });

  it('customButtom is used when provided', () => {
    const customButton = <div>im a button!</div>;
    mounted.setProps({ button: undefined, customButton });
    expect(mounted.contains(customButton)).toBeTruthy();
  });

  it('uses size class', () => {
    mounted.setProps({ size: 'small' });
    expect(mounted.find('div').last().hasClass('slds-dropdown_small')).toBeTruthy();
  });

  it('uses left class', () => {
    mounted.setProps({ position: 'top-left' });
    expect(mounted.find('div').last().hasClass('slds-dropdown_left')).toBeTruthy();
  });

  it('uses right class', () => {
    mounted.setProps({ position: 'top-right' });
    expect(mounted.find('div').last().hasClass('slds-dropdown_right')).toBeTruthy();
  });

  it('uses bottom class', () => {
    mounted.setProps({ position: 'bottom-right' });
    expect(mounted.find('div').last().hasClass('slds-dropdown_bottom')).toBeTruthy();
  });

  it('uses nubbin class', () => {
    mounted.setProps({ position: 'bottom-right', nubbin: true });
    expect(mounted.find('div').last().hasClass('slds-nubbin_bottom-right')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-dropdown').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown').prop('data-test')).toEqual('bar');
  });
});
