jest.unmock('../Notification');

import React from 'react';
import Notification from '../Notification';
import { mount } from 'enzyme';

describe('<Notification />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/assets' };
  const childContextTypes = { assetBasePath: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      title: 'foo',
    };

    mounted = mount(<Notification {...props}><p>Foobar</p></Notification>, options);
  });

  it('renders the correct markup', () => {
    const container = mounted.find('.notify_container');
    const notification = container.find('.notify');
    expect(container.length).toBe(1);
    expect(notification.length).toBe(1);
    expect(notification.find('button').length).toBe(1);
    expect(notification.find('button > .assistive-text').length).toBe(1);
    expect(notification.find('> .assistive-text').length).toBe(1);
    expect(notification.contains(<p>Foobar</p>)).toBeTruthy();
  });

  it('renders non-inverse buttons for the warning theme', () => {
    mounted.setProps({ toast: true, theme: 'info' });
    expect(mounted.find('button').hasClass('button--icon-inverse')).toBeTruthy();

    mounted.setProps({ theme: 'warning' });
    expect(mounted.find('button').hasClass('button--icon-inverse')).toBeFalsy();
  });

  it('renders large close icons for toasts', () => {
    mounted.setProps({ toast: true });
    expect(mounted.find('button svg').hasClass('button__icon--large')).toBeTruthy();

    mounted.setProps({ toast: false, alert: true });
    expect(mounted.find('button svg').hasClass('button__icon--large')).toBeFalsy();
  });
});
