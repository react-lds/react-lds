import React from 'react';
import { shallow } from 'enzyme';

import Alert from '../Alert';
import { IconButton, ButtonIcon } from '../../Button';

const sampleChild = <p>Foobar</p>;

const getComponent = (props = {}) => shallow(
  <Alert {...props} title="Foo">{sampleChild}</Alert>
);

describe('<Alert />', () => {
  it('renders the correct markup', () => {
    const mounted = getComponent();
    const notification = mounted.find('.slds-notify');

    expect(notification.hasClass('slds-notify_alert')).toBeTruthy();
    expect(notification.hasClass('slds-notify_toast')).toBeFalsy();
    expect(notification.prop('role')).toEqual('alert');
    expect(notification.find('.slds-notify > .slds-assistive-text').text()).toEqual('Foo');
    expect(mounted.contains(sampleChild)).toBeTruthy();
  });

  it('renders and binds a close button', () => {
    const expectButtonPresent = (cmp, truthy) => {
      const expectation = cmp.find('.slds-notify__close').exists();
      if (truthy) expect(expectation).toBeTruthy();
      else expect(expectation).toBeFalsy();
    };

    const mounted = getComponent();
    expectButtonPresent(mounted, false);
    const mockFn = jest.fn();
    mounted.setProps({ onClickClose: mockFn });
    expectButtonPresent(mounted, true);
    const closeButton = mounted.find('.slds-notify__close').find(IconButton);
    closeButton.simulate('click');
    expect(closeButton.prop('size')).toBeNull();
    expect(mockFn).toBeCalled();
  });

  it('renders an icon if set', () => {
    const sampleIcon = <p>Sample</p>;
    const mounted = getComponent({ icon: sampleIcon });
    const iconContainer = mounted.find('.slds-icon_container');
    const icon = iconContainer.find('p');
    expect(iconContainer.hasClass('slds-m-right_x-small')).toBeTruthy();
    expect(icon.exists()).toBeTruthy();
    expect(icon.prop('size')).toEqual('x-small');
  });

  it('renders as toast', () => {
    const mockFn = jest.fn();
    const sampleIcon = <p>Sample</p>;
    const mounted = getComponent({
      icon: sampleIcon,
      onClickClose: mockFn,
      toast: true,
    });

    const notification = mounted.find('.slds-notify');
    expect(notification.hasClass('slds-notify_toast')).toBeTruthy();
    expect(notification.hasClass('slds-notify_alert')).toBeFalsy();
    expect(notification.prop('role')).toEqual('status');
    expect(mounted.find('.slds-notify_container').find('.slds-notify').exists()).toBeTruthy();
    const iconContainer = mounted.find('.slds-icon_container');
    const icon = iconContainer.find('p');
    expect(iconContainer.hasClass('slds-m-right_small')).toBeTruthy();
    expect(icon.prop('size')).toEqual('small');
    expect(mounted.find('.slds-notify__close').find(ButtonIcon).prop('size')).toEqual('large');
  });

  it('applies rest props, classname and theme', () => {
    const mounted = getComponent({
      'aria-hidden': true,
      className: 'foo',
      theme: 'info'
    });

    const notification = mounted.find('.slds-notify');
    expect(notification.hasClass('slds-theme_info')).toBeTruthy();
    expect(notification.hasClass('foo')).toBeTruthy();
    expect(notification.prop('aria-hidden')).toBeTruthy();
  });
});

