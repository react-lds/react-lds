import React from 'react';
import { mount } from 'enzyme';

// eslint-disable-next-line import/no-named-default
import { default as Notification } from '../Notification';

describe('<Notification />', () => {
  let mounted = null;
  let props = {};

  const child = <p>Foobar</p>;

  beforeEach(() => {
    props = {
      title: 'foo',
    };

    mounted = mount(<Notification {...props}>{child}</Notification>);
  });

  it('renders the correct markup', () => {
    const container = mounted.find('.slds-notify_container');
    const notification = container.find('.slds-notify');
    expect(notification.find('button').length).toBe(1);
    expect(notification.find('button > .slds-assistive-text').length).toBe(1);
    expect(notification.find('> .slds-assistive-text').length).toBe(1);
    expect(notification.contains(child)).toBeTruthy();
  });

  it('renders non-inverse buttons for the warning theme', () => {
    mounted.setProps({ toast: true, theme: 'info' });
    expect(mounted.find('button').hasClass('slds-button_icon-inverse')).toBeTruthy();

    mounted.setProps({ theme: 'warning' });
    expect(mounted.find('button').hasClass('slds-button_icon-inverse')).toBeFalsy();
  });

  it('renders large close icons for toasts', () => {
    mounted.setProps({ toast: true });
    expect(mounted.find('button svg').hasClass('slds-button__icon_large')).toBeTruthy();

    mounted.setProps({ toast: false });
    expect(mounted.find('button svg').hasClass('slds-button__icon_large')).toBeFalsy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-notify').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-notify').prop('data-test')).toEqual('bar');
  });
});
