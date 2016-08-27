import React from 'react';
import { mount } from 'enzyme';

import DropdownMenuListItem from '../DropdownMenuListItem';

jest.unmock('../DropdownMenuListItem');

describe('<DropdownMenuListItem />', () => {
  let mounted = null;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = mount(<DropdownMenuListItem>foobar</DropdownMenuListItem>, options);
  });

  it('handles onClick', () => {
    const clickMock = jest.fn();
    mounted.setProps({ onClick: clickMock });
    mounted.find('li').simulate('click');
    expect(clickMock).toBeCalled();
  });

  it('renders children', () => {
    expect(mounted.find('li > a p').text()).toEqual('foobar');
  });

  it('renders isSelected', () => {
    mounted.setProps({ isSelected: true });
    expect(mounted.find('li').hasClass('slds-is-selected')).toBeTruthy();
  });

  it('renders divider', () => {
    mounted.setProps({ divider: true });
    expect(mounted.find('li').hasClass('slds-has-divider--top-space')).toBeTruthy();
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

    expect(mounted.find('li > a > p svg').length).toBe(1);
    expect(mounted.find('li > a svg').length).toBe(2);
  });
});
