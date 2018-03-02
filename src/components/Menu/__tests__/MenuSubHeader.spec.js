import React from 'react';
import { mount } from 'enzyme';

import MenuSubHeader from '../MenuSubHeader';

describe('<MenuSubHeader />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<MenuSubHeader>foobar</MenuSubHeader>);
  });

  it('renders string, correct classes', () => {
    expect(mounted.find('li span').text()).toEqual('foobar');
    expect(mounted.find('li').hasClass('slds-dropdown__header slds-truncate')).toBeTruthy();
  });

  it('renders divider', () => {
    mounted.setProps({ divider: true });
    expect(mounted.find('li').hasClass('slds-has-divider_top-space')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-dropdown__item').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown__item').prop('data-test')).toEqual('bar');
  });
});
