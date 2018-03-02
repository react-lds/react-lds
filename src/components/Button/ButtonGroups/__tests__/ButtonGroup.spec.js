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

  it('renders as list', () => {
    const mounted = getComponent({ list: true });
    expect(mounted.find('ul').hasClass('slds-button-group-list')).toBeTruthy();
    expect(mounted.find('li').contains(sampleChild)).toBeTruthy();
  });
});
