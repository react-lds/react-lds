import React from 'react';
import { shallow } from 'enzyme';

import Column from '../Column';

describe('<Column />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  beforeEach(() => {
    mounted = shallow(<Column>{child}</Column>);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-col').length).toBe(1);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-col').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-col').prop('data-test')).toEqual('bar');
  });

  it('omits .slds-col', () => {
    mounted.setProps({ omitCol: true });
    expect(mounted.find('.slds-col').length).toBe(0);
  });

  it('applies variationing', () => {
    mounted.setProps({ variation: 'shrink' });
    expect(mounted.find('.slds-col').hasClass('slds-shrink')).toBeTruthy();
    mounted.setProps({ variation: ['shrink', 'no-flex'] });
    expect(mounted.find('.slds-col').hasClass('slds-shrink')).toBeTruthy();
    expect(mounted.find('.slds-col').hasClass('slds-no-flex')).toBeTruthy();
  });

  it('applies sizeOf classes, with breakpoint and without', () => {
    mounted.setProps({ sizeOf: '10-12' });
    expect(mounted.find('.slds-col').hasClass('slds-size_10-of-12')).toBeTruthy();
    mounted.setProps({ 'small-sizeOf': '10-12' });
    expect(mounted.find('.slds-col').hasClass('slds-small-size_10-of-12')).toBeTruthy();
  });

  it('applies order classes, with breakpoint and without', () => {
    mounted.setProps({ order: '10' });
    expect(mounted.find('.slds-col').hasClass('slds-order_10')).toBeTruthy();
    mounted.setProps({ 'small-order': '3' });
    expect(mounted.find('.slds-col').hasClass('slds-small-order_3')).toBeTruthy();
  });
});
