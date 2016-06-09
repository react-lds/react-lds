jest.unmock('../DropdownMenuList');

import React from 'react';
import DropdownMenuList from '../DropdownMenuList';
import { mount } from 'enzyme';

describe('<DropdownMenuList />', () => {
  it('renders children inside <ul></ul>', () => {
    const childs = [<li key="1">one</li>, <li key="2">two</li>];
    const menu = mount(<DropdownMenuList>{childs}</DropdownMenuList>);
    expect(menu.find('ul').contains(childs)).toBeTruthy();
  });

  it('renders optional header', () => {
    const menu = mount(<DropdownMenuList header="pink" />);
    const header = menu.find('div > div').first();
    expect(header.hasClass('dropdown__header')).toBeTruthy();
    expect(header.find('span').hasClass('text-heading--label')).toBeTruthy();
    expect(header.text()).toEqual('pink');
  });

  it('adds optional height class', () => {
    const menu = mount(<DropdownMenuList height={5} />).find('ul');
    expect(menu.hasClass('dropdown--length-5')).toBeTruthy();
  });

  it('adds optional heightIcon class', () => {
    const menu = mount(<DropdownMenuList heightIcon={5} />).find('ul');
    expect(menu.hasClass('dropdown--length-with-icon-5')).toBeTruthy();
  });
});
