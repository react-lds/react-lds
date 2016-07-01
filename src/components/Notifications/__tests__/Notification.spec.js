jest.unmock('../Notification');

import React from 'react';
import Notification from '../Notification';
import { mount } from 'enzyme';

describe('Notification', () => {
  const context = { assetBasePath: '/assets' };
  const childContextTypes = {
    assetBasePath: React.PropTypes.string,
  };
  const options = { context, childContextTypes };

  it('renders the correct markup', () => {
    const wrapper = mount(<Notification title="foo" alert><p>Foobar</p></Notification>, options);
    const container = wrapper.find('.notify_container');
    const notification = container.find('.notify');
    expect(container.length).toBe(1);
    expect(notification.length).toBe(1);
    expect(notification.find('button').length).toBe(1);
    expect(notification.find('button > .assistive-text').length).toBe(1);
    expect(notification.find('> .assistive-text').length).toBe(1);
    expect(notification.contains(<p>Foobar</p>)).toBeTruthy();
  });

  it('renders non-inverse buttons for the warning theme', () => {
    const info = mount(<Notification title="foo" toast theme="info"><p>Foobar</p></Notification>, options);
    const warning = mount(<Notification title="foo" toast theme="warning"><p>Foobar</p></Notification>, options);
    expect(info.find('button').hasClass('button--icon-inverse')).toBeTruthy();
    expect(warning.find('button').hasClass('button--icon-inverse')).toBeFalsy();
  });

  it('renders large close icons for toasts', () => {
    const toast = mount(<Notification title="foo" toast><p>Foobar</p></Notification>, options);
    const alert = mount(<Notification title="foo" alert><p>Foobar</p></Notification>, options);
    expect(alert.find('button svg').hasClass('button__icon--large')).toBeFalsy();
    expect(toast.find('button svg').hasClass('button__icon--large')).toBeTruthy();
  });
});
