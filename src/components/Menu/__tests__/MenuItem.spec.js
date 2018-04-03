import React from 'react';
import { mount } from 'enzyme';

import MenuItem from '../MenuItem';

describe('<MenuItem />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<MenuItem id="123">foobar</MenuItem>);
  });

  it('renders children, string or node', () => {
    expect(mounted.find('li > a span').text()).toEqual('foobar');
    mounted.setProps({ children: <p>1234</p> });
    expect(mounted.find('li > a span').children().first().text())
      .toBe('1234');
  });

  it('renders isSelected', () => {
    mounted.setProps({ selected: true });
    expect(mounted.find('li').hasClass('slds-is-selected')).toBeTruthy();
  });

  it('renders divider', () => {
    mounted.setProps({ divider: true });
    expect(mounted.find('li').hasClass('slds-has-divider_top-space')).toBeTruthy();
  });

  it('renders left and right icons', () => {
    const icon = {
      icon: 'unicorn',
      sprite: 'rainbows',
    };

    mounted.setProps({
      leftIcon: icon,
      rightIcon: icon,
    });

    expect(mounted.find('li > a > span svg').exists()).toBeTruthy();
    expect(mounted.find('li > a svg').length).toBe(2);
  });

  it('applies a title when set', () => {
    const getTitle = () => mounted.find('a > span').prop('title');
    expect(getTitle()).toEqual('foobar');
    mounted.setProps({ children: <span>child</span> });
    expect(getTitle()).toBeFalsy();
    mounted.setProps({ title: 'foobaz' });
    expect(getTitle()).toEqual('foobaz');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-dropdown__item').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown__item').prop('data-test')).toEqual('bar');
  });
});
