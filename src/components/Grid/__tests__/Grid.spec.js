import React from 'react';
import { shallow } from 'enzyme';

import Grid from '../Grid';

describe('<Grid />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  beforeEach(() => {
    mounted = shallow(<Grid>{child}</Grid>);
  });

  it('renders children', () => {
    expect(mounted.find('.slds-grid').length).toBe(1);
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-grid').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-grid').prop('data-test')).toEqual('bar');
  });

  it('applies flavoring', () => {
    mounted.setProps({ flavor: 'reverse' });
    expect(mounted.find('.slds-grid').hasClass('slds-grid_reverse')).toBeTruthy();
    mounted.setProps({ flavor: ['vertical', 'reverse'] });
    expect(mounted.find('.slds-grid').hasClass('slds-grid_vertical')).toBeTruthy();
    expect(mounted.find('.slds-grid').hasClass('slds-grid_reverse')).toBeTruthy();
  });

  it('applies variationing', () => {
    mounted.setProps({ wrap: true });
    expect(mounted.find('.slds-grid').hasClass('slds-wrap')).toBeTruthy();
  });

  it('applies gutters when set to true', () => {
    mounted.setProps({ gutters: true });
    expect(mounted.find('.slds-grid').hasClass('slds-gutters')).toBeTruthy();
  });

  it('applies gutters when set to size', () => {
    mounted.setProps({ gutters: 'small' });
    expect(mounted.find('.slds-grid').hasClass('slds-gutters_small')).toBeTruthy();
  });

  it('applies direct gutters when set to true', () => {
    mounted.setProps({ gutters: true, guttersDirect: true });
    expect(mounted.find('.slds-grid').hasClass('slds-gutters_direct')).toBeTruthy();
  });

  it('applies direct gutters when set to string', () => {
    mounted.setProps({ gutters: 'small', guttersDirect: true });
    expect(mounted.find('.slds-grid').hasClass('slds-gutters_direct-small')).toBeTruthy();
  });

  it('renders as arbitrary DOM node', () => {
    mounted.setProps({ as: 'footer' });
    expect(mounted.find('footer.slds-grid').exists()).toBeTruthy();
  });
});
