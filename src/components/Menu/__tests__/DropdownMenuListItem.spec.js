jest.unmock('../DropdownMenuListItem');

import React from 'react';
import DropdownMenuListItem from '../DropdownMenuListItem';
import { mount } from 'enzyme';

describe('<DropdownMenuListItem />', () => {
  const childContextTypes = {
    assetBasePath: React.PropTypes.string,
  };
  const context = { assetBasePath: '/assets' };
  const options = { context, childContextTypes };

  it('handles onClick', () => {
    const clickMock = jest.fn();
    const listItem = mount(<DropdownMenuListItem onClick={clickMock}>foobar</DropdownMenuListItem>, options);
    listItem.find('li').simulate('click');
    expect(clickMock).toBeCalled();
  });

  it('renders children', () => {
    const listItem = mount(<DropdownMenuListItem>foobar</DropdownMenuListItem>, options);
    expect(listItem.find('li > a p').text()).toEqual('foobar');
  });

  it('renders isSelected', () => {
    const listItem = mount(<DropdownMenuListItem isSelected>foobar</DropdownMenuListItem>, options);
    expect(listItem.find('li').hasClass('is-selected')).toBeTruthy();
  });

  it('renders divider', () => {
    const listItem = mount(<DropdownMenuListItem divider>foobar</DropdownMenuListItem>, options);
    expect(listItem.find('li').hasClass('has-divider--top-space')).toBeTruthy();
  });

  it('renders left and right icons', () => {
    const icon = {
      icon: 'unicorn',
      sprite: 'rainbows',
    };
    const listItem = mount(
      <DropdownMenuListItem
        leftIcon={icon}
        rightIcon={icon}
      >foobar
      </DropdownMenuListItem>,
      options
    );
    expect(listItem.find('li > a > p svg').length).toBe(1);
    expect(listItem.find('li > a svg').length).toBe(2);
  });
});
