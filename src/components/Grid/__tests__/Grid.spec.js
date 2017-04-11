import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { Grid } from '../Grid';

describe('<Grid />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<Grid>{child}</Grid>, options);
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
