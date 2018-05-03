import React from 'react';
import { mount } from 'enzyme';

import { MediaObject } from '../../MediaObject';

import ComboboxDropdownListItem from '../ComboboxDropdownListItem';

describe('<ComboboxDropdownListItem />', () => {
  let mounted = null;
  let props = {};

  props = {
    children: 'Option 1',
    id: 'picklist-1',
  };

  beforeEach(() => {
    mounted = mount(<ComboboxDropdownListItem {...props} />);
  });

  it('handles onClick', () => {
    const clickMock = jest.fn();
    mounted.setProps({ onClick: clickMock });
    mounted.find(MediaObject).simulate('click');
    expect(clickMock).toBeCalled();
  });

  it('renders children', () => {
    expect(mounted.find(MediaObject).text()).toEqual('Option 1');
  });

  it('renders selected child', () => {
    mounted.setProps({ selected: true });
    expect(mounted.find(MediaObject).hasClass('slds-is-selected')).toBeTruthy();
  });

  it('renders icon', () => {
    const icon = { icon: 'check', sprite: 'utility' };
    mounted.setProps({ icon });
    expect(mounted.find('IconSVG').length).toBe(1);
  });
});
