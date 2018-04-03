import React from 'react';
import { shallow } from 'enzyme';
import ButtonIcon from '../ButtonIcon';
import { IconSVG } from '../../../..';

const getComponent = (props = {}) => shallow(
  <ButtonIcon
    icon="foo"
    sprite="standard"
    {...props}
  />
);

describe('<ButtonIcon />', () => {
  it('applies rest props and additional classes', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('.slds-button__icon');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders an IconSVG', () => {
    const mounted = getComponent();
    const svgEl = mounted.find(IconSVG);
    expect(svgEl.prop('icon')).toEqual('foo');
    expect(svgEl.prop('sprite')).toEqual('standard');
    expect(svgEl.prop('isButton')).toBeTruthy();
  });

  it('renders with custom sizes', () => {
    const mounted = getComponent({ size: 'small' });
    expect(mounted.find('.slds-button__icon').hasClass('slds-button__icon_small')).toBeTruthy();
  });

  it('renders with a position', () => {
    const mounted = getComponent({ position: 'left' });
    expect(mounted.find('.slds-button__icon').hasClass('slds-button__icon_left')).toBeTruthy();
  });
});
