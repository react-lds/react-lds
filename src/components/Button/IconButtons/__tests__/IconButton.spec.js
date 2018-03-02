import React from 'react';
import { shallow } from 'enzyme';
import IconButton from '../IconButton';
import Button from '../../Base/Button';
import ButtonIcon from '../../Base/ButtonIcon';

const getComponent = (props = {}) => shallow(<IconButton {...props} />);

describe('<IconButton />', () => {
  it('applies rest props and additional classes', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('.slds-button_icon');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders an icon via a shortcut', () => {
    const mounted = getComponent({ icon: 'foo', sprite: 'standard' });
    const iconEl = mounted.find(ButtonIcon);
    expect(iconEl.prop('icon')).toEqual('foo');
    expect(iconEl.prop('sprite')).toEqual('standard');
  });

  it('renders an icon as child', () => {
    const mounted = getComponent({ children: 'foo' });
    expect(mounted.find(Button).prop('children')[0]).toEqual('foo');
  });

  it('renders an assistive title', () => {
    const mounted = getComponent({ title: 'foo' });
    expect(mounted.find(Button).prop('title')).toEqual('foo');
    expect(mounted.find('.slds-assistive-text').text()).toEqual('foo');
  });

  it('renders bordered', () => {
    const mounted = getComponent({ border: true });
    expect(mounted.find(Button).hasClass('slds-button_icon-border')).toBeTruthy();
    mounted.setProps({ border: 'filled' });
    expect(mounted.find(Button).hasClass('slds-button_icon-border-filled')).toBeTruthy();
  });

  it('renders inverse correctly with a border', () => {
    const mounted = getComponent({ flavor: 'inverse', border: true });
    expect(mounted.find(Button).hasClass('slds-button_icon-border-inverse')).toBeTruthy();
    expect(mounted.find(Button).hasClass('slds-button_icons-inverse')).not.toBeTruthy();
  });

  it('renders as a container', () => {
    const mounted = getComponent({ container: true });
    expect(mounted.find(Button).hasClass('slds-button_icon-container')).toBeTruthy();
  });

  it('renders sizes', () => {
    const mounted = getComponent({ size: 'small' });
    expect(mounted.find(Button).hasClass('slds-button_icon-small')).toBeTruthy();
  });

  it('renders a more icon', () => {
    const mounted = getComponent({ more: true });
    expect(mounted.find(Button).hasClass('slds-button_icon-more')).toBeTruthy();
    expect(mounted.find(ButtonIcon).exists()).toBeTruthy();
  });

  it('renders flavors', () => {
    const mounted = getComponent({ flavor: 'brand' });
    expect(mounted.find(Button).hasClass('slds-button_icon-brand')).toBeTruthy();
  });
});
