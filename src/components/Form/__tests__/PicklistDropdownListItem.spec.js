import React from 'react';
import { mount } from 'enzyme';

import PicklistDropdownListItem from '../PicklistDropdownListItem';

describe('<PicklistDropdownListItem />', () => {
  let mounted = null;
  let props = {};

  props = {
    children: 'Option 1',
    id: 'picklist-1',
  };

  beforeEach(() => {
    mounted = mount(<PicklistDropdownListItem {...props} />);
  });

  it('handles onClick', () => {
    const clickMock = jest.fn();
    mounted.setProps({ onClick: clickMock });
    mounted.find('li > span').simulate('click');
    expect(clickMock).toBeCalled();
  });

  it('renders children', () => {
    expect(mounted.find('li > span').text()).toEqual('Option 1');
  });

  it('renders selected child', () => {
    mounted.setProps({ selected: true });
    expect(mounted.find('li > span').hasClass('slds-is-selected')).toBeTruthy();
  });

  it('renders icon', () => {
    const icon = { icon: 'check', sprite: 'utility' };
    mounted.setProps({ icon });
    expect(mounted.find('IconSVG').length).toBe(1);
  });
});
