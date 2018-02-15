import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';

const getComponent = (props = {}) => shallow(<Button {...props}>Download</Button>);

describe('<Button />', () => {
  it('applies rest props and additional classes', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('.slds-button');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders children', () => {
    const mounted = getComponent();
    expect(mounted.text()).toEqual('Download');
  });

  it('renders as button by default', () => {
    const mounted = getComponent();
    const el = mounted.find('button');
    expect(el.exists()).toBeTruthy();
  });

  it('renders as link', () => {
    const mounted = getComponent({ href: '#derp' });
    const el = mounted.find('a');
    expect(el.exists()).toBeTruthy();
  });

  it('renders a button with icon via a shortcut', () => {
    const mounted = getComponent({ icon: 'foo', sprite: 'standard' });
    const el = mounted.find('.slds-button');
    expect(el.hasClass('slds-button_neutral')).toBeTruthy();
    const iconEl = el.find(ButtonIcon);
    expect(iconEl.prop('icon')).toEqual('foo');
    expect(iconEl.prop('sprite')).toEqual('standard');
    expect(iconEl.prop('position')).toEqual('left');
  });

  it('renders flavors', () => {
    const mounted = getComponent({ flavor: 'success' });
    expect(mounted.hasClass('slds-button_success')).toBeTruthy();
  });

  it('renders without a flavor', () => {
    const mounted = getComponent({ flavor: null });
    expect(mounted.hasClass('slds-button_neutral')).not.toBeTruthy();
  });
});
