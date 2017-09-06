import React from 'react';
import { mount } from 'enzyme';

import MenuDropdownListItem from '../MenuDropdownListItem';

describe('<MenuDropdownListItem />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<MenuDropdownListItem>foobar</MenuDropdownListItem>);
  });

  it('handles onClick', () => {
    const clickMock = jest.fn();
    mounted.setProps({ onClick: clickMock });
    mounted.find('li > a').simulate('click');
    expect(clickMock).toBeCalled();
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

    expect(mounted.find('li > a > span svg').length).toBe(1);
    expect(mounted.find('li > a svg').length).toBe(2);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-dropdown__item').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown__item').prop('data-test')).toEqual('bar');
  });
});
