import React from 'react';
import { shallow } from 'enzyme';
import StatefulButton from '../StatefulButton';
import Button from '../Button';

const getComponent = (props = {}) => shallow(
  <StatefulButton {...props}>Foo</StatefulButton>
);

describe('<StatefulButton />', () => {
  it('applies rest props and additional classes', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('.slds-button_stateful');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders children', () => {
    const mounted = getComponent();
    expect(mounted.find(Button).prop('children')).toEqual('Foo');
  });

  it('renders not selected', () => {
    const mounted = getComponent({ selected: false });
    expect(mounted.find('.slds-button_stateful').hasClass('slds-not-selected')).toBeTruthy();
  });

  it('renders as selected', () => {
    const mounted = getComponent({ selected: true });
    expect(mounted.find('.slds-button_stateful').hasClass('slds-is-selected')).toBeTruthy();
  });
});
