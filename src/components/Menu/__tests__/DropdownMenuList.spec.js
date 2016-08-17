jest.unmock('../DropdownMenuList');

import React from 'react';
import DropdownMenuList from '../DropdownMenuList';
import { mount } from 'enzyme';

describe('<DropdownMenuList />', () => {
  let mounted = null;

  const children = [<li key="1">one</li>, <li key="2">two</li>];

  beforeEach(() => {
    mounted = mount(<DropdownMenuList>{children}</DropdownMenuList>);
  });

  it('renders children inside <ul></ul>', () => {
    expect(mounted.find('ul').contains(children)).toBeTruthy();
  });

  it('renders optional header', () => {
    mounted.setProps({ header: 'pink' });

    const header = mounted.find('div > div').first();
    expect(header.hasClass('dropdown__header')).toBeTruthy();
    expect(header.find('span').hasClass('text-heading--label')).toBeTruthy();
    expect(header.text()).toEqual('pink');
  });

  it('adds optional height class', () => {
    mounted.setProps({ height: 5 });
    expect(mounted.find('ul').hasClass('dropdown--length-5')).toBeTruthy();
  });

  it('adds optional heightIcon class', () => {
    mounted.setProps({ heightIcon: 5 });
    expect(mounted.find('ul').hasClass('dropdown--length-with-icon-5')).toBeTruthy();
  });
});
