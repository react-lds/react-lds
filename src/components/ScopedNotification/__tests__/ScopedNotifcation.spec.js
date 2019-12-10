import React from 'react';
import { mount } from 'enzyme';

import ScopedNotification from '../ScopedNotification';
import { Icon } from '../../Icon';
import { MediaObject } from '../../MediaObject';

const getComponent = (props = {}) => mount(
  <ScopedNotification {...props}>
    <div className="test">Test</div>
  </ScopedNotification>
);

describe('<ScopedNotification />', () => {
  it('renders children', () => {
    const mounted = getComponent();
    expect(mounted.exists('.test')).toBeTruthy();
  });

  it('correctly applies themes', () => {
    const mounted = getComponent({ theme: 'light' });
    expect(mounted.find(MediaObject).hasClass('slds-scoped-notification_light')).toBeTruthy();
    expect(mounted.find(Icon).prop('svgClassName')).toEqual('slds-icon-text-default');

    mounted.setProps({ theme: 'dark' });
    expect(mounted.find(MediaObject).hasClass('slds-scoped-notification_dark')).toBeTruthy();
    expect(mounted.find(Icon).prop('svgClassName')).toBeFalsy();

    mounted.setProps({ theme: 'base' });
    expect(mounted.find(MediaObject).hasClass('slds-scoped-notification_base')).toBeFalsy();
  });

  it('calls an icon renderer when passed in', () => {
    const mockChild = <p>foo</p>;
    const iconRenderer = jest.fn(() => mockChild);
    const mounted = getComponent({ renderIcon: iconRenderer });
    expect(iconRenderer).toBeCalled();
    expect(mounted.find(MediaObject).prop('figureLeft')).toEqual(mockChild);
  });
});
