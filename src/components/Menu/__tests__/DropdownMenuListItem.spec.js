import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import DropdownMenuListItem from '../DropdownMenuListItem';

describe('<DropdownMenuListItem />', () => {
  let mounted = null;

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: PropTypes.string, cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = mount(<DropdownMenuListItem>foobar</DropdownMenuListItem>, options);
  });

  it('handles onClick', () => {
    const clickMock = jest.fn();
    mounted.setProps({ onClick: clickMock });
    mounted.find('li > a').simulate('click');
    expect(clickMock).toBeCalled();
  });

  it('renders children', () => {
    expect(mounted.find('li > a div').text()).toEqual('foobar');
  });

  it('renders isSelected', () => {
    mounted.setProps({ selected: true });
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

    expect(mounted.find('li > a > div svg').length).toBe(1);
    expect(mounted.find('li > a svg').length).toBe(2);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-dropdown__item').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown__item').prop('data-test')).toEqual('bar');
  });
});
