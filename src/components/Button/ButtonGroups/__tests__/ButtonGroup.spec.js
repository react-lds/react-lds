import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from '../ButtonGroup';

const sampleChild = <span>Foo</span>;

const getComponent = (props = {}) => shallow(<ButtonGroup {...props}>{sampleChild}</ButtonGroup>);

describe('<ButtonGroup />', () => {
  it('applies rest props and additional classes', () => {
    const mounted = getComponent({ className: 'foo', 'aria-hidden': true });
    const el = mounted.find('.slds-button-group');
    expect(el.prop('aria-hidden')).toBeTruthy();
    expect(el.hasClass('foo')).toBeTruthy();
  });

  it('renders children', () => {
    const mounted = getComponent();
    expect(mounted.contains(sampleChild)).toBeTruthy();
  });

  it('renders as div group by default', () => {
    const mounted = getComponent();
    expect(mounted.find('div.slds-button-group').prop('role')).toEqual('group');
  });

  it('renders as list', () => {
    const mounted = getComponent({ list: true });
    const wrapper = mounted.find('ul.slds-button-group-list');
    expect(wrapper.prop('role')).toBeNull();
    expect(wrapper.find('li').hasClass('slds-button-group-item')).toBeFalsy();
    expect(wrapper.find('li').contains(sampleChild)).toBeTruthy();
  });

  it('renders as row', () => {
    const mounted = getComponent({ row: true });
    const wrapper = mounted.find('ul.slds-button-group-row');
    expect(wrapper.prop('role')).toBeNull();
    expect(wrapper.find('li').hasClass('slds-button-group-item')).toBeTruthy();
    expect(wrapper.find('li').contains(sampleChild)).toBeTruthy();
  });
});
