import React from 'react';
import { shallow } from 'enzyme';
import { Badge, IconSVG } from '../../..';

import VerticalNavigationItem from '../VerticalNavigationItem';

const getComponent = (props = {}) => shallow(
  <VerticalNavigationItem {...props}>Sample</VerticalNavigationItem>
);

describe('<VerticalNavigationItem />', () => {
  it('applies rest props to action', () => {
    const mounted = getComponent({ 'aria-test': 'foo' });
    expect(mounted.find('a.slds-nav-vertical__action').prop('aria-test')).toEqual('foo');
  });

  it('renders a notification badge', () => {
    const mounted = getComponent({ notification: 3, notificationLabel: 'foo' });
    const $badge = mounted.find(Badge);
    expect($badge.exists()).toBeTruthy();
    expect($badge.prop('title')).toEqual('foo');
  });

  it('renders an icon', () => {
    const icon = { icon: 'foo', sprite: 'utility', title: 'bar' };
    const mounted = getComponent({ icon });
    expect(mounted.find(IconSVG).prop('icon')).toEqual('foo');
  });
});
