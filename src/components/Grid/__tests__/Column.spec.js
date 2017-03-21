import React from 'react';
import { shallow } from 'enzyme';

import { Column } from '../Column';

describe('<Column />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<Column>{child}</Column>, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-col').length).toBe(1);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders alignments', () => {
    mounted.setProps({ align: 'top' });
    expect(mounted.find('.slds-col').hasClass('slds-align-top')).toBeTruthy();
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
});
