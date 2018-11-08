import React from 'react';
import { mount } from 'enzyme';

import ObjectHome from '../ObjectHome';
import MenuItem from '../../Menu/MenuItem';

describe('<ObjectHome />', () => {
  let mounted;

  beforeEach(() => {
    mounted = mount(
      <ObjectHome
        title="foo"
        titleMenu={<MenuItem>test123</MenuItem>}
        recordType="unicornz"
        info="yeah"
        topButtons="button098"
        bottomButtons="button1234"
      />
    );
  });

  it('opens the menu on headline click', () => {
    const headline = mounted.find('.slds-page-header__title');
    const dropdown = mounted.find('div.slds-dropdown-trigger').first();
    expect(dropdown.hasClass('slds-is-open')).toBeFalsy();
    headline.simulate('click');
    expect(mounted.find('div.slds-dropdown-trigger').first().hasClass('slds-is-open')).toBeTruthy();
  });

  it('contains the title', () => {
    expect(mounted.find('.slds-page-header__title').text()).toEqual('foo');
  });

  it('contains the recordType', () => {
    expect(mounted.find('h1 span').first().text()).toEqual('unicornz');
  });

  it('contains the titleMenu', () => {
    const headline = mounted.find('.slds-page-header__title');
    headline.simulate('click');
    expect(mounted.find('.slds-dropdown').exists()).toBeTruthy();
  });

  it('contains topButtons', () => {
    expect(mounted
      .find('.slds-page-header__col-actions')
      .text())
      .toEqual('button098');
  });

  it('contains info', () => {
    expect(mounted.find('.slds-page-header__meta-text').text()).toEqual('yeah');
  });

  it('contains bottomButtons', () => {
    expect(mounted
      .find('.slds-page-header__col-controls')
      .text())
      .toEqual('button1234');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-page-header').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-page-header').prop('data-test')).toEqual('bar');
  });
});
