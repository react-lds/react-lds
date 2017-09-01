import React from 'react';
import { shallow } from 'enzyme';

import PicklistDropdownList from '../PicklistDropdownList';

describe('<PicklistDropdownList />', () => {
  let mounted = null;
  let props = {};
  const children = [<li key="1">one</li>, <li key="2">two</li>];

  props = {
    children,
    id: 'picklist-1',
  };

  beforeEach(() => {
    mounted = shallow(<PicklistDropdownList {...props} />);
  });

  it('renders children', () => {
    expect(mounted.find('ul').children()).toHaveLength(children.length);
  });

  it('adds optional height class', () => {
    mounted.setProps({ height: 5 });
    expect(mounted.find('ul').hasClass('slds-dropdown_length-with-icon-5')).toBeTruthy();
  });
});
