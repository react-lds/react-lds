import React from 'react';
import { mount } from 'enzyme';

import { MediaObject } from '../../MediaObject';

import ComboboxDropdownListItem from '../ComboboxDropdownListItem';
import { IconSVG } from '../../Icon';

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
    expect(mounted.find(IconSVG).exists()).toBeTruthy();
  });

  it('renders an icon for selected child', () => {
    const checkIcon = (truthy) => {
      const icon = mounted.find(IconSVG);
      const testExist = expect(icon.exists());

      if (truthy) {
        testExist.toBeTruthy();
        expect(icon.prop('icon')).toEqual('check');
      } else {
        testExist.toBeFalsy();
      }
    };

    checkIcon(false);
    mounted.setProps({ selected: true });
    checkIcon(true);
  });

  it('always renders an icon if it has alwaysDisplay set', () => {
    const checkIcon = () => {
      const icon = mounted.find(IconSVG);
      expect(icon.exists()).toBeTruthy();
      expect(icon.prop('icon')).toEqual('info');
    };

    const icon = { icon: 'info', sprite: 'utility', alwaysDisplay: true };
    mounted.setProps({ icon, selected: false });
    checkIcon();
    mounted.setProps({ selected: true });
    checkIcon();
  });
});
