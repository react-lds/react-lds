import React from 'react';
import { shallow } from 'enzyme';
import StatefulButtonState from '../StatefulButtonState';
import ButtonIcon from '../ButtonIcon';

const getComponent = (props = {}) => shallow(
  <StatefulButtonState
    icon="foo"
    sprite="standard"
    state="selected"
    title="foo"
    {...props}
  />
);

describe('<StatefulButtonState />', () => {
  it('applies rest props and additional classes', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('span');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders with a type class', () => {
    const mounted = getComponent();
    expect(mounted.find('.slds-text-selected').exists()).toBeTruthy();
    mounted.setProps({ state: 'not-selected' });
    expect(mounted.find('.slds-text-not-selected').exists()).toBeTruthy();
    mounted.setProps({ state: 'focus' });
    expect(mounted.find('.slds-text-selected-focus').exists()).toBeTruthy();
  });

  it('renders a button icon', () => {
    const mounted = getComponent();
    const buttonEl = mounted.find(ButtonIcon);
    expect(buttonEl.prop('icon')).toEqual('foo');
    expect(buttonEl.prop('sprite')).toEqual('standard');
  });
});
