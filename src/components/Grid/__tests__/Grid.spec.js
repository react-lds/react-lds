import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from '../Grid';

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
});
