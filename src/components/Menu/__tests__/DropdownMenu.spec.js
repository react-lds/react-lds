jest.unmock('../DropdownMenu');

import React from 'react';
import { DropdownMenu } from '../DropdownMenu';
import { mount } from 'enzyme';

describe('<DropdownMenu />', () => {
  let mounted = null;
  let props = {};
  let button;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    button = {
      icon: 'unicorn',
      sprite: 'utility',
    };

    props = {
      button,
    };

    mounted = mount(<DropdownMenu {...props}>fakechilds</DropdownMenu>, options);
  });

  it('is closed by default and opens when the button was clicked', () => {
    const menu = mounted.find('div').first();
    expect(menu.hasClass('slds-is-open')).toBeFalsy();
    menu.find('button').simulate('click');
    expect(menu.hasClass('slds-is-open')).toBeTruthy();
  });

  it('renders buttons with border per default', () => {
    expect(mounted.find('button').hasClass('slds-button--icon-border-filled')).toBeTruthy();
  });

  it('renders no border when noBorder button prop was set', () => {
    button.noBorder = true;
    mounted.setProps({ button });
    expect(mounted.find('button').hasClass('slds-button--icon-container')).toBeTruthy();
  });

  it('isOpen state override works', () => {
    mounted.setProps({ isOpen: true });
    expect(mounted.find('div').first().hasClass('is-open'));
  });

  it('customButtom is used when provided', () => {
    const customButton = <div>i'm a button!</div>;
    mounted.setProps({ button: undefined, customButton });
    expect(mounted.contains(customButton)).toBeTruthy();
  });

  it('uses size class', () => {
    mounted.setProps({ size: 'small' });
    expect(mounted.find('div').last().hasClass('slds-dropdown--small')).toBeTruthy();
  });

  it('uses left class', () => {
    mounted.setProps({ position: 'top-left' });
    expect(mounted.find('div').last().hasClass('slds-dropdown--left')).toBeTruthy();
  });

  it('uses right class', () => {
    mounted.setProps({ position: 'top-right' });
    expect(mounted.find('div').last().hasClass('slds-dropdown--right')).toBeTruthy();
  });

  it('uses bottom class', () => {
    mounted.setProps({ position: 'bottom-right' });
    expect(mounted.find('div').last().hasClass('slds-dropdown--bottom')).toBeTruthy();
  });

  it('uses nubbin class', () => {
    mounted.setProps({ position: 'bottom-right', nubbin: true });
    expect(mounted.find('div').last().hasClass('slds-nubbin--bottom-right')).toBeTruthy();
  });
});
