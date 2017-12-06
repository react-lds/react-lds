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

  it('applies flavoring', () => {
    mounted.setProps({ flavor: 'padded' });
    expect(mounted.find('.slds-col').hasClass('slds-col_padded')).toBeTruthy();
    mounted.setProps({ flavor: ['padded', 'bump-right'] });
    expect(mounted.find('.slds-col').hasClass('slds-col_padded')).toBeTruthy();
    expect(mounted.find('.slds-col').hasClass('slds-col_bump-right')).toBeTruthy();
  });

  it('applies variationing', () => {
    mounted.setProps({ variation: 'shrink' });
    expect(mounted.find('.slds-col').hasClass('slds-shrink')).toBeTruthy();
    mounted.setProps({ variation: ['shrink', 'no-flex'] });
    expect(mounted.find('.slds-col').hasClass('slds-shrink')).toBeTruthy();
    expect(mounted.find('.slds-col').hasClass('slds-no-flex')).toBeTruthy();
  });
});
