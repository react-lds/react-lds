jest.unmock('../DropdownMenuList');

import React from 'react';
import DropdownMenuList from '../DropdownMenuList';
import { shallow } from 'enzyme';

describe('<DropdownMenuList />', () => {
  let mounted = null;

  const children = [<li key="1">one</li>, <li key="2">two</li>];

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<DropdownMenuList>{children}</DropdownMenuList>, options);
  });

  it('renders children inside <ul></ul>', () => {
    expect(mounted.find('ul').contains(children)).toBeTruthy();
  });

  it('renders optional header', () => {
    mounted.setProps({ header: 'pink' });

    const header = mounted.find('div > div').first();
    expect(header.hasClass('slds-dropdown__header')).toBeTruthy();
    expect(header.find('span').hasClass('slds-text-heading--label')).toBeTruthy();
    expect(header.text()).toEqual('pink');
  });

  it('adds optional height class', () => {
    mounted.setProps({ height: 5 });
    expect(mounted.find('ul').hasClass('slds-dropdown--length-5')).toBeTruthy();
  });

  it('adds optional heightIcon class', () => {
    mounted.setProps({ heightIcon: 5 });
    expect(mounted.find('ul').hasClass('slds-dropdown--length-with-icon-5')).toBeTruthy();
  });
});
